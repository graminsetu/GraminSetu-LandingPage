import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';

const Navbar = () => {
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const loginDropdownTimeout = useRef(null);
  const closeTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handlers for login dropdown (hover and click)
  const handleLoginMouseEnter = () => {
    if (loginDropdownTimeout.current) {
      clearTimeout(loginDropdownTimeout.current);
      loginDropdownTimeout.current = null;
    }
    setLoginDropdownOpen(true);
  };
  const handleLoginMouseLeave = () => {
    loginDropdownTimeout.current = setTimeout(() => {
      setLoginDropdownOpen(false);
    }, 150);
  };

  // Handlers for portals dropdown
  const handlePortalsMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setPortalsOpen(true);
  };
  const handlePortalsMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setPortalsOpen(false);
    }, 150);
  };

  // Close mobile menu helper
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <Logo size="lg" showText={true} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location.pathname === '/' ? 'text-gramin-700' : 'text-gray-600 hover:text-gramin-600'
            }`}
          >
            Home
          </Link>

          {/* Portals Dropdown */}
          <div
            className="relative"
            onMouseEnter={handlePortalsMouseEnter}
            onMouseLeave={handlePortalsMouseLeave}
          >
            <button
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                portalsOpen ? 'text-gramin-700' : 'text-gray-600 hover:text-gramin-600'
              }`}
            >
              Portals
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${portalsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Desktop Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-top-left ${
                portalsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}
            >
              <div className="py-2">
                {[
                  { label: 'Village Portal', path: '/village-business-model' },
                  { label: 'Government/CSR', path: '/government-csr-business-model' },
                  { label: 'Business/NGO', path: '/business/ngo-business-model' },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      setPortalsOpen(false);
                      navigate(item.path);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gramin-50 hover:text-gramin-700 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/careers"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location.pathname === '/careers'
                ? 'text-gramin-700'
                : 'text-gray-600 hover:text-gramin-600'
            }`}
          >
            Careers
          </Link>

          <Link
            to="/blog"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location.pathname === '/blog'
                ? 'text-gramin-700'
                : 'text-gray-600 hover:text-gramin-600'
            }`}
          >
            Blog
          </Link>

          <Link
            to="/about"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location.pathname === '/about'
                ? 'text-gramin-700'
                : 'text-gray-600 hover:text-gramin-600'
            }`}
          >
            About
          </Link>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex items-center">
          <div
            className="relative"
            onMouseEnter={handleLoginMouseEnter}
            onMouseLeave={handleLoginMouseLeave}
          >
            <button
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-md ${
                loginDropdownOpen
                  ? 'bg-gramin-700 shadow-lg ring-2 ring-offset-2 ring-gramin-500'
                  : 'bg-gramin-600 hover:bg-gramin-700 hover:shadow-lg'
              }`}
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
            >
              Login
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${loginDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Login Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-top-right ${
                loginDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}
            >
              <div className="p-2">
                {[
                  { label: 'Village Portal', path: '/login/village', icon: '🏡' },
                  { label: 'Business Portal', path: '/login/business', icon: '💼' },
                  { label: 'Government Portal', path: '/login/government', icon: '🏛️' },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      setLoginDropdownOpen(false);
                      navigate(item.path);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gramin-50 hover:text-gramin-700 transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen((s) => !s)}
            className={`${
              mobileMenuOpen
                ? 'p-2 rounded-md text-gray-700 bg-white/0'
                : 'p-3 rounded-full text-gray-700 hover:bg-gray-100'
            } focus:outline-none focus:ring-2 focus:ring-gramin-500 focus:ring-offset-2 transition-all`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (portal to document.body to avoid stacking context issues) */}
      {createPortal(
        <div
          id="mobile-drawer-wrapper"
          className={`fixed inset-0 z-[99999] lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Drawer */}
          <div
            id="mobile-drawer"
            className={`absolute top-0 right-0 w-[48%] max-w-xs h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 px-6 py-6 space-y-6">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === '/' ? 'text-gramin-700' : 'text-gray-800'
                  }`}
                >
                  Home
                </Link>

                {/* Mobile Portals Accordion */}
                <div className="space-y-3">
                  <button
                    onClick={() => setPortalsOpen(!portalsOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                  >
                    Portals
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${portalsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 space-y-3 overflow-hidden transition-all duration-300 ${
                      portalsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <button
                      onClick={() => {
                        closeMobileMenu();
                        navigate('/village-business-model');
                      }}
                      className="block w-full text-left text-base text-gray-600 py-1"
                    >
                      Village Portal
                    </button>
                    <button
                      onClick={() => {
                        closeMobileMenu();
                        navigate('/government-csr-business-model');
                      }}
                      className="block w-full text-left text-base text-gray-600 py-1"
                    >
                      Government/CSR
                    </button>
                    <button
                      onClick={() => {
                        closeMobileMenu();
                        navigate('/business/ngo-business-model');
                      }}
                      className="block w-full text-left text-base text-gray-600 py-1"
                    >
                      Business/NGO
                    </button>
                  </div>
                </div>

                <Link
                  to="/careers"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === '/careers' ? 'text-gramin-700' : 'text-gray-800'
                  }`}
                >
                  Careers
                </Link>

                <Link
                  to="/blog"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === '/blog' ? 'text-gramin-700' : 'text-gray-800'
                  }`}
                >
                  Blog
                </Link>

                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === '/about' ? 'text-gramin-700' : 'text-gray-800'
                  }`}
                >
                  About
                </Link>
              </div>

              {/* Mobile Footer (Login) */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Access Portals
                </p>
                <div className="grid gap-3">
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate('/login/village');
                    }}
                    className="w-full text-center py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Village Login
                  </button>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate('/login/business');
                    }}
                    className="w-full text-center py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Business Login
                  </button>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      navigate('/login/government');
                    }}
                    className="w-full text-center py-3 bg-gramin-600 text-white rounded-xl text-sm font-semibold hover:bg-gramin-700 transition-colors"
                  >
                    Government Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
