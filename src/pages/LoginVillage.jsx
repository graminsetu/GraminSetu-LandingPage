import React from 'react';

const LoginVillage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gramin-50 via-white to-setu-50">
    <div className="flex flex-col items-center">
      <svg
        className="animate-bounce w-20 h-20 text-gramin-600 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 64 64"
      >
        <rect x="8" y="40" width="48" height="12" rx="4" fill="#eafaf1" stroke="#02844a" />
        <rect x="20" y="24" width="24" height="16" rx="4" fill="#f6fcf8" stroke="#02844a" />
        <rect x="28" y="12" width="8" height="12" rx="4" fill="#02844a" stroke="#02844a" />
        <circle cx="32" cy="52" r="4" fill="#02844a" />
      </svg>
      <h1 className="text-3xl font-extrabold text-gramin-700 mb-2 text-center">
        Village Portal Login
      </h1>

      <p className="text-lg text-gramin-600 mb-6 text-center max-w-xl">
        This portal is currently being built. Please check back soon for exciting updates and new
        features!
      </p>
      <a
        href="/"
        className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-3 px-8 rounded-full transition text-lg shadow-md mt-4"
      >
        Home
      </a>
    </div>
  </div>
);

export default LoginVillage;
