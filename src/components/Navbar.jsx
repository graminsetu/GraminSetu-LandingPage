import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';

const Navbar = () => {
  const [portalsOpen, setPortalsOpen] = useState(false);
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
        {/* Centered nav links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
