import React from 'react';

const EarlySupportersSection = () => {
  const supporters = [
    {
      name: 'Gram Vikas Trust',
      logo: require('../assets/images/graminsetu-logo.png'),
      website: 'https://www.gramvikastrust.org/',
    },
    {
      name: 'Seva Foundation',
      logo: require('../assets/images/graminsetu-logo.png'),
      website: 'https://www.seva.org/',
    },
    // Add more as you onboard them, or use placeholders
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gramin-50 via-white to-setu-50 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-30"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="700" cy="100" r="120" fill="#16a34a" fillOpacity="0.08" />
          <circle cx="100" cy="350" r="80" fill="#228B22" fillOpacity="0.07" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gramin-700 drop-shadow-sm">
          Early Supporters
        </h2>
        <p className="mb-10 text-gramin-800 text-lg md:text-xl font-medium">
          GraminSetu is building a digital bridge for rural India.
          <br />
          We’re grateful to our early supporters and invite you to help shape the future!
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {supporters.map((s, idx) => (
            <a
              key={idx}
              href={s.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-6 transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gramin-100"
              style={{ minWidth: 160 }}
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-16 w-16 object-contain mb-3 rounded-full border-4 border-gramin-100 group-hover:border-gramin-600 transition"
                loading="lazy"
              />
              <span className="text-base font-semibold text-gramin-700 group-hover:text-gramin-600 transition">
                {s.name}
              </span>
            </a>
          ))}
          {/* Placeholder for future supporters */}
          <div
            className="flex flex-col items-center bg-gray-100 rounded-2xl px-8 py-6 border border-dashed border-gramin-200 opacity-70"
            style={{ minWidth: 160 }}
          >
            <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-gray-500 mb-3">
              ?
            </div>
            <span className="text-base font-semibold text-gray-500 mt-2">Your NGO Here</span>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-gramin-600 text-white rounded-xl font-bold shadow-lg hover:bg-gramin-700 transition text-lg tracking-wide"
        >
          Become an Early Adopter
        </a>
        <div className="mt-10 text-gramin-500 text-base flex flex-col md:flex-row items-center justify-center gap-2">
          <span className="font-semibold">Enterprise-Grade Security</span>
          <span className="hidden md:inline">&nbsp;|&nbsp;</span>
          <span>Data Privacy Protected</span>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          <a href="/terms" className="underline mr-2">
            Terms of Service
          </a>
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default EarlySupportersSection;
