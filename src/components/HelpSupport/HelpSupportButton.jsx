import React, { useEffect, useState } from 'react';
import HelpSupportModal from './HelpSupportModal';

const STORAGE_KEY = 'helpSupportOpen';

const HelpSupportButton = () => {
  // restore open state across reloads
  const [open, setOpen] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? JSON.parse(v) : false;
    } catch (e) {
      return false;
    }
  });

  const [hasUnread, setHasUnread] = useState(() => {
    try {
      return localStorage.getItem('helpSupportHasUnread') === 'true';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(open));
    } catch (e) {}
  }, [open]);

  useEffect(() => {
    function onUnread() {
      setHasUnread(true);
    }
    function onClear() {
      setHasUnread(false);
    }
    window.addEventListener('helpSupport:unread', onUnread);
    window.addEventListener('helpSupport:clear', onClear);
    return () => {
      window.removeEventListener('helpSupport:unread', onUnread);
      window.removeEventListener('helpSupport:clear', onClear);
    };
  }, []);

  return (
    <>
      <button
        aria-label={open ? 'Close help and support' : 'Open help and support'}
        title="Help & Support"
        onClick={() => {
          try {
            console.debug('HelpSupportButton clicked - toggling', open);
          } catch (e) {}
          setOpen((s) => !s);
          // clear unread when user opens
          try {
            localStorage.setItem('helpSupportHasUnread', 'false');
          } catch (e) {}
          setHasUnread(false);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((s) => !s);
            setHasUnread(false);
          }
        }}
        aria-pressed={open}
        className="fixed right-4 bottom-8 w-14 h-14 rounded-full bg-gramin-600 text-white flex items-center justify-center shadow-lg hover:scale-105 focus:outline-none pointer-events-auto transform transition-transform duration-200"
        style={{
          zIndex: 99999,
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 30px rgba(6,95,70,0.18)',
        }}
      >
        {/* Headphone SVG */}
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 3a9 9 0 00-9 9v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H6a6 6 0 1112 0h-1a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3a9 9 0 00-9-9z"
            fill="white"
          />
        </svg>
        {hasUnread && (
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 ring-2 ring-white"
            aria-hidden
          />
        )}
      </button>

      <HelpSupportModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HelpSupportButton;
