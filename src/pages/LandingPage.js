import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Landmark,
  Building2,
  CheckCircle2,
  ArrowRight,
  Globe,
  LineChart,
  Layout,
  Sprout,
  Handshake,
  Network,
  FileText,
  IndianRupee,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
  HeadphonesIcon,
  Smartphone,
  Languages,
} from 'lucide-react';
import graminSetuLogo from '../assets/images/graminsetu-logo.png';

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
import Navbar from '../components/Navbar';
import Loader from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';
import HowItWorks from '../components/HowItWorks/HowItWorks';
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

  // Animation State for "How It Works"
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
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

      {/* COMBINED SECTION: How It Works + Mission (The 'Orbit' Design) - Light Professional Theme */}
      {/* COMBINED SECTION: How It Works + Mission - Light Professional "Identity" Theme */}
      <section
        id="story"
        className="py-24 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-orange-50 relative overflow-hidden"
      >
        {/* Background Pattern - Subtle DNA/Network Mesh */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* PART 1: SYSTEM WORKFLOW (Card Design) - Light Mode */}
          {/* PART 1: SYSTEM WORKFLOW (Animated Sequential Flow) */}
          <div className="mb-32">
            <FadeInSection>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 text-sm font-bold tracking-wide text-emerald-700 mb-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  SIMPLE PROCESS
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
                    Connecting
                  </span>{' '}
                  Every Village
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                  Bringing Villages, Government, and Businesses together on one simple platform to
                  help everyone grow.
                </p>
              </div>
            </FadeInSection>

            <div className="relative">
              {/* Progress Line Background (Gray) */}
              <div className="absolute top-12 left-[15%] right-[15%] h-1 bg-slate-100 hidden md:block rounded-full"></div>
              {/* Vertical Mobile Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 block md:hidden transform -translate-x-1/2 rounded-full"></div>

              {/* Active Progress Line (Gradient Filling) */}
              <div
                className="absolute top-12 left-[15%] h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-orange-500 hidden md:block rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${(activeStep / 2) * 70}%` }}
              >
                {/* Moving Particle/Head */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)] border-2 border-white"></div>
              </div>
              <div
                className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-emerald-500 via-amber-400 to-orange-500 block md:hidden transform -translate-x-1/2 rounded-full transition-all duration-1000 ease-in-out"
                style={{ height: `${(activeStep / 2) * 100}%` }}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10 px-4 md:px-0">
                {landingContent.howItWorks.steps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isCompleted = idx < activeStep;

                  return (
                    // Logic: Keep container stable (no scale changes that affect layout flow)
                    <div
                      key={idx}
                      className="group relative flex flex-col items-center text-center transition-all duration-500"
                    >
                      {/* Icon Container with Status Ring */}
                      <div
                        className={`w-28 h-28 rounded-full border-4 flex items-center justify-center mb-6 shadow-xl relative z-10 transition-all duration-500 bg-white
                        ${
                          isActive
                            ? 'border-emerald-500 shadow-emerald-200 ring-4 ring-emerald-50 scale-110' // Scale ONLY the icon circle slightly
                            : isCompleted
                              ? 'border-emerald-200'
                              : 'border-slate-100'
                        }
                      `}
                      >
                        {/* Pulse Effect for Active (Subtle) */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full border-4 border-emerald-500 opacity-20 animate-ping"></div>
                        )}

                        <div
                          className={`transition-colors duration-300 ${isActive ? 'text-emerald-600' : isCompleted ? 'text-emerald-700/80' : 'text-slate-300'}`}
                        >
                          {idx === 0 && <Sprout size={40} strokeWidth={1.5} />}
                          {idx === 1 && <Landmark size={40} strokeWidth={1.5} />}
                          {idx === 2 && <Handshake size={40} strokeWidth={1.5} />}
                        </div>

                        {/* Step Badge */}
                        <div
                          className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white transition-colors duration-500
                           ${isActive ? 'bg-orange-500 text-white' : isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}
                         `}
                        >
                          {isCompleted ? <CheckCircle2 size={14} /> : idx + 1}
                        </div>
                      </div>

                      <div
                        className={`p-6 rounded-3xl transition-all duration-500 w-full min-h-[140px] flex flex-col justify-center border
                        ${isActive ? 'bg-white border-emerald-100 shadow-xl shadow-emerald-50/20' : 'bg-transparent border-transparent'}
                      `}
                      >
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400'}`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm font-medium leading-relaxed transition-colors ${isActive ? 'text-slate-600' : 'text-slate-400'}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PART 2: THE "CONNECTED ECOSYSTEM" ENGINE (Harmonic Design) */}
          <div className="relative rounded-[3rem] bg-white border border-slate-100 p-6 md:p-12 lg:p-20 overflow-hidden shadow-2xl shadow-slate-200/60">
            {/* Background: Subtle Depth */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              {/* Left: The Harmonic Engine */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center">
                {/* --- CENTRAL HUB --- */}
                <div className="relative z-30 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 ring-2 sm:ring-4 ring-slate-50">
                  {/* Logo */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative flex items-center justify-center">
                    <img
                      src={graminSetuLogo}
                      alt="GraminSetu"
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  {/* "Hub" Label */}
                  <div className="absolute -bottom-2 sm:-bottom-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-600 text-white rounded-full text-[8px] sm:text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    THE BRIDGE
                  </div>
                </div>

                {/* --- ORBIT SYSTEM (The Village Heart Engine) --- */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* LEVEL 1: BACKGROUND TRACK (Static) */}
                  <div className="absolute w-[90%] max-w-[550px] aspect-square border border-slate-100 rounded-full opacity-60 pointer-events-none"></div>
                  <div className="absolute w-[70%] max-w-[400px] aspect-square border border-dashed border-slate-200 rounded-full opacity-40 pointer-events-none"></div>

                  {/* LEVEL 2: ROTATING INFRASTRUCTURE */}
                  <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                    {/* --- INTER-CONNECTION LINES (Village is the Heart) --- */}
                    {/* We draw lines between the fixed arm positions inside this rotating container */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-0"
                      viewBox="0 0 100 100"
                      overflow="visible"
                    >
                      {/* Line: Village (Top/Center) to Govt (Bottom Right) */}
                      {/* Coordinates on a 100x100 grid where 50,50 is center. Radius approx 40? */}

                      <defs>
                        <linearGradient id="villageFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                          <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="centerFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#64748b" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#64748b" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>

                      {/* Connection: Village (Top) -> Govt (Bottom Right) */}
                      <path
                        d="M50 10 Q 75 35, 85 70"
                        fill="none"
                        stroke="url(#villageFlow)"
                        strokeWidth="0.5"
                        className="opacity-50"
                      />
                      <circle r="1" fill="#10b981">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M50 10 Q 75 35, 85 70"
                        />
                      </circle>

                      {/* Connection: Village (Top) -> Business (Bottom Left) */}
                      <path
                        d="M50 10 Q 25 35, 15 70"
                        fill="none"
                        stroke="url(#villageFlow)"
                        strokeWidth="0.5"
                        className="opacity-50"
                      />
                      <circle r="1" fill="#10b981">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M50 10 Q 25 35, 15 70"
                        />
                      </circle>

                      {/* Connection: CENTER -> Village (Upward) */}
                      <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="10"
                        stroke="url(#centerFlow)"
                        strokeWidth="0.5"
                        className="opacity-40"
                      />
                      <circle r="1.5" fill="#10b981">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M50 50 L 50 10" />
                      </circle>

                      {/* Connection: CENTER -> Govt (Bottom Right) */}
                      <line
                        x1="50"
                        y1="50"
                        x2="85"
                        y2="70"
                        stroke="url(#centerFlow)"
                        strokeWidth="0.5"
                        className="opacity-40"
                      />
                      <circle r="1.5" fill="#3b82f6">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M50 50 L 85 70" />
                      </circle>

                      {/* Connection: CENTER -> Business (Bottom Left) */}
                      <line
                        x1="50"
                        y1="50"
                        x2="15"
                        y2="70"
                        stroke="url(#centerFlow)"
                        strokeWidth="0.5"
                        className="opacity-40"
                      />
                      <circle r="1.5" fill="#f97316">
                        <animateMotion dur="2.2s" repeatCount="indefinite" path="M50 50 L 15 70" />
                      </circle>
                    </svg>

                    {/* --- BRIDGE ARM 1: VILLAGE (0 deg - THE HEART) --- */}
                    <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-[60px] origin-bottom flex justify-center">
                        <div className="h-full w-1 bg-gradient-to-t from-emerald-500/20 via-emerald-500/10 to-transparent"></div>
                        {/* Heartbeat Pulse flowing to center */}
                        <div className="absolute top-0 w-1.5 h-1/2 bg-gradient-to-b from-emerald-500 to-transparent opacity-0 animate-[ping_2s_linear_infinite]"></div>
                      </div>

                      {/* The Terminal Node (Village) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <div className="animate-[spin_60s_linear_infinite_reverse]">
                          <div className="relative group cursor-pointer">
                            {/* Heartbeat Rings */}
                            <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                            <div
                              className="absolute -inset-4 border border-emerald-200 rounded-[2rem] opacity-0 animate-ping"
                              style={{ animationDuration: '2s' }}
                            ></div>

                            {/* Card Node */}
                            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl border-2 border-emerald-400 shadow-[0_10px_50px_rgba(16,185,129,0.25)] flex flex-col items-center justify-center gap-1.5 transform transition-transform group-hover:scale-105">
                              <div className="p-2 bg-emerald-50 rounded-xl relative">
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-bounce border-2 border-white"></div>
                                <Sprout
                                  size={28}
                                  className="sm:w-8 sm:h-8 text-emerald-600"
                                  strokeWidth={2.5}
                                />
                              </div>
                              <div className="text-center">
                                <span className="block text-[9px] font-black text-emerald-600 tracking-wider uppercase">
                                  HEART
                                </span>
                                <span className="block text-sm sm:text-base font-bold text-slate-800">
                                  Village
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- BRIDGE ARM 2: GOVERNMENT (120 deg) --- */}
                    <div className="absolute top-0 left-0 w-full h-full rotate-[120deg] pointer-events-none">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-[60px] origin-bottom flex justify-center">
                        <div className="h-full w-1 bg-gradient-to-t from-blue-500/20 via-blue-500/10 to-transparent"></div>
                      </div>

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <div className="rotate-[-120deg] animate-[spin_60s_linear_infinite_reverse]">
                          <div className="relative group cursor-pointer">
                            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl border border-blue-100 shadow-xl flex flex-col items-center justify-center gap-1 group-hover:-translate-y-1 transition-transform">
                              <Landmark size={24} className="sm:w-7 sm:h-7" strokeWidth={2} />
                              <span className="text-xs font-bold text-slate-700">Govt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- BRIDGE ARM 3: BUSINESS (240 deg) --- */}
                    <div className="absolute top-0 left-0 w-full h-full rotate-[240deg] pointer-events-none">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-[60px] origin-bottom flex justify-center">
                        <div className="h-full w-1 bg-gradient-to-t from-orange-500/20 via-orange-500/10 to-transparent"></div>
                      </div>

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <div className="rotate-[-240deg] animate-[spin_60s_linear_infinite_reverse]">
                          <div className="relative group cursor-pointer">
                            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl border border-orange-100 shadow-xl flex flex-col items-center justify-center gap-1 group-hover:-translate-y-1 transition-transform">
                              <Building2 size={24} className="sm:w-7 sm:h-7" strokeWidth={2} />
                              <span className="text-xs font-bold text-slate-700">Business</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LEVEL 3: THE CENTRAL HUB */}
                  <div className="absolute z-20 w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-slate-50 ring-1 ring-slate-100">
                    <div className="absolute inset-0 rounded-full border border-slate-100 animate-pulse"></div>
                    <div className="w-20 h-20 relative flex items-center justify-center z-10">
                      <img
                        src={graminSetuLogo}
                        alt="GraminSetu"
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: The Content (User Friendly & Clear) */}
              <div className="space-y-8 md:pl-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 mb-6 tracking-wider uppercase border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    The GraminSetu Mission
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Connecting Rural India <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                      To Progress
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-emerald-200 pl-6">
                    We are the bridge that eliminates distances. Our platform ensures that villages,
                    government, and businesses work together seamlessly for a developed India.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Item 1: Villages */}
                  <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 transform hover:-translate-x-[-10px]">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Empowering Villages
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Easy access to government schemes & fair markets.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Government */}
                  <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 transform hover:-translate-x-[-10px]">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        Enabling Government
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Reach every citizen directly with total transparency.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Business */}
                  <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 transform hover:-translate-x-[-10px]">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                        Expanding Business
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Unlock new opportunities in trusted rural markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => navigate('/about')}
                    className="group px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200"
                  >
                    <span>Join Our Mission</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities - Matching Site Theme with Animations */}
      <section
        id="capabilities"
        className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Background Pattern - Matching other sections */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Matching Site Style */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 text-xs sm:text-sm font-bold text-emerald-700 mb-4 md:mb-6 tracking-wide shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              PLATFORM FEATURES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
              Everything You Need in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                One Place
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Simple tools that help villages, government, and businesses work together. No
              complicated setup, just results.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1: Dashboard with Live Animation */}
            <div className="md:col-span-2 lg:col-span-3 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <LineChart size={28} className="text-white md:w-8 md:h-8" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full inline-block mb-2">
                        MAIN DASHBOARD
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        See What's Happening, Right Now
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                  Track everything in your village with a simple dashboard. See which schemes are
                  active, who got benefits, and what's pending — all updated live.
                </p>

                {/* Animated Dashboard Preview - Enhanced */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-4 md:p-6 border border-slate-200 shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {/* Stat 1 - Animated Counter with Gradient */}
                    <div className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-xl p-4 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 bg-emerald-100 rounded-lg">
                            <FileText size={16} className="text-emerald-600" />
                          </div>
                          <div className="text-xs text-slate-600 font-semibold">
                            Applications This Month
                          </div>
                        </div>
                        <div className="text-3xl font-black text-emerald-600 mb-1 animate-pulse">
                          247
                        </div>
                        <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                          <TrendingUp size={14} className="animate-bounce" />
                          <span>↑ 12% from last month</span>
                        </div>
                      </div>
                    </div>

                    {/* Stat 2 - Benefits with Gradient */}
                    <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 bg-blue-100 rounded-lg">
                            <IndianRupee size={16} className="text-blue-600" />
                          </div>
                          <div className="text-xs text-slate-600 font-semibold">
                            Benefits Delivered
                          </div>
                        </div>
                        <div className="text-3xl font-black text-blue-600 mb-1">₹18.5L</div>
                        <div className="text-xs text-blue-600 font-medium">This week</div>
                      </div>
                    </div>

                    {/* Stat 3 - Active Schemes with Gradient */}
                    <div className="group relative bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 bg-orange-100 rounded-lg">
                            <CheckCircle2 size={16} className="text-orange-600" />
                          </div>
                          <div className="text-xs text-slate-600 font-semibold">Active Schemes</div>
                        </div>
                        <div className="text-3xl font-black text-orange-600 mb-1">12</div>
                        <div className="text-xs text-orange-600 font-medium">2 new this month</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Progress Bars - Enhanced */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex justify-between items-center text-xs text-slate-700 font-semibold mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span>PM-KISAN Applications</span>
                        </div>
                        <span className="text-emerald-600 font-bold">85%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: '85%' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-[slideRight_2s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex justify-between items-center text-xs text-slate-700 font-semibold mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span>Ayushman Bharat Enrollment</span>
                        </div>
                        <span className="text-blue-600 font-bold">92%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_0.5s]"></div>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: '92%' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-[slideRight_2s_ease-in-out_infinite_0.5s]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Government Schemes */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <Globe size={24} className="text-white md:w-7 md:h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Apply for Government Benefits
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Fill one simple form and apply for any government scheme. Track your application
                  status anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Feature 3: Community Connect */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} className="text-white md:w-7 md:h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Connect with Your Community
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Ask questions, share farming tips, or discuss local issues. Your village, your
                  voice.
                </p>
              </div>
            </div>

            {/* Feature 4: Local Market */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart size={24} className="text-white md:w-7 md:h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Sell Direct, Earn More
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  List your crops or products, connect with buyers directly, and get paid safely
                  through the platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                    No Commission
                  </span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                    Fair Prices
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 5: Help & Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon
                    size={24}
                    className="text-white md:w-7 md:h-7"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Get Help When You Need It
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Facing an issue? Report it and we'll track it until it's solved. You'll know
                  exactly what's happening.
                </p>
              </div>
            </div>

            {/* Feature 6: Works Everywhere */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} className="text-white md:w-7 md:h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Use on Any Device
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Works perfectly on your smartphone, tablet, or computer. Even works with 2G
                  internet.
                </p>
              </div>
            </div>

            {/* Feature 7: Your Language */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <Languages size={24} className="text-white md:w-7 md:h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Speak Your Language
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Choose from Hindi, English, Tamil, Telugu, Bengali, and 10+ more languages. Use
                  what feels natural to you.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Matching Site Style */}
          <div className="mt-12 md:mt-16 text-center px-4">
            <p className="text-slate-600 mb-6 text-base sm:text-lg font-medium">
              Ready to see how simple it really is?
            </p>
            <button
              onClick={() => navigate('/about')}
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>Learn More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose GraminSetu - Unique Value Props */}
      <section
        id="why-choose"
        className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 text-xs sm:text-sm font-bold text-emerald-700 mb-4 md:mb-6 tracking-wide shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              WHY GRAMINSETU
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
              Built Different,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Built for Rural India
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              We're not just another app. We're a movement to make rural development transparent,
              efficient, and accessible to everyone.
            </p>
          </div>

          {/* Value Props Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Value 1: No Middlemen */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      100% Direct Access
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      No agents, no brokers, no middlemen. Connect directly with government schemes
                      and buyers. Keep 100% of what you earn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value 2: Complete Transparency */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Globe size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Full Transparency
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Track every rupee, every application, every step. See exactly where your money
                      goes and when benefits arrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value 3: Works Offline */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Smartphone size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Works on 2G
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Built for rural connectivity. Works smoothly even with slow internet. Offline
                      mode for areas with no network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value 4: Free Forever */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IndianRupee size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Always Free for Villages
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      No hidden charges, no subscription fees. Completely free for villagers and
                      Panchayats. Forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Bar */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Trust 1 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} className="text-emerald-600" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">100%</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">Secure & Safe</div>
              </div>

              {/* Trust 2 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">24/7</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">
                  Support Available
                </div>
              </div>

              {/* Trust 3 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Languages size={24} className="text-orange-600" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">12+</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">
                  Indian Languages
                </div>
              </div>

              {/* Trust 4 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Landmark size={24} className="text-purple-600" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Gov</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">
                  Approved Platform
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16 px-4">
            <p className="text-slate-600 mb-6 text-base sm:text-lg font-medium">
              Ready to experience the difference?
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-emerald-200 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Promise Section - Light & Trustworthy */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/30 via-emerald-50/20 to-orange-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 text-xs sm:text-sm font-bold text-emerald-700 mb-4 md:mb-6 tracking-wide shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              OUR PROMISE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Guarantee You
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              These aren't just promises — they're commitments we stand behind every single day.
            </p>
          </div>

          {/* Promise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Promise 1: Data Security */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Your Data is Safe
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bank-level encryption. Your information never leaves India. Zero data selling.
                </p>
              </div>
            </div>

            {/* Promise 2: Always Free */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <IndianRupee size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Forever Free</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No hidden fees, ever. Completely free for villages and Panchayats. Always.
                </p>
              </div>
            </div>

            {/* Promise 3: Fast Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <HeadphonesIcon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Quick Help</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Support in your language. Response within 24 hours. Real people, not bots.
                </p>
              </div>
            </div>

            {/* Promise 4: Regular Updates */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Always Improving
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  New features every month. Based on your feedback. Built for your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Guarantee Statement */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Handshake size={40} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Commitment to Rural India
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We're building GraminSetu <span className="font-bold text-emerald-600">with</span>{' '}
              rural communities, not just <span className="font-bold text-slate-900">for</span>{' '}
              them. Your voice shapes every feature we build.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span className="text-sm font-semibold text-slate-700">Community First</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <CheckCircle2 size={18} className="text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">100% Transparent</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <CheckCircle2 size={18} className="text-orange-600" />
                <span className="text-sm font-semibold text-slate-700">Always Accountable</span>
              </div>
            </div>
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
