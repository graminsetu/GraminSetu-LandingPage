import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';

const Navbar = () => {
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const closeTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handlers for hover open/close with delay for user-friendly UX
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
    }, 150); // 150ms delay to prevent accidental close
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        {/* Logo and name on the left */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <Logo size="lg" showText={true} />
          </Link>
        </div>
        {/* Desktop nav links centered, login right */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          <div className="absolute left-0 flex items-center h-full">
            {/* Empty div for spacing, or add left-side content if needed */}
          </div>
          <div className="flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`font-bold text-lg hover:text-gramin-900 ${location.pathname === '/' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
            >
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={handlePortalsMouseEnter}
              onMouseLeave={handlePortalsMouseLeave}
            >
              <button
                type="button"
                className={`font-medium text-gramin-700 hover:text-gramin-900 focus:outline-none transition-colors duration-200 ${portalsOpen ? 'bg-gramin-50 text-gramin-800' : ''}`}
                style={{
                  backgroundColor: portalsOpen ? '#eafaf1' : undefined,
                  cursor: portalsOpen ? 'default' : 'pointer',
                }}
                tabIndex={0}
              >
                Portals
                <svg
                  className="inline ml-1 w-4 h-4 transition-transform duration-200"
                  style={{ transform: portalsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded shadow-lg z-40 transition-all duration-200 ${portalsOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                style={{
                  backgroundColor: '#eafaf1',
                  border: portalsOpen ? '1px solid #b2e5c2' : '1px solid transparent',
                }}
                onMouseEnter={handlePortalsMouseEnter}
                onMouseLeave={handlePortalsMouseLeave}
              >
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100 transition-colors duration-150"
                  onClick={() => {
                    setPortalsOpen(false);
                    navigate('/village-business-model');
                  }}
                  style={{ backgroundColor: portalsOpen ? undefined : 'transparent' }}
                >
                  Village
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100 transition-colors duration-150"
                  onClick={() => {
                    setPortalsOpen(false);
                    navigate('/government-csr-business-model');
                  }}
                  style={{ backgroundColor: portalsOpen ? undefined : 'transparent' }}
                >
                  Government/CSR
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100 transition-colors duration-150"
                  onClick={() => {
                    setPortalsOpen(false);
                    navigate('/business/ngo-business-model');
                  }}
                  style={{ backgroundColor: portalsOpen ? undefined : 'transparent' }}
                >
                  Business/NGO
                </button>
              </div>
            </div>
            <Link
              to="/careers"
              className={`font-medium hover:text-gramin-900 ${location.pathname === '/careers' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className={`font-medium hover:text-gramin-900 ${location.pathname === '/blog' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`font-medium hover:text-gramin-900 ${location.pathname === '/about' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
            >
              About
            </Link>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <div className="flex lg:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gramin-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gramin-500"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Login button on right for desktop (always far right) */}
        <div className="hidden lg:flex items-center ml-auto relative">
          <div className="relative group">
            <button
              className="px-5 py-2 rounded-full bg-gramin-600 text-white font-semibold hover:bg-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-400 transition-colors"
              aria-haspopup="true"
              aria-expanded={loginDropdownOpen}
              onClick={() => setLoginDropdownOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLoginDropdownOpen(false), 150)}
              tabIndex={0}
            >
              Login
              <svg
                className="inline ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded shadow-lg z-50 bg-white border border-gramin-100 py-2">
                <button
                  className="block w-full text-left px-4 py-2 rounded hover:bg-gramin-100 focus:bg-gramin-100 text-gramin-700 font-medium transition-colors"
                  onClick={() => {
                    setLoginDropdownOpen(false);
                    navigate('/login/village');
                  }}
                >
                  Village Portal
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded hover:bg-gramin-100 focus:bg-gramin-100 text-gramin-700 font-medium transition-colors"
                  onClick={() => {
                    setLoginDropdownOpen(false);
                    navigate('/login/business');
                  }}
                >
                  Business Portal
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded hover:bg-gramin-100 focus:bg-gramin-100 text-gramin-700 font-medium transition-colors"
                  onClick={() => {
                    setLoginDropdownOpen(false);
                    navigate('/login/government');
                  }}
                >
                  Government Portal
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu overlay and drawer (right side only) */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-200 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ willChange: 'transform' }}
        >
          <div className="flex flex-col h-full p-6 space-y-6">
            <button className="self-end mb-4" onClick={() => setMobileMenuOpen(false)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col flex-1 space-y-4">
              <Link
                to="/"
                className={`font-bold text-lg hover:text-gramin-900 ${location.pathname === '/' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="font-medium text-gramin-700 hover:text-gramin-900 w-full text-left"
                  onClick={() => setPortalsOpen(!portalsOpen)}
                >
                  Portals
                  <svg
                    className="inline ml-1 w-4 h-4 transition-transform duration-200"
                    style={{ transform: portalsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {portalsOpen && (
                  <div className="mt-2 rounded shadow-lg bg-gramin-50 border border-gramin-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100"
                      onClick={() => {
                        setPortalsOpen(false);
                        setMobileMenuOpen(false);
                        navigate('/village-business-model');
                      }}
                    >
                      Village
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100"
                      onClick={() => {
                        setPortalsOpen(false);
                        setMobileMenuOpen(false);
                        navigate('/government-csr-business-model');
                      }}
                    >
                      Government/CSR
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gramin-100"
                      onClick={() => {
                        setPortalsOpen(false);
                        setMobileMenuOpen(false);
                        navigate('/business/ngo-business-model');
                      }}
                    >
                      Business/NGO
                    </button>
                  </div>
                )}
              </div>
              <Link
                to="/careers"
                className={`font-medium hover:text-gramin-900 ${location.pathname === '/careers' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className={`font-medium hover:text-gramin-900 ${location.pathname === '/blog' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className={`font-medium hover:text-gramin-900 ${location.pathname === '/about' ? 'text-gramin-900 underline underline-offset-8 decoration-2' : 'text-gramin-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
            {/* Mobile login button at the bottom */}
            <div className="mt-auto flex flex-col items-end w-full">
              <div className="w-full flex flex-col gap-2 p-2 bg-white rounded-t-xl shadow-inner">
                <span className="font-semibold text-gramin-700 mb-1 ml-1">Login</span>
                <button
                  className="block w-full text-left px-4 py-2 rounded bg-gramin-600 text-white font-semibold hover:bg-gramin-700 focus:bg-gramin-700 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/login/village');
                  }}
                >
                  Village Portal
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded bg-gramin-600 text-white font-semibold hover:bg-gramin-700 focus:bg-gramin-700 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/login/business');
                  }}
                >
                  Business Portal
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded bg-gramin-600 text-white font-semibold hover:bg-gramin-700 focus:bg-gramin-700 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/login/government');
                  }}
                >
                  Government Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
