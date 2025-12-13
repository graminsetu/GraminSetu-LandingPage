import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Handshake, Landmark, ShieldCheck } from 'lucide-react';
import graminsetuMainImage from '../../assets/images/graminsetuMainImage.png';
import './HeroSection.scss';

const HeroSection = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState(0);

  // Cycle through the ecosystem phases (Villager -> Business -> Govt)
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3);
    }, 3500); // 3.5 seconds per phase for readability
    return () => clearInterval(interval);
  }, []);

  const phaseConfig = [
    {
      text: 'Connecting Villagers to Market',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      text: 'Empowering Local Business',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
    },
    {
      text: 'Enabling Good Governance',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
  ];

  /* Typewriter Logic */
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['Built for Bharat', 'Made for Villages', 'Digital India Ready'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section className="hero-section">
      {/* Abstract Professional Background - Subtle Grid */}
      <div className="hero-section__background-grid"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT CONTENT: Strategic & Mission Focused */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Official Tagline / Mission Statement */}
            <div className="hero-section__badge">
              <span className="hero-section__badge-dot"></span>
              <span className="hero-section__badge-text">
                {text}
                <span className="hero-section__cursor">|</span>
              </span>
            </div>

            {/* Headline aligned with Vision */}
            <h1 className="hero-section__headline">
              Digital Progress for <br />
              <span>Every Village</span>
            </h1>

            {/* Value Proposition from Executive Summary */}
            <p className="hero-section__description">
              GraminSetu connects you to what matters most.{' '}
              <strong>Access Government Schemes</strong>, <strong>Sell Your Crops</strong> at fair
              prices, and <strong>Connect with your Community</strong>—all in one simple place.
            </p>

            {/* Strategic CTAs */}
            <div className="hero-section__cta-group">
              <button
                onClick={() => navigate('/login/village')}
                className="hero-section__button hero-section__button--primary"
              >
                Join GraminSetu
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('portals-overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-section__button hero-section__button--secondary"
              >
                How It Works
              </button>
            </div>

            {/* Core Pillars / Services */}
            <div className="hero-section__stats">
              <div className="text-center lg:text-left">
                <div className="font-bold text-gray-900 text-3xl mb-1">800M+</div>
                <div className="text-sm text-gray-500 font-medium">Villagers Reached</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bold text-gray-900 text-3xl mb-1">3</div>
                <div className="text-sm text-gray-500 font-medium">Specialized Portals</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bold text-gray-900 text-3xl mb-1">100%</div>
                <div className="text-sm text-gray-500 font-medium">Governance Transparency</div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL: Professional Representation of the Platform */}
          <div className="hero-section__visual-container">
            {/* Backdrop for Contrast */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gramin-100 to-transparent rounded-full opacity-60 blur-3xl pointer-events-none"></div>

            <div className="image-wrapper">
              {/* Dynamic Story Overlay - Replaces the 'GIF' request with code-based animation */}
              <div
                className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full shadow-lg border backdrop-blur-md transition-all duration-500 ${phaseConfig[activePhase].bg} ${phaseConfig[activePhase].border}`}
              >
                <p
                  className={`text-xs font-bold ${phaseConfig[activePhase].color} flex items-center gap-2`}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${phaseConfig[activePhase].bg === 'bg-green-50' ? 'bg-green-400' : phaseConfig[activePhase].bg === 'bg-orange-50' ? 'bg-orange-400' : 'bg-blue-400'}`}
                    ></span>
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${phaseConfig[activePhase].bg === 'bg-green-50' ? 'bg-green-500' : phaseConfig[activePhase].bg === 'bg-orange-50' ? 'bg-orange-500' : 'bg-blue-500'}`}
                    ></span>
                  </span>
                  {phaseConfig[activePhase].text}
                </p>
              </div>

              <img src={graminsetuMainImage} alt="GraminSetu Integrated Platform Dashboard" />

              {/* 3-Portal Ecosystem Indicators - Professional 'Cards' */}

              {/* 1. Villager Portal */}
              <div
                className={`ecosystem-card ecosystem-card--left-top ${activePhase === 0 ? 'is-active' : ''}`}
              >
                <div className="ecosystem-card__content">
                  <div className="ecosystem-card__icon-box ecosystem-card__icon-box--green">
                    <Sprout size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="ecosystem-card__text">
                    <p className="ecosystem-card__text-title">Villager Portal</p>
                    <p className="ecosystem-card__text-subtitle">Marketplace & News</p>
                  </div>
                </div>
                <div className="ecosystem-card__bar">
                  <div className="ecosystem-card__bar-fill ecosystem-card__bar-fill--green"></div>
                </div>
              </div>

              {/* 2. Business/NGO Portal */}
              <div
                className={`ecosystem-card ecosystem-card--right-center ${activePhase === 1 ? 'is-active' : ''}`}
              >
                <div className="ecosystem-card__content">
                  <div className="ecosystem-card__icon-box ecosystem-card__icon-box--orange">
                    <Handshake size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="ecosystem-card__text">
                    <p className="ecosystem-card__text-title">Business & NGO</p>
                    <p className="ecosystem-card__text-subtitle">Impact & Outreach</p>
                  </div>
                </div>
                <div className="ecosystem-card__bar">
                  <div className="ecosystem-card__bar-fill ecosystem-card__bar-fill--orange"></div>
                </div>
              </div>

              {/* 3. Governance Portal */}
              <div
                className={`ecosystem-card ecosystem-card--left-bottom ${activePhase === 2 ? 'is-active' : ''}`}
              >
                <div className="ecosystem-card__content">
                  <div className="ecosystem-card__icon-box ecosystem-card__icon-box--blue">
                    <Landmark size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="ecosystem-card__text">
                    <p className="ecosystem-card__text-title">Governance</p>
                    <p className="ecosystem-card__text-subtitle">Transparency</p>
                  </div>
                </div>
                <div className="ecosystem-card__bar">
                  <div className="ecosystem-card__bar-fill ecosystem-card__bar-fill--blue"></div>
                </div>
              </div>

              {/* Trust/Verification Badge */}
              <div className="trust-badge">
                <ShieldCheck size={20} className="text-green-400" />
                <span className="text-sm font-medium">Digital India Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
