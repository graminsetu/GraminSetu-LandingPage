import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import graminsetuMainImage from "../assets/images/graminsetu-main-image.png";
// import { Helmet } from "react-helmet";
import SEO from "../components/SEO";
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

// Emoji icons for each business model toggle button
const businessModelIcons = {
  village: "🏡",
  business: "🏢",
  government: "🏛️"
};

const LandingPage = () => {
  const navigate = useNavigate();
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
      <SEO />
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
                <button
                  className="bg-gramin-600 text-white rounded-lg font-bold shadow-lg transition-colors duration-200 text-lg px-8 py-3 text-center inline-block hover:bg-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-400"
                  onClick={() => navigate('/work-in-progress')}
                >
                  {landingContent.hero.button}
                </button>
                <button
                  className="border-2 border-gramin-600 text-gramin-600 rounded-lg font-bold transition-colors duration-200 text-lg px-8 py-3 text-center inline-block hover:bg-gramin-50 hover:text-gramin-700 focus:outline-none focus:ring-2 focus:ring-gramin-400"
                  onClick={() => {
                    const el = document.getElementById('newsletter');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Join Beta
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
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto text-center block" onClick={() => navigate('/work-in-progress')}>Village Portal</button>
          </div>
          {/* Business/NGO Portal Card */}
          <div className="bg-white rounded-3xl border border-gramin-200 shadow-lg flex flex-col items-center p-10 md:p-12 -translate-y-2 transition-all duration-200 w-full min-w-0 hover:shadow-xl hover:-translate-y-2 hover:border-gramin-400">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            </div>
            <div className="font-bold text-xl mb-2">Business/NGO</div>
            <div className="text-gramin-600 text-center mb-4">Discover partners, expand reach, and collaborate.</div>
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto" onClick={() => navigate('/work-in-progress')}>Business/NGO Portal</button>
          </div>
          {/* Government/CSR Portal Card */}
          <div className="bg-white rounded-3xl border border-gramin-200 shadow-lg flex flex-col items-center p-10 md:p-12 -translate-y-2 transition-all duration-200 w-full min-w-0 hover:shadow-xl hover:-translate-y-2 hover:border-gramin-400">
            <div className="mb-4">
              <svg className="w-10 h-10 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div className="font-bold text-xl mb-2">Government/CSR</div>
            <div className="text-gramin-600 text-center mb-4">Implement initiatives, track impact, and empower.</div>
            <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-2 px-6 rounded-lg transition w-full mt-auto" onClick={() => navigate('/work-in-progress')}>Govt/CSR Portal</button>
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
              <span
                className={`w-10 h-10 mr-2 rounded-full border-2 flex items-center justify-center text-2xl transition-all duration-200 ${selectedModel === key ? 'bg-white border-gramin-600 shadow-lg scale-110' : 'bg-[#eafaf1] border-transparent'}`}
                style={{color: '#222', boxShadow: selectedModel === key ? '0 0 0 2px #02844a55' : 'none', background: selectedModel === key ? '#fff' : '#eafaf1'}}
              >
                {businessModelIcons[key]}
              </span>
              <span>{label}</span>
            </button>
          ))}
        </div>
        {/* Card for selected model */}
        <div className="w-full max-w-7xl bg-[#eafaf1] rounded-2xl shadow-2xl border border-gramin-100 flex flex-row items-center p-14 md:p-20 justify-center" style={{boxShadow:'0 12px 48px 0 #02844a22'}}>
          <div
            className="flex items-center justify-center rounded-2xl bg-[#f6fcf8] border-2 border-gramin-200 mr-16 shadow p-0"
            style={{
              boxShadow: '0 2px 16px 0 #02844a11',
              width: '340px',
              // height: (selectedModel === 'government' || selectedModel === 'business' || selectedModel === 'village') ? '400px' : '340px',
              minWidth: 0,
              minHeight: 0
            }}
          >
            {selectedModel === 'village' && (
              <img
                src={require('../assets/business-models/village.png')}
                alt="Village Business Model"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            {selectedModel === 'government' && (
              <img
                src={require('../assets/business-models/govt.png')}
                alt="Government/CSR Business Model"
                className="w-full h-full object-contain rounded-2xl"
                style={{display: 'block', height: '100%', width: '100%'}}
              />
            )}
            {selectedModel === 'business' && (
              <img
                src={require('../assets/business-models/bussiness.png')}
                alt="Business/NGO Business Model"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="flex-1">
            <div className="font-extrabold text-3xl md:text-4xl text-gramin-800 mb-3">{businessModels.find((m) => m.key === selectedModel).headline}</div>
            <div className="text-gramin-700 text-xl mb-4">{businessModels.find((m) => m.key === selectedModel).brief}</div>
            <ul className="list-disc pl-6 text-gramin-700 text-lg mb-8">
              {businessModels.find((m) => m.key === selectedModel).bullets.map((point, idx) => (
                <li key={idx} className="mb-1">{point}</li>
              ))}
            </ul>
            <button
              className="bg-gramin-700 hover:bg-gramin-800 text-white font-bold py-4 px-12 rounded-full transition text-xl shadow-md flex items-center gap-2 mt-2"
              style={{ width: 'fit-content' }}
              onClick={() => {
                let link = businessModels.find((m) => m.key === selectedModel).exploreLink || '#';
                if (selectedModel === 'village') link = '/village-business-model';
                if (selectedModel === 'business') link = '/business/ngo-business-model';
                navigate(link);
              }}
            >
              Explore More <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </section>


      {/* <SecondaryCTA /> */}
      <Trust />
      {/* Find Your Village / Business / Govt Section */}
      <section className="py-20 bg-[#f8fcf8] flex flex-col items-center min-h-[60vh]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gramin-700 mb-4 text-center">Find Your Community</h2>
        <div className="text-lg text-gramin-600 mb-6 text-center max-w-3xl">Join a thriving network of villages, organizations, and changemakers. Connect, collaborate, and unlock new opportunities for your community, business, or government initiative.</div>
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl px-12 py-14 flex flex-col items-center border border-gramin-100" style={{boxShadow:'0 8px 40px 0 #02844a18'}}>
          {/* Benefit Highlights */}
          <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 flex items-center gap-3 bg-gramin-50 rounded-xl px-4 py-3">
              <svg className="w-7 h-7 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12V4"/></svg>
              <span className="font-semibold text-gramin-700">Connect with your community</span>
            </div>
            <div className="flex-1 flex items-center gap-3 bg-gramin-50 rounded-xl px-4 py-3">
              <svg className="w-7 h-7 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              <span className="font-semibold text-gramin-700">Verified, safe, and inclusive</span>
            </div>
            <div className="flex-1 flex items-center gap-3 bg-gramin-50 rounded-xl px-4 py-3">
              <svg className="w-7 h-7 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
              <span className="font-semibold text-gramin-700">For villagers, NGOs, and government</span>
            </div>
          </div>
          {/* Portal Selection Tabs */}
          <div className="flex w-full mb-8 gap-2">
            {[
              { key: 'village', label: 'Villager' },
              { key: 'business', label: 'Business/NGO' },
              { key: 'government', label: 'Government/CSR' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`flex-1 py-3 rounded-lg font-semibold text-lg border transition-all duration-150 ${selectedModel === key ? 'bg-gramin-600 text-white border-gramin-600 shadow' : 'bg-white text-gramin-600 border-gramin-200 hover:bg-gramin-50'}`}
                onClick={() => setSelectedModel(key)}
              >
                {label}
              </button>
            ))}
          </div>
          {/* Dynamic Card Content */}
          <div className="w-full flex flex-col items-center">
            {selectedModel === 'village' && (
              <>
                <div className="font-bold text-2xl text-gramin-700 mb-2">Find Your Village</div>
                <div className="text-lg text-gramin-500 mb-4 text-center">Search and join your village community or create a new one.</div>
                <div className="w-full flex flex-col md:flex-row gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Enter village name..."
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-200 rounded-lg px-4 py-3"
                  />
                  <input
                    type="text"
                    placeholder="District (optional)"
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-100 rounded-lg px-4 py-3"
                  />
                  <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold px-8 py-3 rounded-lg transition flex items-center gap-2 text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Search
                  </button>
                </div>
                <div className="text-sm text-gramin-500 mb-2">Eg: Rampur, Bihar</div>
                <div className="text-gramin-600 text-base mb-2">Don't see your village?</div>
                <button className="w-full max-w-xs bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition mb-2">
                  <span className="text-2xl font-bold">+</span> Create New Village
                </button>
                <button type="button" className="text-gramin-500 text-sm underline hover:text-gramin-700 mt-1 bg-transparent border-0 p-0 cursor-pointer">Need help? Contact support</button>
              </>
            )}
            {selectedModel === 'business' && (
              <>
                <div className="font-bold text-2xl text-gramin-700 mb-2">Find Your Business/NGO</div>
                <div className="text-lg text-gramin-500 mb-4 text-center">Search and join your organization or register a new one.</div>
                <div className="w-full flex flex-col md:flex-row gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Enter business/NGO name..."
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-200 rounded-lg px-4 py-3"
                  />
                  <input
                    type="text"
                    placeholder="Category/Region (optional)"
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-100 rounded-lg px-4 py-3"
                  />
                  <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold px-8 py-3 rounded-lg transition flex items-center gap-2 text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Search
                  </button>
                </div>
                <div className="text-sm text-gramin-500 mb-2">Eg: Setu Foundation, Healthcare</div>
                <div className="text-gramin-600 text-base mb-2">Don't see your organization?</div>
                <button className="w-full max-w-xs bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition mb-2">
                  <span className="text-2xl font-bold">+</span> Register New Business/NGO
                </button>
                <button type="button" className="text-gramin-500 text-sm underline hover:text-gramin-700 mt-1 bg-transparent border-0 p-0 cursor-pointer">Learn more about benefits</button>
              </>
            )}
            {selectedModel === 'government' && (
              <>
                <div className="font-bold text-2xl text-gramin-700 mb-2">Find Your Department/Program</div>
                <div className="text-lg text-gramin-500 mb-4 text-center">Search and join your department or register a new government/CSR partner.</div>
                <div className="w-full flex flex-col md:flex-row gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Enter department/program name..."
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-200 rounded-lg px-4 py-3"
                  />
                  <input
                    type="text"
                    placeholder="Department/CSR Category (optional)"
                    className="flex-1 bg-transparent outline-none text-gramin-700 text-lg placeholder-gramin-400 border-2 border-gramin-100 rounded-lg px-4 py-3"
                  />
                  <button className="bg-gramin-600 hover:bg-gramin-700 text-white font-bold px-8 py-3 rounded-lg transition flex items-center gap-2 text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Search
                  </button>
                </div>
                <div className="text-sm text-gramin-500 mb-2">Eg: Rural Development, CSR</div>
                <div className="text-gramin-600 text-base mb-2">Not listed?</div>
                <button className="w-full max-w-xs bg-gramin-600 hover:bg-gramin-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition mb-2">
                  <span className="text-2xl font-bold">+</span> Register New Govt/CSR Partner
                </button>
                <button type="button" className="text-gramin-500 text-sm underline hover:text-gramin-700 mt-1 bg-transparent border-0 p-0 cursor-pointer">Contact us for partnership</button>
              </>
            )}
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
};

export default LandingPage;
