import React, { memo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import {
  ShieldCheck,
  LineChart,
  Users,
  FileText,
  Building,
  CheckCircle2,
  Fingerprint,
  X,
  Loader2,
  Briefcase,
} from 'lucide-react';

// --- Professional Feature Data ---
const features = [
  {
    icon: <LineChart className="w-5 h-5 text-gramin-700" />,
    title: 'Governance Analytics Intelligence',
    desc: 'Deploy sophisticated monitoring with real-time data visualization and automated compliance reporting for state schemes.',
  },
  {
    icon: <Users className="w-5 h-5 text-gramin-700" />,
    title: 'Beneficiary Management System',
    desc: 'Precise beneficiary identification and tracking using AI-powered socio-economic indicators to prevent leakage.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-gramin-700" />,
    title: 'Secure Fund Tracking',
    desc: 'Implement immutable audit trails for public fund utilization, ensuring 100% financial transparency and accountability.',
  },
  {
    icon: <Building className="w-5 h-5 text-gramin-700" />,
    title: 'Federated Governance Architecture',
    desc: 'Seamless integration across Gram Panchayat, Block, and District levels with role-based access control.',
  },
  {
    icon: <FileText className="w-5 h-5 text-gramin-700" />,
    title: 'Automated Reporting Engine',
    desc: 'Generate audit-ready reports, compliance documents, and impact assessments meeting NITI Aayog standards.',
  },
  {
    icon: <Fingerprint className="w-5 h-5 text-gramin-700" />,
    title: 'Digital Identity & Security',
    desc: 'Military-grade encryption and multi-factor authentication to protect sensitive citizen data and records.',
  },
];

// --- Pricing Data ---
const pricingPlans = {
  monthly: [
    {
      name: 'Panchayat Essential',
      price: 999,
      period: '/ month',
      desc: 'For individual Gram Panchayats.',
      features: [
        'Citizen Grievance Portal',
        'Digital Notice Board',
        'Basic Fund Tracking',
        '5 Admin Users',
        'Standard Support',
      ],
      button: 'Deploy Panchayat',
      highlight: false,
    },
    {
      name: 'District Pro',
      price: 2499,
      period: '/ month',
      desc: 'For Block and District administrations.',
      features: [
        'Multi-Village Dashboard',
        'Advanced Analytics',
        'Audit Trail Logs',
        'API Integration',
        'Priority Support',
      ],
      button: 'Deploy District',
      highlight: true,
    },
    {
      name: 'State Enterprise',
      price: 4999,
      period: '/ month',
      desc: 'For State Departments and large CSRs.',
      features: [
        'State-wide Monitoring',
        'Custom Workflows',
        'White-label Solutions',
        'Dedicated Account Manager',
        'On-premise Options',
      ],
      button: 'Contact Sales',
      highlight: false,
    },
  ],
  yearly: [
    {
      name: 'Panchayat Essential',
      price: 9999,
      period: '/ year',
      desc: 'For individual Gram Panchayats.',
      features: [
        'Citizen Grievance Portal',
        'Digital Notice Board',
        'Basic Fund Tracking',
        '5 Admin Users',
        'Standard Support',
      ],
      button: 'Deploy Panchayat',
      highlight: false,
    },
    {
      name: 'District Pro',
      price: 24999,
      period: '/ year',
      desc: 'For Block and District administrations.',
      features: [
        'Multi-Village Dashboard',
        'Advanced Analytics',
        'Audit Trail Logs',
        'API Integration',
        'Priority Support',
      ],
      button: 'Deploy District',
      highlight: true,
    },
    {
      name: 'State Enterprise',
      price: 49999,
      period: '/ year',
      desc: 'For State Departments and large CSRs.',
      features: [
        'State-wide Monitoring',
        'Custom Workflows',
        'White-label Solutions',
        'Dedicated Account Manager',
        'On-premise Options',
      ],
      button: 'Contact Sales',
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

const GovernmentCsrBusinessModel = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDemoModalOpen(false);
      setIsConsultModalOpen(false);
      alert('Request Submitted! Our government relations team will contact you securely.');
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">ISO 27001 Certified Security</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            The Operating System for <br className="hidden md:block" />
            <span className="text-gramin-700">Modern Governance</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Secure, scalable infrastructure for government bodies to enhance service delivery,
            transparency, and civic engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-gramin-700 hover:bg-gramin-800 text-white font-semibold rounded-lg shadow-sm transition-all text-sm md:text-base"
            >
              Request Official Demo
            </button>
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Policy Consultation
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Compliant with Digital India Standards
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
                Governance Structure
              </h2>
              <p className="text-slate-600 text-lg">
                Enterprise-grade tools built for the unique needs of public administration.
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
              Administrative Licensing
            </h2>
            <p className="text-slate-600 mb-8">Transparent pricing for public sector deployment.</p>

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
                    Recommended
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{plan.desc}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {typeof plan.price === 'number' && plan.price > 0 ? `₹${plan.price}` : 'Custom'}
                  </span>
                  {plan.price > 0 && <span className="text-slate-500 text-sm">{plan.period}</span>}
                </div>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
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
            <Briefcase className="w-8 h-8 text-gramin-700" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for Public Trust</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Empower your administration with the digital tools needed to serve citizens effectively
            in the 21st century.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-3 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition-colors"
            >
              Schedule Technical Demo
            </button>
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact Policy Team
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* --- MODALS --- */}

      {/* Demo Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Official Demo Request"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Government Body / Department
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="Department Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Official Email (.gov.in preferred)
            </label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="officer@district.gov.in"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Designation</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="e.g. District Magistrate, BDO"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gramin-700 hover:bg-gramin-800 text-white font-bold rounded-lg transition-all flex justify-center items-center"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Request Demo Access'}
          </button>
          <p className="text-xs text-slate-400 text-center">Verification required for access.</p>
        </form>
      </Modal>

      {/* Consultation Modal */}
      <Modal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        title="Policy Consultation"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Organization Name
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="Organization / Agency"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Topic</label>
            <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gramin-500">
              <option>Digital Infrastructure</option>
              <option>Beneficiary Management</option>
              <option>Financial Transparency</option>
              <option>Other</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-lg transition-all flex justify-center items-center"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              'Schedule Consultation'
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default memo(GovernmentCsrBusinessModel);
