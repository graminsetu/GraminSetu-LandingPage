import React, { memo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import {
  Handshake,
  BarChart3,
  Globe2,
  Users2,
  FileBadge,
  CheckCircle2,
  X,
  Loader2,
  HeartHandshake,
  Megaphone,
} from 'lucide-react';

// --- Professional Feature Data ---
const features = [
  {
    icon: <BarChart3 className="w-5 h-5 text-gramin-700" />,
    title: 'Advanced Fundraising Analytics',
    desc: 'Deploy sophisticated fundraising strategies with AI-powered donor analytics and automated campaign optimization.',
  },
  {
    icon: <Globe2 className="w-5 h-5 text-gramin-700" />,
    title: 'Impact Measurement Frameworks',
    desc: 'Implement evidence-based impact measurement aligned with UN SDGs and GRI standards for real-time reporting.',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-gramin-700" />,
    title: 'Strategic Advocacy Tools',
    desc: 'Execute data-driven advocacy campaigns with targeted messaging and multi-channel distribution.',
  },
  {
    icon: <Users2 className="w-5 h-5 text-gramin-700" />,
    title: 'Stakeholder Relationship CRM',
    desc: 'Manage complex relationships with donors, volunteers, and beneficiaries through an integrated CRM ecosystem.',
  },
  {
    icon: <Handshake className="w-5 h-5 text-gramin-700" />,
    title: 'Corporate Partnership Network',
    desc: 'Access exclusive business development opportunities through a curated network of impact investors and CSR partners.',
  },
  {
    icon: <FileBadge className="w-5 h-5 text-gramin-700" />,
    title: 'Automated Compliance',
    desc: 'Ensure regulatory adherence with automated tracking for FCRA, tax exemptions, and grant reporting.',
  },
];

// --- Pricing Data ---
const pricingPlans = {
  monthly: [
    {
      name: 'Starter Impact',
      price: 0,
      period: 'Forever',
      desc: 'For new NGOs and grassroots organizations.',
      features: [
        '3 Active Campaigns',
        'Basic Impact Dashboard',
        'Community Messaging',
        'Donation Collection Tools',
      ],
      button: 'Start Free',
      highlight: false,
    },
    {
      name: 'Growth Accelerator',
      price: 199,
      period: '/ month',
      desc: 'For growing NGOs scaling their operations.',
      features: [
        'Unlimited Campaigns',
        'Advanced Analytics',
        'Donor Engagement Tools',
        'Payment Gateway Integration',
        'Priority Support',
      ],
      button: 'Get Growth',
      highlight: true,
    },
    {
      name: 'Enterprise Scale',
      price: 499,
      period: '/ month',
      desc: 'For large foundations and social enterprises.',
      features: [
        'Multi-Team Management',
        'Custom API Access',
        'White-label Reporting',
        'Dedicated Success Manager',
        'Impact Audit Support',
      ],
      button: 'Get Enterprise',
      highlight: false,
    },
  ],
  yearly: [
    {
      name: 'Starter Impact',
      price: 0,
      period: 'Forever',
      desc: 'For new NGOs and grassroots organizations.',
      features: [
        '3 Active Campaigns',
        'Basic Impact Dashboard',
        'Community Messaging',
        'Donation Collection Tools',
      ],
      button: 'Start Free',
      highlight: false,
    },
    {
      name: 'Growth Accelerator',
      price: 1999,
      period: '/ year',
      desc: 'For growing NGOs scaling their operations.',
      features: [
        'Unlimited Campaigns',
        'Advanced Analytics',
        'Donor Engagement Tools',
        'Payment Gateway Integration',
        'Priority Support',
      ],
      button: 'Get Growth',
      highlight: true,
    },
    {
      name: 'Enterprise Scale',
      price: 4999,
      period: '/ year',
      desc: 'For large foundations and social enterprises.',
      features: [
        'Multi-Team Management',
        'Custom API Access',
        'White-label Reporting',
        'Dedicated Success Manager',
        'Impact Audit Support',
      ],
      button: 'Get Enterprise',
      highlight: false,
    },
  ],
};

// --- Modal Component ---
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-scale-in relative overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const BusinessNgoBusinessModel = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsJoinModalOpen(false);
      setIsPartnerModalOpen(false);
      alert('Request Submitted Successfully! Our impact team will contact you shortly.');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 border-b border-slate-100 bg-slate-50 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.4,
          }}
        ></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Empowering 5,000+ NGOs</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            The Enterprise Solution for <br className="hidden md:block" />
            <span className="text-gramin-700">Social Impact</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A comprehensive platform designed for modern NGOs and social enterprises to maximize
            fundraising, measure impact, and scale operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-gramin-700 hover:bg-gramin-800 text-white font-semibold rounded-lg shadow-sm transition-all text-sm md:text-base"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Partner With Us
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Trusted By Global Foundations
            </span>
          </div>
        </div>
      </section>

      {/* --- CORE CAPABILITIES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-b border-slate-100 pb-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Impact Capabilities
              </h2>
              <p className="text-slate-600 text-lg">
                Professional tools for verified social impact measurement and growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-gramin-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gramin-50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-gramin-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING STRUCTURE --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Transparent Impact Pricing
            </h2>
            <p className="text-slate-600 mb-8">Accessible plans for organizations of all sizes.</p>

            {/* Toggle */}
            <div className="inline-flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
              {['monthly', 'yearly'].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-8 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    billingCycle === cycle
                      ? 'bg-gramin-700 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cycle}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans[billingCycle].map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 rounded-xl bg-white border transition-all duration-300 ${
                  plan.highlight
                    ? 'border-gramin-600 shadow-xl ring-1 ring-gramin-600 relative overflow-hidden'
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gramin-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
                    Best Value
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{plan.desc}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {typeof plan.price === 'number' && plan.price > 0 ? `₹${plan.price}` : 'Free'}
                  </span>
                  {plan.price > 0 && <span className="text-slate-500 text-sm">{plan.period}</span>}
                </div>

                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className={`w-full py-3 rounded-lg font-semibold text-sm mb-8 border transition-all ${
                    plan.highlight
                      ? 'bg-gramin-700 border-gramin-700 text-white hover:bg-gramin-800'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  {plan.button}
                </button>

                <div className="mt-auto">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-gramin-600' : 'text-slate-400'}`}
                        />
                        <span className={plan.highlight ? 'font-medium' : ''}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 mb-6">
            <HeartHandshake className="w-8 h-8 text-gramin-700" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Amplify Your Social Impact</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of changemakers using GraminSetu to create sustainable development in
            rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="px-8 py-3 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* --- MODALS --- */}

      {/* Join/Register Modal */}
      <Modal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        title="Register Organization"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Organization / NGO Name
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="Organization Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="contact@org.org"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Sector</label>
            <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500">
              <option>Education</option>
              <option>Healthcare</option>
              <option>Agriculture</option>
              <option>Microfinance</option>
              <option>Other</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gramin-700 hover:bg-gramin-800 text-white font-bold rounded-lg transition-all flex justify-center items-center"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Create Account'}
          </button>
        </form>
      </Modal>

      {/* Partner Modal */}
      <Modal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        title="Partnership Inquiry"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company / Institution Name
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Official Email</label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Collaboration Interest
            </label>
            <textarea
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500 min-h-[80px]"
              placeholder="How would you like to partner?"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-lg transition-all flex justify-center items-center"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Send Inquiry'}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default memo(BusinessNgoBusinessModel);
