import React, { useState } from 'react';

const MagnifyingGlassIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-secondary-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
    />
  </svg>
);

const VillageSearch = () => {
  const [village, setVillage] = useState('');
  return (
    <form className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="flex w-full">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon />
          </span>
          <input
            type="text"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            placeholder="Enter your village name..."
            className="pl-10 pr-4 py-2 border border-secondary-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
        <button type="submit" className="btn-primary px-6 py-2 rounded-r-lg">
          Find Village
        </button>
      </div>
      <div className="mt-2 text-sm text-secondary-600">
        Don't see your village?{' '}
        <a href="/create-village" className="underline">
          Create New Village
        </a>
      </div>
    </form>
  );
};

export default VillageSearch;
