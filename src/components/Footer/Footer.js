import React, { useState, useEffect } from 'react';
import { footerContent } from '../../constants/footerContent';
import { Mail, ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react';
import graminSetuLogo from '../../assets/images/graminsetu-logo.png';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-base font-semibold transition-all ${
        type === 'error' ? 'bg-red-600' : 'bg-gradient-to-r from-gramin-600 to-gramin-700'
      }`}
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
      className="bg-gradient-to-br from-gramin-800 via-gramin-900 to-gramin-800 text-white pt-16 md:pt-20 pb-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gramin-600/20 to-gramin-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-setu-600/20 to-setu-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section - Logo & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <img src={graminSetuLogo} alt="GraminSetu" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-white">GraminSetu</span>
            </div>
            <p className="text-gramin-100 text-base sm:text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              {footerContent.mission}
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-gramin-300 hover:text-gramin-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-gramin-300 hover:text-gramin-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-gramin-300 hover:text-gramin-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div
            id="newsletter"
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gramin-500 to-gramin-600 flex items-center justify-center shadow-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gramin-900">Stay Updated</h3>
                <p className="text-gramin-600 text-sm">Get demos & updates</p>
              </div>
            </div>
            <form
              className="flex flex-col gap-3"
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
                      message: 'Thank you! You are now subscribed!',
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
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gramin-500 focus:border-gramin-500 text-slate-900 placeholder-slate-400 bg-white transition-all outline-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gramin-600 to-gramin-700 hover:from-gramin-700 hover:to-gramin-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  <span>Subscribe</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wide uppercase text-gramin-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerContent.quickLinks
                .filter(
                  (link) =>
                    link.label !== 'Govt Schemas' &&
                    link.label !== 'Carrier' &&
                    link.label !== 'Government Schemes'
                )
                .slice(0, 5)
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gramin-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wide uppercase text-gramin-200">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wide uppercase text-gramin-200">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gramin-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wide uppercase text-gramin-200">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gramin-300">
              <li className="font-medium text-gramin-200">Email:</li>
              <li>
                <a
                  href="mailto:support@graminsetu.com"
                  className="hover:text-white transition-colors"
                >
                  support@graminsetu.com
                </a>
              </li>
              <li className="font-medium mt-3 text-gramin-200">Phone:</li>
              <li>
                <a href="tel:+919704635156" className="hover:text-white transition-colors">
                  +91 9704635156
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <p className="text-gramin-300 text-sm font-medium mb-2">{footerContent.copyright}</p>
          <p className="text-gramin-400 text-xs">Made with ❤️ for Rural India</p>
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
