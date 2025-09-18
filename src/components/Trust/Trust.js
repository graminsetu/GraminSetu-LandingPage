import React from 'react';

const Trust = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gramin-900 mb-6">
        Your Trust & Privacy Matter
      </h2>
      <p className="text-xl text-gramin-600 mb-8">
        We are committed to keeping your village data secure and private
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="security">🔒</span>
          <span className="text-gramin-700 font-medium">Enterprise-Grade Security</span>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="privacy">🛡️</span>
          <span className="text-gramin-700 font-medium">Data Privacy Protected</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/terms" className="text-gramin-600 hover:text-gramin-800 underline">Terms of Service</a>
        <a href="/privacy" className="text-gramin-600 hover:text-gramin-800 underline">Privacy Policy</a>
      </div>
    </div>
  </section>
);

export default Trust;
