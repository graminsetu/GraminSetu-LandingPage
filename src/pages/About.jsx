import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import BhogeshImage from '../assets/images/Bhogesh.webp';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Users,
  Building2,
  Landmark,
  Globe,
  ShieldCheck,
  Heart,
} from 'lucide-react';

function About() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <PageTitle pathname={location.pathname} />
      <Navbar />

      <main className="w-full">
        {/* 1. HERO: Clean, Centered, Authoritative */}
        <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto text-center border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            About GraminSetu
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            Connecting rural India to the world through{' '}
            <span className="text-slate-900 font-medium">trust, technology, and transparency.</span>
          </p>
        </section>

        {/* 2. INTRO: The Mission Statement (Lead Text) */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-slate-700 leading-8 mb-8">
            <strong className="text-slate-900 font-bold">GraminSetu</strong> is a mission-driven
            digital platform created to strengthen rural communities through accessible technology.
            It is designed to address real challenges faced by villages in accessing information,
            markets, and public services.
          </p>
          <div className="pl-6 border-l-4 border-green-500 italic text-slate-600 text-lg">
            The platform brings together villagers, businesses, NGOs, and government bodies into a
            unified digital ecosystem that supports communication, participation, and transparency
            at the village level.
          </div>
        </section>

        {/* 3. THE PROBLEM (Visual List) */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-600 text-lg mb-6">
                  Despite digital progress, rural India still faces a disconnect.
                </p>
                <ul className="space-y-4">
                  {[
                    'Limited access to accurate local information',
                    'Lack of awareness about government schemes',
                    'Restricted market access for local products',
                    'Weak communication with active institutions',
                    'Platforms not designed for rural context',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 text-lg leading-relaxed text-center">
                "These challenges limit economic growth, transparency, and community participation.
                We exist to solve them."
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO: Interactive3-Card Layout */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What GraminSetu Does</h2>
            <p className="text-slate-500">A unified ecosystem for every stakeholder.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">For Villagers</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-green-500 mt-1" /> Marketplace & Goods
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-green-500 mt-1" /> Govt Scheme Info
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-green-500 mt-1" /> Village News
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Business & NGOs</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-orange-500 mt-1" /> Direct Engagement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-orange-500 mt-1" /> Campaign Tools
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-orange-500 mt-1" /> Impact Reporting
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Landmark size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Government</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-blue-500 mt-1" /> Village Visibility
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-blue-500 mt-1" /> Citizen Feedback
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-blue-500 mt-1" /> Program Monitoring
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. ROADMAP: Mission & Vision Split */}
        <section className="bg-slate-900 text-white py-24 px-6 md:px-12 rounded-[2rem] mx-4 md:mx-8 mb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-green-400" size={32} />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide rural communities with reliable digital access that supports information
                sharing, economic opportunity, community participation, and transparent governance.
              </p>
            </div>
            <div className="md:border-l md:border-slate-700 md:pl-16">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-orange-400" size={32} />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To create a future where every village is digitally connected, informed, and
                empowered to participate in social and economic development.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HOW WE BUILD (Clean List) */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How We Build</h2>
            <div className="h-1 w-20 bg-green-500 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-lg text-slate-700">
            <div className="p-6 bg-slate-50 rounded-xl flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-green-600 shadow-sm border border-slate-100">
                1
              </span>
              Mobile-first design
            </div>
            <div className="p-6 bg-slate-50 rounded-xl flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-green-600 shadow-sm border border-slate-100">
                2
              </span>
              Regional language support
            </div>
            <div className="p-6 bg-slate-50 rounded-xl flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-green-600 shadow-sm border border-slate-100">
                3
              </span>
              Simple, friendly interface
            </div>
            <div className="p-6 bg-slate-50 rounded-xl flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-green-600 shadow-sm border border-slate-100">
                4
              </span>
              Privacy-first data approach
            </div>
          </div>
        </section>

        <HelpSupportButton />
      </main>

      <Footer />
    </div>
  );
}

export default About;
