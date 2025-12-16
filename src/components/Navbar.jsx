import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Briefcase,
  BookOpen,
  Info,
  Building2,
  Landmark,
  Sprout,
  Phone,
} from 'lucide-react';
import Logo from './Logo/Logo';
import './Navbar.scss';

const Navbar = () => {
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const loginDropdownTimeout = useRef(null);
  const closeTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Careers', path: '/careers', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
  ];

  const portalLinks = [
    {
      label: 'Village Portal',
      path: '/village-business-model',
      icon: <Sprout className="w-5 h-5 text-gramin-600" />,
    },
    {
      label: 'Government/CSR',
      path: '/government-csr-business-model',
      icon: <Landmark className="w-5 h-5 text-setu-600" />,
    },
    {
      label: 'Business/NGO',
      path: '/business/ngo-business-model',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
  ];

  const loginLinks = [
    {
      label: 'Village Login',
      path: '/login/village',
      icon: <Sprout className="w-5 h-5 text-gramin-600" />,
    },
    {
      label: 'Business Login',
      path: '/login/business',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    {
      label: 'Govt Login',
      path: '/login/government',
      icon: <Landmark className="w-5 h-5 text-setu-600" />,
    },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" onClick={closeMobileMenu} className="nav-logo-link">
            <div className="logo-wrapper">
              <Logo size="lg" showText={true} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Portals Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={handlePortalsMouseEnter}
            onMouseLeave={handlePortalsMouseLeave}
          >
            <button className={`dropdown-toggle ${portalsOpen ? 'active' : ''}`}>
              Portals
              <motion.div
                animate={{ rotate: portalsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {portalsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="dropdown-menu"
                >
                  <div className="dropdown-content">
                    {portalLinks.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => {
                          setPortalsOpen(false);
                          navigate(item.path);
                        }}
                        className="dropdown-item"
                      >
                        <div className="icon-box">{item.icon}</div>
                        <span className="label">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Login Button */}
        <div className="nav-auth-desktop">
          <div
            className="dropdown-wrapper"
            onMouseEnter={handleLoginMouseEnter}
            onMouseLeave={handleLoginMouseLeave}
          >
            <button
              className={`login-btn ${loginDropdownOpen ? 'active' : ''}`}
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
            >
              Login
              <motion.div
                animate={{ rotate: loginDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {loginDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="login-dropdown-menu"
                >
                  <div className="dropdown-content">
                    <div className="dropdown-header">Select Portal</div>
                    {loginLinks.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => {
                          setLoginDropdownOpen(false);
                          navigate(item.path);
                        }}
                        className="dropdown-item"
                      >
                        <div className="icon-box">{item.icon}</div>
                        <span className="label">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button onClick={() => setMobileMenuOpen(true)} className="mobile-toggle-btn">
            <span className="sr-only">Open menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="mobile-overlay" style={{ display: 'block' }}>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="backdrop"
                onClick={closeMobileMenu}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="drawer"
              >
                <div className="flex flex-col h-full bg-white">
                  {/* Drawer Header */}
                  <div className="drawer-header">
                    <span className="drawer-title">
                      <Logo size="sm" showText={false} />
                      Menu
                    </span>
                    <button onClick={closeMobileMenu} className="close-btn">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className="drawer-content">
                    <div className="mobile-nav-links">
                      {/* Main Links */}
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={closeMobileMenu}
                          className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      ))}

                      {/* Mobile Portals Accordion */}
                      <div className="mobile-section-divider">
                        <p className="section-label">Portals & Services</p>
                        {portalLinks.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => {
                              closeMobileMenu();
                              navigate(item.path);
                            }}
                            className="mobile-portal-btn"
                          >
                            {item.icon}
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Footer (Login) */}
                  <div className="drawer-footer">
                    <div className="login-grid">
                      <Link
                        to="/login/village"
                        onClick={closeMobileMenu}
                        className="mobile-login-link"
                      >
                        <Sprout className="w-4 h-4" />
                        Village Login
                      </Link>
                      <Link
                        to="/login/business"
                        onClick={closeMobileMenu}
                        className="mobile-login-link"
                      >
                        <Building2 className="w-4 h-4" />
                        Business Login
                      </Link>
                      <Link
                        to="/login/government"
                        onClick={closeMobileMenu}
                        className="mobile-login-link govt-login"
                      >
                        <UserLoginIcon className="w-4 h-4" />
                        Government Login
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

// Helper for mobile login icon
const UserLoginIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Navbar;
