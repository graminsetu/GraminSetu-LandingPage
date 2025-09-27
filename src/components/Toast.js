import React, { useEffect } from 'react';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-base font-semibold transition-all ${type === 'error' ? 'bg-red-600' : 'bg-gramin-700'}`}
    >
      {message}
    </div>
  );
}

export default Toast;
