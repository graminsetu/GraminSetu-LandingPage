import React, { useEffect, useRef, useState } from 'react';
import graminLogo from '../../assets/images/graminsetu-logo.png';
import sampleVideo from '../../assets/images/support.mp4';

import {
  defaultWelcome,
  initialQuestions,
  generateReply,
  generateQuickReplies,
} from '../../constants/chatbotContent';
const HelpSupportModal = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([defaultWelcome]);

  const [input, setInput] = useState('');
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState([
    'How do I register?',
    'What are the pricing plans?',
    'How can I contact support?',
  ]);
  const [messageStatusMap, setMessageStatusMap] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [context, setContext] = useState('default'); // Track the current conversation context

  // persist messages
  useEffect(() => {
    // No persistence for public chatbot
  }, [messages]);

  // (removed minimized persistence)

  // Focus + escape handling + restore focus
  useEffect(() => {
    const prev = document.activeElement;
    if (open) {
      try {
        console.debug('HelpSupportModal opened');
      } catch (e) {}
      modalRef.current && modalRef.current.focus();
      // autofocus textarea a short time after open so animation can finish
      setTimeout(() => {
        try {
          textareaRef.current && textareaRef.current.focus();
        } catch (e) {}
      }, 120);
      // ensure textarea resized after open
      setTimeout(() => {
        try {
          resizeTextarea(textareaRef.current);
        } catch (e) {}
      }, 140);
      // clear unread flag when user opens the panel
      // No persistence for public chatbot
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev && prev.focus && prev.focus();
    };
  }, [open, onClose]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    // Enhanced smooth scroll to bottom with animation trigger
    try {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      // trigger entrance animation hook with staggered timing
      setAnimate(false);
      setTimeout(() => setAnimate(true), 50);
    } catch (e) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isTyping]);

  const [animate, setAnimate] = useState(false);

  // textarea ref + autosize
  const textareaRef = useRef(null);
  const MAX_TEXTAREA_HEIGHT = 160; // px (~6-8 lines depending on font)

  const resizeTextarea = (el) => {
    if (!el) return;
    try {
      el.style.height = 'auto';
      const newHeight = Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT);
      el.style.height = `${newHeight}px`;
      el.style.overflowY = el.scrollHeight > MAX_TEXTAREA_HEIGHT ? 'auto' : 'hidden';
    } catch (e) {}
  };

  // simple focus trap: keep Tab within modal when open
  useEffect(() => {
    if (!open) return;
    const node = modalRef.current;
    if (!node) return;
    const focusable = node.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    function handleTab(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [open]);

  const sendMessage = (text) => {
    if (isSending) return;
    if (!text || !text.trim()) return;
    const id = Date.now();
    const userMsg = { id, from: 'user', text: text.trim(), time: Date.now() };
    // prevent rapid double sends
    setIsSending(true);
    // mark as sending
    setMessageStatusMap((s) => ({ ...s, [id]: 'sending' }));
    setMessages((m) => [...m, userMsg]);
    setHasUserInteracted(true);
    setInput('');
    // reset textarea height and focus
    try {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.focus();
      }
    } catch (e) {}
    // show typing
    setIsTyping(true);
    // mark user message sent shortly
    setTimeout(
      () => {
        setMessageStatusMap((s) => ({ ...s, [id]: 'sent' }));
        // allow sending another message after initial send state
        setTimeout(() => setIsSending(false), 60);
      },
      250 + Math.random() * 200
    );

    // Simulated bot reply with natural typing delay
    setTimeout(
      () => {
        const replyText = generateReply(text.trim());
        const botMsg = { id: Date.now() + 1, from: 'bot', text: replyText, time: Date.now() };
        setMessages((m) => [...m, botMsg]);
        setQuickReplies([]); // Clear quick replies when a message is sent
        setQuickReplies(generateQuickReplies(replyText));
        setIsTyping(false);
      },
      700 + Math.random() * 800
    );
  };

  const handleQuickReplyClick = (reply) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), from: 'user', text: reply, time: Date.now() },
    ]);

    const botReply = generateReply(reply);
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now(), from: 'bot', text: botReply, time: Date.now() },
      ]);
      const newContext = reply.toLowerCase();
      setContext(newContext); // Update the context based on the user's reply
      setQuickReplies(generateQuickReplies(newContext)); // Update quick replies dynamically
      setIsTyping(false);
    }, 1000);
  };

  // Example usage of resetContext
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // Function to render message content, handling URLs
  const renderMessageContent = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Function to get avatar based on sender
  const getAvatar = (from) => {
    if (from === 'bot') {
      return (
        <img
          src={graminLogo}
          alt="GraminSetu Assistant"
          className="w-8 h-8 rounded-full object-cover"
        />
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-gramin-200 flex items-center justify-center text-gramin-700 font-bold text-sm">
        You
      </div>
    );
  };

  // Function to get message bubble styles
  const getBubbleStyles = (from) => {
    if (from === 'bot') {
      return 'bg-gray-100 text-gray-800 rounded-br-xl rounded-tl-xl rounded-tr-xl';
    }
    return 'bg-gradient-to-r from-gramin-600 to-gramin-500 text-white rounded-bl-xl rounded-tl-xl rounded-tr-xl';
  };

  // Function to get message alignment
  const getMessageAlignment = (from) => {
    if (from === 'bot') {
      return 'justify-start';
    }
    return 'justify-end';
  };

  // Function to get message container padding
  const getMessageContainerPadding = (from) => {
    if (from === 'bot') {
      return 'pr-10';
    }
    return 'pl-10';
  };

  // Function to get message animation class
  const getMessageAnimationClass = (index) => {
    return animate ? `animate-message-in delay-${index * 50}` : '';
  };

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 animate-pulse">
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
    </div>
  );

  // Effect to show initial questions if no user interaction
  useEffect(() => {
    if (!hasUserInteracted && messages.length === 1 && messages[0].id === defaultWelcome.id) {
      setQuickReplies(initialQuestions);
    } else if (hasUserInteracted && messages.length > 1) {
      // Clear initial questions once user interacts and messages are exchanged
      setQuickReplies([]);
    }
  }, [hasUserInteracted, messages]);

  // Effect to update quick replies based on context changes
  useEffect(() => {
    if (context === 'default') {
      setQuickReplies(initialQuestions);
    }
  }, [context]);

  if (!open) return null;

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-support-title"
      className={`fixed bottom-24 right-0 z-50 flex items-end justify-end p-6 transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        className={`relative bg-white rounded-2xl shadow-xl flex flex-col w-full max-w-xs h-[90vh] max-h-[800px] border border-gray-300 transition-transform transition-opacity duration-500 ease-in-out transform ${open ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-gramin-600 to-gramin-500 text-white rounded-t-2xl shadow-sm">
          <h2 id="help-support-title" className="text-lg font-semibold flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gramin-100"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.09 9C9.3251 8.33137 9.78923 7.74873 10.4041 7.3337C11.0189 6.91868 11.756 6.68915 12.5 6.68915C13.244 6.68915 13.9811 6.91868 14.5959 7.3337C15.2108 7.74873 15.6749 8.33137 15.91 9M12 16h.01M12 12V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            GraminSetu Assistant
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-300 transition-colors"
            aria-label="Close chat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <video src={sampleVideo} autoPlay loop muted className="w-full h-auto rounded-lg mb-4" />
          <div className="flex flex-col space-y-4">
            {messages.map((m, i) => {
              const next = messages[i + 1];
              const hideAvatar = next && next.from === m.from;
              const showTimestamp = !next || next.from !== m.from || next.time - m.time > 60 * 1000;

              return (
                <div
                  key={m.id}
                  className={`flex ${getMessageAlignment(m.from)} ${getMessageContainerPadding(m.from)} ${getMessageAnimationClass(i)}`}
                >
                  {!hideAvatar && m.from === 'bot' && (
                    <div className="mr-2 self-end flex-shrink-0">{getAvatar(m.from)}</div>
                  )}
                  <div
                    className={`flex flex-col max-w-[75%] ${m.from === 'bot' ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`p-3 rounded-xl shadow-sm text-sm relative ${getBubbleStyles(m.from)}`}
                    >
                      {renderMessageContent(m.text)}
                      {m.from === 'user' && messageStatusMap[m.id] === 'sending' && (
                        <span className="absolute -bottom-1.5 -right-1.5 text-xs text-gray-300">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="animate-pulse"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    {showTimestamp && (
                      <span
                        className={`text-xs text-gray-500 mt-1 ${m.from === 'bot' ? 'ml-1' : 'mr-1'}`}
                      >
                        {new Date(m.time).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    )}
                  </div>
                  {!hideAvatar && m.from === 'user' && (
                    <div className="ml-2 self-end flex-shrink-0">{getAvatar(m.from)}</div>
                  )}
                </div>
              );
            })}
            {isTyping && (
              <div className="flex justify-start pr-10">
                <div className="mr-2 self-end flex-shrink-0">{getAvatar('bot')}</div>
                <div className="p-3 rounded-xl shadow-sm text-sm bg-gray-100 text-gray-800 rounded-br-xl rounded-tl-xl rounded-tr-xl">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Replies */}
        {quickReplies.length > 0 && (
          <div className="px-4 py-3.5 border-t border-gray-200 bg-white flex flex-wrap gap-2 justify-center">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReplyClick(reply)}
                className="px-4 py-2 text-sm font-medium text-gramin-700 bg-gramin-100 rounded-full hover:bg-gramin-200 focus:outline-none focus:ring-2 focus:ring-gramin-300 transition-colors duration-200"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3.5 border-t bg-white shadow-[0_-1px_2px_rgba(0,0,0,0.03)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isSending) return;
              sendMessage(input);
            }}
            className="flex items-center gap-3 relative"
          >
            <div className="relative flex-1 group">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  resizeTextarea(textareaRef.current);
                }}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type your message..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-gramin-300 focus:ring-2 focus:ring-gramin-100 pr-14 placeholder:text-gray-400 transition-all"
                aria-label="Type your question"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                <button
                  type="submit"
                  disabled={!input.trim() || isSending}
                  aria-label="Send message"
                  aria-disabled={!input.trim() || isSending}
                  aria-busy={isSending}
                  title={isSending ? 'Sending…' : 'Send message'}
                  className={`inline-flex items-center justify-center rounded-full w-10 h-10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gramin-200 ${
                    input.trim() && !isSending
                      ? 'bg-gradient-to-r from-gramin-600 to-gramin-500 text-white hover:scale-105 hover:shadow-md active:scale-95 shadow'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  style={{ marginRight: 2 }}
                >
                  <span className="sr-only">{isSending ? 'Sending' : 'Send message'}</span>
                  {!isSending && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {isSending && (
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="60"
                        strokeDashoffset="45"
                        fill="none"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportModal;
