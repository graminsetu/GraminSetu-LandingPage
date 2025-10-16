import React, { useEffect, useRef, useState } from 'react';
import supportVideo from '../../assets/images/support.mp4';
import graminLogo from '../../assets/images/graminsetu-logo.png';

const STORAGE_MESSAGES = 'helpSupportMessages_v1';

const defaultWelcome = {
  id: 1,
  from: 'bot',
  text: "Hi — I'm GraminSetu Assistant. How can I help you today?",
  time: Date.now(),
};

const HelpSupportModal = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_MESSAGES);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [defaultWelcome];
  });

  const [input, setInput] = useState('');
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState([]);
  const [messageStatusMap, setMessageStatusMap] = useState({});
  const [isSending, setIsSending] = useState(false);

  // persist messages
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_MESSAGES, JSON.stringify(messages));
    } catch (e) {}
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
      try {
        localStorage.setItem('helpSupportHasUnread', 'false');
      } catch (e) {}
      try {
        window.dispatchEvent(new CustomEvent('helpSupport:clear'));
      } catch (e) {}
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
    // smooth scroll to bottom
    try {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    } catch (e) {
      el.scrollTop = el.scrollHeight;
    }
    // trigger simple entrance animation hook: reset then set to retrigger
    setAnimate(false);
    setTimeout(() => setAnimate(true), 30);
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

  const generateReply = (userText) => {
    const lowered = userText.toLowerCase();
    if (lowered.includes('register') || lowered.includes('sign up')) {
      return 'You can register by clicking the Sign Up button on the homepage or visiting the Contact page — would you like me to navigate you there?';
    }
    if (lowered.includes('pricing') || lowered.includes('price')) {
      return 'Basic features are free for villagers. For business/NGO plans, please visit our pricing page or contact sales@graminsetu.in for custom plans.';
    }
    if (lowered.includes('support') || lowered.includes('help')) {
      return 'You can reach our support via WhatsApp or email. Use the links provided in this panel.';
    }
    return "Thanks for your message — our team will get back shortly. Meanwhile try keywords like 'register', 'pricing', or 'support'.";
  };

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
        // generate quick reply suggestions based on reply
        try {
          const suggestions = [];
          const t = replyText.toLowerCase();
          if (t.includes('register')) suggestions.push('How do I register?');
          if (t.includes('pricing') || t.includes('price')) suggestions.push('Show pricing');
          if (t.includes('support')) suggestions.push('Contact support');
          if (!suggestions.length)
            suggestions.push('Tell me about registration', 'Pricing', 'Contact support');
          setQuickReplies(suggestions);
        } catch (e) {
          setQuickReplies([]);
        }
        setIsTyping(false);
        // ensure the sending state is cleared after bot reply arrives
        try {
          setIsSending(false);
        } catch (e) {}
        // If panel is not focused, mark unread and notify button
        try {
          const shouldMark = !document.hasFocus();
          if (shouldMark) {
            localStorage.setItem('helpSupportHasUnread', 'true');
            window.dispatchEvent(new CustomEvent('helpSupport:unread'));
          }
        } catch (e) {}
        // update user message status to delivered then read to simulate delivery receipts
        try {
          setMessageStatusMap((s) => ({ ...s, [id]: 'delivered' }));
          setTimeout(
            () => {
              setMessageStatusMap((s) => ({ ...s, [id]: 'read' }));
              // final clear to be safe
              try {
                setIsSending(false);
              } catch (e) {}
            },
            700 + Math.random() * 400
          );
        } catch (e) {}
      },
      900 + Math.min(1200, text.length * 30)
    );
  };

  // clearConversation removed per UX request

  // handle enter key in textarea (Enter to send, Shift+Enter newline)
  const handleKeyDown = (e) => {
    // Respect IME composition
    if (e.nativeEvent && e.nativeEvent.isComposing) return;
    // Prevent send while a send is in-flight
    if (isSending) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-end md:items-center pb-12"
      role="dialog"
      aria-modal="true"
      aria-label="Help and support"
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => {
          if (open) onClose();
        }}
        aria-hidden={!open}
      />

      <aside
        ref={modalRef}
        tabIndex={-1}
        className={`relative bg-white w-full max-w-xs h-full md:h-auto md:rounded-l-2xl p-0 shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ maxHeight: '80vh' }}
        aria-hidden={!open}
      >
        {/* Header - refined */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: 'linear-gradient(90deg,#06b67a,#0ea55e)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden relative ring-1 ring-white/10">
              <img src={graminLogo} alt="GraminSetu" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">GraminSetu Assistant</div>
              <div className="text-xs text-white/90">How can we help you today?</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close support panel"
              className="p-2 rounded-md hover:bg-white/10 text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main panel */}
        <>
          {/* Messages */}
          <div className="p-4">
            <div
              ref={scrollRef}
              className="space-y-4 overflow-auto"
              style={{ maxHeight: '60vh', minHeight: '12rem' }}
              aria-live="polite"
              aria-atomic="false"
            >
              {!hasUserInteracted && (
                <div className="flex items-center justify-center py-2 -mt-3 transition-opacity duration-300 opacity-100">
                  <div className="w-full max-w-[240px] rounded-lg overflow-hidden shadow-sm">
                    <video
                      src={supportVideo}
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden
                    />
                  </div>
                </div>
              )}

              {messages.map((m, idx) => {
                const prev = messages[idx - 1];
                const showAvatar = !prev || prev.from !== m.from;
                const isUser = m.from === 'user';
                const status = messageStatusMap[m.id];
                return (
                  <div
                    key={m.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'} transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                  >
                    {!isUser && showAvatar && (
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gramin-600 text-sm mr-3 shadow">
                        🤖
                      </div>
                    )}

                    <div className={`max-w-[78%] ${isUser ? 'ml-4' : ''}`}>
                      <div
                        className={`px-4 py-2 rounded-2xl shadow ${isUser ? 'bg-gradient-to-br from-gramin-600 to-gramin-500 text-white' : 'bg-white border border-gray-100 text-gramin-900'}`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-[10px] text-gray-400">
                            {new Date(m.time).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                          {isUser && (
                            <div className="flex items-center gap-1 ml-2">
                              {status === 'sending' && (
                                <span className="text-[10px] text-gray-300">Sending…</span>
                              )}
                              {status === 'sent' && (
                                <svg
                                  className="w-3 h-3 text-white/90"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                              {status === 'delivered' && (
                                <svg
                                  className="w-3 h-3 text-white/80"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M22 6L12 17l-4-4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                              {status === 'read' && (
                                <svg
                                  className="w-3 h-3 text-green-200"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M22 6L12 17l-4-4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {isUser && showAvatar && (
                      <div className="w-8 h-8 rounded-full bg-gramin-600 flex items-center justify-center text-white text-sm ml-3 shadow">
                        You
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Quick reply chips */}
              {quickReplies && quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickReplies.map((q, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        sendMessage(q);
                        setQuickReplies([]);
                      }}
                      className="text-xs px-3 py-1 rounded-full bg-gramin-50 border border-gray-200 text-gramin-700 hover:bg-gramin-100"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gramin-600 text-sm mr-2">
                    🤖
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '100ms' }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '200ms' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (isSending) return;
                sendMessage(input);
              }}
              className="flex items-center gap-3"
            >
              <div className="relative flex-1">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    resizeTextarea(textareaRef.current);
                  }}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Ask a question or type a message..."
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gramin-200 pr-14 placeholder:text-gray-400"
                  aria-label="Type your question"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <button
                    type="submit"
                    disabled={!input.trim() || isSending}
                    aria-label="Send message"
                    aria-disabled={!input.trim() || isSending}
                    aria-busy={isSending}
                    title={isSending ? 'Sending…' : 'Send message'}
                    className={`inline-flex items-center justify-center rounded-full w-11 h-11 transition transform focus:outline-none focus:ring-2 focus:ring-gramin-200 ${input.trim() && !isSending ? 'bg-gramin-600 text-white hover:scale-105 active:scale-95 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    style={{ marginRight: 2 }}
                  >
                    <span className="sr-only">{isSending ? 'Sending' : 'Send message'}</span>
                    {!isSending && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
                      </svg>
                    )}
                    {isSending && (
                      <svg
                        className="animate-spin text-white"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray="75"
                          strokeDashoffset="55"
                          fill="none"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      </aside>
    </div>
  );
};

export default HelpSupportModal;
