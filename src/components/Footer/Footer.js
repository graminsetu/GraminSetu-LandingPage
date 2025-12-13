import React, { useState, useEffect } from 'react';
// import Logo from '../Logo/Logo';
import { footerContent } from '../../constants/footerContent';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-base font-semibold transition-all ${type === 'error' ? 'bg-red-600' : 'bg-gramin-700'}`}
    >
      {message}
      <button
        onClick={onClose}
        className="ml-4 text-white/80 hover:text-white text-lg font-bold focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
}

function Footer() {
  const [toast, setToast] = useState({ message: '', type: 'success' });

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gramin-900 via-gramin-800 to-gramin-900 text-white pt-12 pb-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle at 80% 10%, #00e6a0 0%, transparent 60%)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section - Full Width on Mobile, Integrated on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Newsletter Box */}
          <div className="lg:col-span-5 w-full">
            <div
              id="newsletter"
              className="bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-gramin-100/20 text-center lg:text-left"
            >
              <h3 className="text-2xl font-extrabold mb-3 text-gramin-900 leading-tight">
                Stay Tuned for Demos & Updates
              </h3>
              <p className="text-gramin-600 mb-6 text-base leading-relaxed">
                Get notified about GraminSetu demos, beta launches, and updates directly in your
                inbox.
              </p>
              <form
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(email)) {
                    setToast({ message: 'Please enter a valid email address.', type: 'error' });
                    return;
                  }
                  try {
                    const response = await fetch(`${process.env.REACT_APP_STRAPI_API_URL}/demos`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        data: {
                          email,
                          demostatus: 'Pending',
                        },
                      }),
                    });
                    if (response.ok) {
                      setToast({
                        message: 'Thank you! You are now subscribed, we will get back to you soon!',
                        type: 'success',
                      });
                      e.target.reset();
                    } else {
                      setToast({
                        message: 'Failed to subscribe. Please try again later.',
                        type: 'error',
                      });
                    }
                  } catch (error) {
                    setToast({
                      message: 'An error occurred. Please try again later.',
                      type: 'error',
                    });
                  }
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-500 focus:border-gramin-500 text-gramin-900 placeholder-gramin-400 bg-white shadow-sm transition-all outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-gramin-600 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-gramin-700 active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>🚀</span> Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Spacer Column (Optional for better visual gap) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links & Team Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-gramin-200 text-center sm:text-left">
                Quick Links
              </h3>
              <ul className="space-y-3 w-full max-w-xs sm:max-w-none text-center sm:text-left">
                {footerContent.quickLinks
                  .filter(
                    (link) =>
                      link.label !== 'Govt Schemas' &&
                      link.label !== 'Carrier' &&
                      link.label !== 'Government Schemes'
                  )
                  .map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-gramin-300 hover:text-white transition-colors text-base font-medium group py-1"
                      >
                        <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                          ➜
                        </span>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Our Team */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-gramin-200 text-center sm:text-left">
                Our Team
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-inner w-full text-center sm:text-left">
                <p className="text-gramin-100 text-base leading-relaxed font-light">
                  {footerContent.teamNote}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-center sm:justify-start gap-3">
                  {/* Social Icons Placeholder - Add actual links if available */}
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs hover:bg-white/30 cursor-pointer transition">
                    IS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs hover:bg-white/30 cursor-pointer transition">
                    LI
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs hover:bg-white/30 cursor-pointer transition">
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-gramin-400 text-sm font-medium">{footerContent.copyright}</p>
          <p className="text-gramin-500 text-xs mt-3 max-w-2xl mx-auto leading-relaxed px-4">
            {footerContent.mission}
          </p>
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: toast.type })}
      />
    </footer>
  );
}

export default Footer;
