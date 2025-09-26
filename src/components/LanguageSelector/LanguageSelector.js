import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
];

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z"
    />
  </svg>
);

const LanguageSelector = () => {
  const [selected, setSelected] = useState('en');
  const [open, setOpen] = useState(false);
  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gramin-700 hover:text-gramin-900 hover:bg-gramin-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <GlobeIcon />
        <span className="hidden sm:block text-sm font-medium">
          {languages.find((lang) => lang.code === selected)?.nativeName}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gramin-200 z-50">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gramin-50 ${selected === lang.code ? 'font-bold text-gramin-900' : 'text-gramin-700'}`}
                onClick={() => {
                  setSelected(lang.code);
                  setOpen(false);
                }}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
