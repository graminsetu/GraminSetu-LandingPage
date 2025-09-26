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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Newsletter at the very top */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_0.8fr_1fr] gap-y-8 gap-x-8 md:gap-x-16 items-start justify-center mb-10">
          {/* Newsletter / Demo Request Box */}
          <div
            className="flex flex-col items-center md:items-start w-full md:max-w-lg mb-8 md:mb-0 md:mr-10"
            style={{ flexBasis: '0', flexGrow: 2 }}
          >
            <div
              id="newsletter"
              className="bg-white/90 shadow-2xl rounded-2xl px-8 py-10 w-full max-w-xl flex flex-col items-center border border-gramin-100 backdrop-blur-md mx-auto"
            >
              <h3 className="text-2xl font-extrabold mb-1 flex items-center gap-2 leading-tight text-gramin-800 text-center">
                Stay Tuned for Demos & Updates
              </h3>
              <p className="text-gramin-600 mb-4 text-base leading-relaxed max-w-md text-center">
                Get notified about GraminSetu demos, beta launches, and updates directly in your
                inbox.
              </p>
              <form
                className="flex flex-col sm:flex-row items-center gap-2 w-full justify-center"
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
                        message: 'Thank you! You are now subscribed for updates and demo invites.',
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
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white min-w-[180px] text-lg shadow"
                />
                <button
                  type="submit"
                  className="bg-gramin-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gramin-700 focus:ring-2 focus:ring-gramin-400 transition min-w-[120px] text-lg shadow"
                >
                  <span className="inline-block align-middle mr-1">🚀</span>Stay Updated
                </button>
              </form>
            </div>
          </div>
          {/* Quick Links */}
          <div
            className="flex flex-col items-center md:items-start min-h-[180px] w-full md:max-w-[180px]"
            style={{ flexBasis: '0', flexGrow: 0.8 }}
          >
            <h3 className="text-lg font-bold mb-4 tracking-wide uppercase text-gramin-200 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 w-full max-w-xs mx-auto md:mx-0">
              {footerContent.quickLinks
                .filter(
                  (link) =>
                    link.label !== 'Govt Schemas' &&
                    link.label !== 'Carrier' &&
                    link.label !== 'Government Schemes'
                )
                .map((link) => (
                  <li key={link.href} className="w-full">
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gramin-300 hover:text-gramin-50 transition-colors text-base font-medium px-1 py-1 rounded focus:outline-none focus:bg-gramin-800 group"
                    >
                      <span className="transition-transform group-hover:translate-x-1">🔗</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* Our Team (bottom) */}
          <div className="flex flex-col items-center md:items-start w-full max-w-xs mx-auto md:mx-0">
            <h3 className="text-lg font-bold mb-4 tracking-wide uppercase text-gramin-200 text-center md:text-left">
              Our Team
            </h3>
            <div className="bg-gramin-800/60 rounded-xl p-4 shadow-inner w-full">
              <p className="text-gramin-200 text-base leading-relaxed">{footerContent.teamNote}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gramin-800 pt-8 text-center flex flex-col items-center">
          <p className="text-gramin-400 text-base font-medium">{footerContent.copyright}</p>
          <p className="text-gramin-500 text-xs mt-2 max-w-2xl">{footerContent.mission}</p>
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
