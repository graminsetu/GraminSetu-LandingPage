import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Users, Landmark, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

// import { Helmet } from "react-helmet";
import SEO from '../components/SEO';
import FAQStructuredData from '../components/FAQStructuredData';
import PageSEO from '../components/PageSEO';
import GraminSetuBrandSchema from '../components/GraminSetuBrandSchema';
import Analytics from '../components/Analytics';
import TamminanaBhogeshPersonalBrand from '../components/TamminanaBhogeshPersonalBrand';
import KnowledgePanelOptimization from '../components/KnowledgePanelOptimization';
import GoogleAIOptimization from '../components/GoogleAIOptimization';
import FounderAchievementsSchema from '../components/FounderAchievementsSchema';
import AdvancedSEOSchemas from '../components/AdvancedSEOSchemas';
// import Logo from '../components/Logo/Logo';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader/Loader';
// import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';
// import SecondaryCTA from "../components/SecondaryCTA/SecondaryCTA";
// import HowItWorks from '../components/HowItWorks/HowItWorks';

import FAQ from '../components/FAQ/FAQ';
import { landingContent } from '../constants/landingContent';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import HeroSection from '../components/HeroSection/HeroSection';

// Simple Animation Component
const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => currentElement && observer.unobserve(currentElement);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleAction = (action) => {
    if (!action) return;
    if (action.to) {
      if (action.to.startsWith('http')) {
        window.open(action.to, '_blank', 'noopener,noreferrer');
        return;
      }
      navigate(action.to);
      return;
    }
    if (action.scrollTo) {
      const el = document.getElementById(action.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gramin-50 via-white to-gramin-100 z-50">
        <Loader size="lg" variant="creative" />
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-white font-sans">
      <SEO />
      <FAQStructuredData />
      <GraminSetuBrandSchema />
      <Analytics />
      <TamminanaBhogeshPersonalBrand />
      <KnowledgePanelOptimization />
      <GoogleAIOptimization />
      <FounderAchievementsSchema />
      <AdvancedSEOSchemas />
      <PageSEO
        title="Home"
        description="GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. Connect with your community, access government schemes, and unlock rural opportunities. Join 500+ villages transforming their future."
        keywords="graminsetu home, graminsetu platform, graminsetu india, digital village platform, rural empowerment"
        url="/"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Three Specialized Portals Section - Premium 'Deep Contour' Design */}
      <section
        id="portals-overview"
        className="py-24 md:py-32 relative overflow-hidden bg-slate-50"
      >
        {/* Creative Background: Topographic/Network Fusion */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100"></div>

          {/* SVG Contour Pattern */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Soft Glowing Orbs */}
          <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-200/20 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-200/20 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <FadeInSection>
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-8 ring-4 ring-white/50">
                <div className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Unified Digital Architecture
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {landingContent.portals.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mx-auto max-w-2xl">
                {landingContent.portals.description}
              </p>
            </div>
          </FadeInSection>

          {/* Portal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* 1. Village Portal Card */}
            <FadeInSection delay={100} className="h-full">
              <div className="group relative flex flex-col h-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ring-1 ring-black/[0.03]">
                {/* Top Gradient Line */}
                <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>

                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 border border-emerald-100 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                    <Users size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {landingContent.portals.village.title}
                  </h3>
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-wide mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-emerald-200"></span>
                    {landingContent.portals.village.subtitle}
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed font-light">
                    {landingContent.portals.village.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <ul className="space-y-4 mb-8">
                      {landingContent.portals.village.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[0.95rem]">
                          <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate(landingContent.portals.village.link)}
                      className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-50 text-slate-800 font-bold hover:text-white transition-all duration-300 group/btn border border-slate-200 hover:border-emerald-600"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {landingContent.portals.village.cta}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 2. Government Portal Card */}
            <FadeInSection delay={200} className="h-full">
              <div className="group relative flex flex-col h-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ring-1 ring-black/[0.03]">
                {/* Top Gradient Line */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <Landmark size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {landingContent.portals.government.title}
                  </h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-200"></span>
                    {landingContent.portals.government.subtitle}
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed font-light">
                    {landingContent.portals.government.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <ul className="space-y-4 mb-8">
                      {landingContent.portals.government.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[0.95rem]">
                          <div className="mt-1 p-0.5 rounded-full bg-blue-100 text-blue-600">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate(landingContent.portals.government.link)}
                      className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-50 text-slate-800 font-bold hover:text-white transition-all duration-300 group/btn border border-slate-200 hover:border-blue-600"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {landingContent.portals.government.cta}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 3. Business & NGO Portal Card */}
            <FadeInSection delay={300} className="h-full">
              <div className="group relative flex flex-col h-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ring-1 ring-black/[0.03]">
                {/* Top Gradient Line */}
                <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-amber-500"></div>

                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 border border-orange-100 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-orange-500/30">
                    <Building2 size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {landingContent.portals.business.title}
                  </h3>
                  <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-orange-200"></span>
                    {landingContent.portals.business.subtitle}
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed font-light">
                    {landingContent.portals.business.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <ul className="space-y-4 mb-8">
                      {landingContent.portals.business.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[0.95rem]">
                          <div className="mt-1 p-0.5 rounded-full bg-orange-100 text-orange-600">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate(landingContent.portals.business.link)}
                      className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-50 text-slate-800 font-bold hover:text-white transition-all duration-300 group/btn border border-slate-200 hover:border-orange-600"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {landingContent.portals.business.cta}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Story / Mission Section - Modern Design */}
      <section
        id="story"
        className="py-16 md:py-24 bg-gradient-to-br from-gramin-50 to-gramin-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gramin-100 to-gramin-200 rounded-full mb-6 shadow-sm">
                <span className="text-sm font-bold text-gramin-700 uppercase tracking-wider">
                  🚀 Our Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                {landingContent.story.title}
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {landingContent.story.description}
              </p>

              {/* Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {landingContent.story.pillars.map((item, index) => (
                  <div
                    key={item.title}
                    className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.copy}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-gramin-600 to-gramin-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => navigate('/about')}
                >
                  Learn About Our Mission
                </button>
                <button
                  className="px-8 py-4 border-2 border-gramin-600 text-gramin-600 font-bold rounded-xl hover:bg-gramin-50 transition-colors duration-300"
                  onClick={() => handleAction({ to: '/contact' })}
                >
                  Start a Conversation
                </button>
              </div>
            </div>

            {/* Right Content - Challenges We're Solving */}
            <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-gramin-100/50 to-gramin-200/50 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenges We Address</h3>
                  <p className="text-gray-600">Key issues in rural digital transformation</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {landingContent.story.challenges.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gramin-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          {item.label}
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Design */}
      <section id="features" className="py-16 md:py-24 bg-gramin-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              {landingContent.features.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {landingContent.features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingContent.features.categories.map((category, index) => (
              <div key={category.title} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gramin-100/50 to-gramin-200/50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>

                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {category.icon === 'village' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    )}
                    {category.icon === 'government' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    )}
                    {category.icon === 'business' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h6V6h-6zM4 12v2h4v-2H4zm6 0v2h6v-2h-6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>

                  <ul className="space-y-4 flex-grow">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gramin-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="text-sm text-gramin-600 font-medium">
                      Feature Category {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="700" cy="100" r="140" fill="#16a34a" fillOpacity="0.08" />
            <circle cx="120" cy="340" r="90" fill="#0F766E" fillOpacity="0.05" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-gramin-500 mb-4">
              Join the founding cohort
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gramin-800 mb-4 leading-tight">
              Co-design responsible rural technology
            </h2>
            <p className="text-lg md:text-xl text-gramin-600 max-w-3xl mx-auto">
              We are inviting village leaders, civil society organizations, and government
              departments to shape a platform that serves rural India authentically.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-xl shadow-gramin-100/20 p-8 flex flex-col justify-between h-full hover:border-gramin-200 transition-colors">
              <div>
                <div className="w-12 h-12 bg-gramin-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold text-gramin-900 mb-3">Village Partners</h3>
                <p className="text-gramin-700 leading-relaxed mb-6">
                  Gram Panchayats and SHG leaders who want to test digital governance and
                  marketplace tools with their communities.
                </p>
              </div>
              <div className="text-sm font-semibold text-gramin-600 bg-gramin-50 py-2 px-4 rounded-lg self-start">
                Pilot locations: AP, Odisha, Bihar
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-xl shadow-gramin-100/20 p-8 flex flex-col justify-between h-full hover:border-gramin-200 transition-colors">
              <div>
                <div className="w-12 h-12 bg-gramin-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gramin-900 mb-3">NGO & CSR Teams</h3>
                <p className="text-gramin-700 leading-relaxed mb-6">
                  Organizations ready to pilot transparent impact tracking and community
                  collaboration workflows.
                </p>
              </div>
              <div className="text-sm font-semibold text-gramin-600 bg-gramin-50 py-2 px-4 rounded-lg self-start">
                Focus: Rural development
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-xl shadow-gramin-100/20 p-8 flex flex-col justify-between h-full hover:border-gramin-200 transition-colors">
              <div>
                <div className="w-12 h-12 bg-gramin-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gramin-900 mb-3">Government Departments</h3>
                <p className="text-gramin-700 leading-relaxed mb-6">
                  Progressive administrators exploring digital-first approaches to scheme delivery
                  and grievance resolution.
                </p>
              </div>
              <div className="text-sm font-semibold text-gramin-600 bg-gramin-50 py-2 px-4 rounded-lg self-start">
                Early adopter departments
              </div>
            </article>
          </div>
          <div className="text-center mt-12 md:mt-16">
            <button
              className="inline-flex items-center gap-2 bg-gramin-700 hover:bg-gramin-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleAction({ to: '/contact' })}
            >
              Apply to join our pilot cohort
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section - Modern Design */}
      <section className="py-16 md:py-24 bg-gramin-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-gramin-100 shadow-sm">
              <span className="text-sm font-bold text-gramin-700 uppercase tracking-wider">
                🤝 Building with Community Input
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              Built with Rural India's Trust
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are in discovery mode, learning from Panchayats, NGOs, and government teams about
              what rural India needs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                count: '28',
                label: 'Discovery Conversations',
                sub: 'In-depth interviews',
                from: 'from-gramin-500',
                to: 'to-gramin-600',
              },
              {
                count: '3',
                label: 'States Covered',
                sub: 'On-ground research',
                from: 'from-gramin-600',
                to: 'to-gramin-700',
              },
              {
                count: '8',
                label: 'Months Research',
                sub: 'Continuous learning',
                from: 'from-gramin-400',
                to: 'to-gramin-500',
              },
              {
                count: '12',
                label: 'Partner Orgs',
                sub: 'Collaborative approach',
                from: 'from-gramin-700',
                to: 'to-gramin-800',
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.from} ${stat.to} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl font-black text-white">{stat.count}</span>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 md:mt-24">
            <button
              className="group px-8 py-4 bg-gradient-to-r from-gramin-600 to-gramin-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleAction({ to: '/contact' })}
            >
              <span className="flex items-center gap-2">
                Ready to join our founding cohort?
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 md:py-24 bg-gramin-900 text-white relative overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gramin-800 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gramin-700 opacity-20 blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Rural India?
            </h2>
            <p className="text-xl text-gramin-100 mb-8 leading-relaxed">
              Join thousands of villages, NGOs, and government departments already using GraminSetu
              to build stronger, more connected communities.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-white text-gramin-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </button>
              <button
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                onClick={() => navigate('/about')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
      {/* Help & Support bot (AI assistant) */}
      <HelpSupportButton />
    </main>
  );
};

export default LandingPage;
