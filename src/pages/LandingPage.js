import React, { useState, useEffect } from "react";
import graminsetuMainImage from "../assets/images/graminsetu-main-image.png";
import { Helmet } from "react-helmet";
import Logo from "../components/Logo/Logo";
import Loader from "../components/Loader/Loader";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import Footer from "../components/Footer/Footer";
// import SecondaryCTA from "../components/SecondaryCTA/SecondaryCTA";
import HowItWorks from "../components/HowItWorks/HowItWorks";

import FAQ from "../components/FAQ/FAQ";
import Trust from "../components/Trust/Trust";
import { landingContent } from "../constants/landingContent";
import { businessModels } from "../constants/businessModels";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState('village');
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50">
        <Loader size="lg" variant="default" text="Loading GraminSetu..." />
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans">
      <Helmet>
        <title>{landingContent.meta.title}</title>
        <meta name="description" content={landingContent.meta.description} />
        <meta name="keywords" content={landingContent.meta.keywords} />
        <meta name="author" content={landingContent.meta.author} />
        <meta property="og:title" content={landingContent.meta.ogTitle} />
        <meta
          property="og:description"
          content={landingContent.meta.ogDescription}
        />
        <meta property="og:type" content={landingContent.meta.ogType} />
        <meta
          property="og:site_name"
          content={landingContent.meta.ogSiteName}
        />
        <meta property="og:locale" content={landingContent.meta.ogLocale} />
        <meta property="og:image" content={landingContent.meta.ogImage} />
        <meta name="twitter:card" content={landingContent.meta.twitterCard} />
        <meta name="twitter:title" content={landingContent.meta.twitterTitle} />
        <meta
          name="twitter:description"
          content={landingContent.meta.twitterDescription}
        />
        <meta name="twitter:image" content={landingContent.meta.twitterImage} />
        <meta name="theme-color" content={landingContent.meta.themeColor} />
        <link rel="canonical" href={landingContent.meta.canonical} />
        <html lang={landingContent.meta.lang} />
      </Helmet>
      {/* Header */}
      <header className="bg-white border-b border-gramin-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <Logo size="lg" showText={false} />
                <span className="text-xl md:text-2xl font-bold text-gramin-600">
                  GraminSetu
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              {/* <a href="/login" className="text-gramin-600 font-medium mr-4 transition-colors duration-200 hover:underline hover:text-gramin-700">Login</a>
              <a href="/register" className="bg-gramin-600 text-white rounded-lg font-semibold transition-colors duration-200 px-4 py-2 hover:bg-gramin-700">Register</a> */}
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-14 md:pb-10 bg-[#f6fcf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-[-32px] md:mt-[-48px]">
            {/* Left: Headline, subtext, CTAs */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gramin-700 mb-4 leading-tight tracking-tight drop-shadow-sm">
                {landingContent.hero.headline
                  .split("Building")
                  .map((part, idx, arr) =>
                    idx < arr.length - 1 ? (
                      <>
                        {part}
                        <br className="hidden md:inline" />
                        {"Building"}
                      </>
                    ) : (
                      part
                    )
                  )}
              </h1>
              <p className="text-lg md:text-xl text-gramin-800 mb-2 max-w-xl leading-relaxed font-medium">
                {landingContent.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-2 w-full">
                <a
                  href="/register"
                  className="bg-gramin-600 text-white rounded-lg font-bold shadow-lg transition-colors duration-200 text-lg px-8 py-3 text-center inline-block hover:bg-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-400"
                >
                  {landingContent.hero.button}
                </a>
                <button
                  className="border-2 border-gramin-600 text-gramin-600 rounded-lg font-bold transition-colors duration-200 text-lg px-8 py-3 text-center inline-block hover:bg-gramin-50 hover:text-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-400"
                  onClick={() => {
                    const el = document.getElementById(
                      landingContent.hero.secondaryCTA.scrollTo
                    );
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {landingContent.hero.secondaryCTA.text}
                </button>
              </div>
            </div>
            {/* Right: Hero Illustration */}
            <div className="flex-1 flex items-center justify-center w-full mt-0">
              <img
                src={graminsetuMainImage}
                alt="Digital Village Illustration"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain mt-[-12px] md:mt-[-24px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portal Cards Row (below hero, moved up and with hover effect) */}
      <section className="w-full flex flex-col items-center justify-center pt-2 pb-6 bg-[#f6fcf8]" style={{marginTop: '-48px'}}>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-6">
          {/* Villager Portal Card */}
          <div className="bg-white rounded-3xl border border-gramin-200 shadow-lg flex flex-col items-center p-10 md:p-12 -translate-y-2 transition-all duration-200 w-full min-w-0 hover:shadow-xl hover:-translate-y-2 hover:border-gramin-400">
            <div className="mb-4 pt-3">
              <svg className="w-12 h-12 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="font-bold text-xl mb-2">Villager</div>
            <div className="text-gramin-600 text-center mb-4">Access schemes, learn, and connect with your community.</div>
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto">Enter as Villager</button>
          </div>
          {/* Business/NGO Portal Card */}
          <div className="bg-white rounded-3xl border border-gramin-200 shadow-lg flex flex-col items-center p-10 md:p-12 -translate-y-2 transition-all duration-200 w-full min-w-0 hover:shadow-xl hover:-translate-y-2 hover:border-gramin-400">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            </div>
            <div className="font-bold text-xl mb-2">Business/NGO</div>
            <div className="text-gramin-600 text-center mb-4">Discover partners, expand reach, and collaborate.</div>
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto">Business/NGO Portal</button>
          </div>
          {/* Government/CSR Portal Card */}
          <div className="bg-white rounded-3xl border border-gramin-200 shadow-lg flex flex-col items-center p-10 md:p-12 -translate-y-2 transition-all duration-200 w-full min-w-0 hover:shadow-xl hover:-translate-y-2 hover:border-gramin-400">
            <div className="mb-4">
              <svg className="w-10 h-10 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div className="font-bold text-xl mb-2">Government/CSR</div>
            <div className="text-gramin-600 text-center mb-4">Implement initiatives, track impact, and empower.</div>
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto">Govt/CSR Portal</button>
          </div>
        </div>
      </section>

      {/* Explore Our Business Models Section - Full Page */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f6fcf8] p-0 m-0">
        <h2 className="text-5xl font-extrabold text-gramin-800 mb-12 text-center tracking-tight" style={{letterSpacing: '-1px'}}>EXPLORE OUR BUSINESS MODELS</h2>
        <div className="flex gap-8 mb-14 w-full max-w-4xl justify-center">
          {businessModels.map(({key, label}) => (
            <button
              key={key}
              className={`flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-xl shadow-md border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gramin-400 ${selectedModel === key ? 'bg-gramin-600 text-white border-gramin-600 shadow-lg scale-105' : 'bg-white text-gramin-600 border-gramin-200 hover:bg-gramin-50'}`}
              onClick={() => setSelectedModel(key)}
              style={{minWidth: 220, boxShadow: selectedModel === key ? '0 4px 24px 0 #02844a22' : '0 2px 8px 0 #0001'}}
            >
              {/* Use PNG icon, white if selected, green otherwise */}
              <img
                src={require(`../assets/business-models/${key}.png`)}
                alt={label}
                className={`w-8 h-8 mr-2 rounded-full object-contain ${selectedModel === key ? 'bg-white p-1' : 'bg-[#eafaf1] p-0'}`}
                style={{filter: selectedModel === key ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(104%) contrast(104%)' : 'none'}}
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
        {/* Card for selected model */}
        <div className="w-full max-w-7xl bg-[#eafaf1] rounded-2xl shadow-2xl border border-gramin-100 flex flex-row items-center p-14 md:p-20" style={{boxShadow:'0 12px 48px 0 #02844a22'}}>
          <div className="flex-shrink-0 flex items-center justify-center w-80 h-80 rounded-2xl bg-white border-2 border-gramin-200 mr-16 shadow" style={{boxShadow:'0 2px 16px 0 #02844a11'}}>
            <img
              src={require(`../assets/business-models/${selectedModel}.png`)}
              alt={businessModels.find((m) => m.key === selectedModel).label}
              className="w-full h-full object-contain"
              style={{maxWidth:'320px', maxHeight:'320px'}}
            />
          </div>
          <div className="flex-1">
            <div className="font-extrabold text-3xl md:text-4xl text-gramin-800 mb-3">{businessModels.find((m) => m.key === selectedModel).headline}</div>
            <div className="text-gramin-700 text-xl mb-4">{businessModels.find((m) => m.key === selectedModel).brief}</div>
            <ul className="list-disc pl-6 text-gramin-700 text-lg mb-8">
              {businessModels.find((m) => m.key === selectedModel).bullets.map((point, idx) => (
                <li key={idx} className="mb-1">{point}</li>
              ))}
            </ul>
            <button className="bg-gramin-700 hover:bg-gramin-800 text-white font-bold py-4 px-12 rounded-full transition text-xl shadow-md flex items-center gap-2">
              Explore More <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </section>


      {/* <SecondaryCTA /> */}
      <Trust />
      {/* Find Your Village Section - moved below Trust/Features */}
      <section className="py-16 bg-[#f8fcfa] flex flex-col items-center">
        <h2 className="text-xl font-bold text-gramin-700 mb-6">
          Find Your Village
        </h2>
        <div className="bg-white rounded-2xl shadow-xl px-8 py-10 w-full max-w-2xl flex flex-col items-center">
          <div className="w-14 h-14 bg-gramin-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-gramin-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0zm6 6v2a2 2 0 01-2 2h-1.5M3 16v2a2 2 0 002 2h1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="font-extrabold text-gramin-700 text-2xl mb-2">
            Find Your Village
          </div>
          <div className="text-base text-gramin-500 mb-6 text-center">
            Find and join your village community or create a new one
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center border-2 border-gramin-200 rounded-lg px-3 py-2 mb-2">
              <input
                type="text"
                placeholder="Enter your village name..."
                className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400"
              />
              <button className="ml-2 p-2 rounded bg-gramin-100 hover:bg-gramin-200 transition">
                <svg
                  className="w-6 h-6 text-gramin-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="text-xs text-gramin-500 mb-4">
              Eg: Rampur, Bihar
            </div>
            <div className="text-gramin-600 text-sm mb-2">
              Don't see your village?
            </div>
            <button className="w-full max-w-xs bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-base transition mb-2">
              <span className="text-xl font-bold">+</span> Create New Village
            </button>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
};

export default LandingPage;
