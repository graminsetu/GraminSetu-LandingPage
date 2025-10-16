import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import graminsetuMainImage from '../assets/images/graminsetu-main-image.webp';
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

      {/* Hero Section - Official & Professional */}
      <section id="hero" className="relative pt-0 pb-12 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Official & Clean */}
            <div className="lg:col-span-6 space-y-6">
              {/* Official Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-md border">
                <span className="text-sm font-medium text-gray-700">
                  Digital Solutions for Rural Development
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-gramin-600">GraminSetu</span>
                  <br />
                  Rural Development Platform
                </h1>

                <p className="text-xl text-gray-600 font-normal leading-relaxed">
                  Connecting villages, government agencies, and businesses through digital solutions
                  designed for rural India.
                </p>

                <p className="text-lg text-gray-500 leading-relaxed">
                  Our platform provides specialized portals for village governance, government
                  services, and business development to strengthen rural communities.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gramin-500 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Village Portal for Panchayat Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gramin-500 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Government Portal for Service Delivery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gramin-500 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Business Portal for Rural Development
                  </span>
                </div>
              </div>

              {/* CTA Buttons - Professional */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="px-10 py-4 bg-gramin-600 text-white font-medium rounded-md hover:bg-gramin-700 transition-colors duration-200 text-lg"
                  onClick={() => handleAction(landingContent.hero.primaryAction)}
                >
                  Explore Portals
                </button>

                <button
                  className="px-10 py-4 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200 text-lg"
                  onClick={() => handleAction(landingContent.hero.secondaryAction)}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image - Enhanced Size and Presentation */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <img
                  src={graminsetuMainImage}
                  alt="GraminSetu Digital Platform Interface"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Three Specialized Portals Section - Perfect UX */}
      <section id="portals-overview" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {landingContent.portals.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {landingContent.portals.description}
            </p>
          </div>

          {/* Portal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Village Portal Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gramin-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {landingContent.portals.village.title}
                  </h3>
                  <p className="text-lg font-semibold text-gramin-600">
                    {landingContent.portals.village.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {landingContent.portals.village.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {landingContent.portals.village.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gramin-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full bg-gramin-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gramin-700 transition-colors duration-200 group-hover:shadow-lg"
                  onClick={() => navigate(landingContent.portals.village.link)}
                >
                  {landingContent.portals.village.cta}
                </button>
              </div>
            </div>

            {/* Government Portal Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gramin-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {landingContent.portals.government.title}
                  </h3>
                  <p className="text-lg font-semibold text-gramin-600">
                    {landingContent.portals.government.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {landingContent.portals.government.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {landingContent.portals.government.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gramin-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full bg-gramin-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gramin-700 transition-colors duration-200 group-hover:shadow-lg"
                  onClick={() => navigate(landingContent.portals.government.link)}
                >
                  {landingContent.portals.government.cta}
                </button>
              </div>
            </div>

            {/* Business Portal Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gramin-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {landingContent.portals.business.title}
                  </h3>
                  <p className="text-lg font-semibold text-gramin-600">
                    {landingContent.portals.business.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {landingContent.portals.business.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {landingContent.portals.business.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gramin-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full bg-gramin-700 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gramin-800 transition-colors duration-200 group-hover:shadow-lg"
                  onClick={() => navigate(landingContent.portals.business.link)}
                >
                  {landingContent.portals.business.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Mission Section - Modern Design */}
      <section id="story" className="py-20 bg-gradient-to-br from-gramin-50 to-gramin-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gramin-100 to-gramin-200 rounded-full mb-6">
                <span className="text-sm font-bold text-gramin-700 uppercase tracking-wider">
                  🚀 Our Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                {landingContent.story.title}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {landingContent.story.description}
              </p>

              {/* Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {landingContent.story.pillars.map((item, index) => (
                  <div
                    key={item.title}
                    className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.copy}</p>
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gramin-100/50 to-gramin-200/50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenges We Address</h3>
                  <p className="text-gray-600">Key issues in rural digital transformation</p>
                </div>

                <div className="space-y-6">
                  {landingContent.story.challenges.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gramin-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          {item.label}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.detail}</p>
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
      <section id="features" className="py-20 bg-gramin-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {landingContent.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {landingContent.features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {landingContent.features.categories.map((category, index) => (
              <div key={category.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gramin-100/50 to-gramin-200/50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>

                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon === 'village' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    )}
                    {category.icon === 'government' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
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

                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gramin-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
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
      <section id="social-proof" className="py-20 bg-gramin-50 relative overflow-hidden">
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
          <div className="text-center mb-12">
            <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-gramin-500 mb-4">
              Join the founding cohort
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gramin-800 mb-4">
              Co-design responsible rural technology with us
            </h2>
            <p className="text-lg text-gramin-600 max-w-3xl mx-auto">
              We are inviting village leaders, civil society organizations, and government
              departments to shape a platform that serves rural India authentically.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-lg p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 bg-gramin-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-semibold text-gramin-800 mb-3">Village Partners</h3>
                <p className="text-gramin-700 leading-relaxed mb-4">
                  Gram Panchayats and SHG leaders who want to test digital governance and
                  marketplace tools with their communities.
                </p>
              </div>
              <div className="text-sm text-gramin-500 font-medium">
                Pilot locations: AP, Odisha, Bihar
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-lg p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 bg-gramin-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-gramin-800 mb-3">NGO & CSR Teams</h3>
                <p className="text-gramin-700 leading-relaxed mb-4">
                  Organizations ready to pilot transparent impact tracking and community
                  collaboration workflows.
                </p>
              </div>
              <div className="text-sm text-gramin-500 font-medium">
                Focus: Rural development & livelihoods
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gramin-100 shadow-lg p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 bg-gramin-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gramin-800 mb-3">
                  Government Departments
                </h3>
                <p className="text-gramin-700 leading-relaxed mb-4">
                  Progressive administrators exploring digital-first approaches to scheme delivery
                  and grievance resolution.
                </p>
              </div>
              <div className="text-sm text-gramin-500 font-medium">
                Early adopter departments welcome
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 bg-gramin-700 hover:bg-gramin-800 text-white font-bold px-8 py-3 rounded-lg shadow transition"
              onClick={() => handleAction({ to: '/contact' })}
            >
              Apply to join our pilot cohort
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Invitation Section */}

      {/* Trust Section - Modern Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gramin-100 to-gramin-200 rounded-full mb-6">
              <span className="text-sm font-bold text-gramin-700 uppercase tracking-wider">
                🤝 Building with Community Input
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Built with Rural India's Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are in discovery mode, learning from Panchayats, NGOs, and government teams about
              what rural India needs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gramin-500 to-gramin-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-white">28</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Discovery Conversations</div>
              <div className="text-gray-600">In-depth interviews with stakeholders</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gramin-600 to-gramin-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">States with Field Research</div>
              <div className="text-gray-600">On-ground research and validation</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gramin-400 to-gramin-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-white">8</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Months in User Research</div>
              <div className="text-gray-600">Continuous learning and iteration</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gramin-700 to-gramin-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-white">12</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Partner Organizations</div>
              <div className="text-gray-600">Collaborative development approach</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
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
      <section className="py-16 bg-gramin-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Transform Rural India?
            </h2>
            <p className="text-xl text-gramin-100 mb-8">
              Join thousands of villages, NGOs, and government departments already using GraminSetu
              to build stronger, more connected communities.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-white text-gramin-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </button>
              <button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gramin-700 transition-all duration-300"
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
