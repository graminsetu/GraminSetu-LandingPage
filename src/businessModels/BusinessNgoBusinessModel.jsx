
import React, { memo, useState } from "react";
import { businessNgoBusinessModelContent as content } from "../constants/businessNgoBusinessModelContent";
import { useState as useAccordionState } from "react";


const planCycles = [
  { key: 'monthly', label: 'Monthly', savings: null },
  { key: 'quarterly', label: 'Quarterly (4 Months)', savings: 'Save 10%' },
  { key: 'yearly', label: 'Yearly', savings: 'Save 17%' }
];

const pricingPlans = {
  monthly: [
    {
      name: "Base (Free)",
      icon: "🆓",
      price: 0,
      priceLabel: "₹0",
      summary: "Basic campaigns, donation tracking, limited messaging, standard dashboard",
      who: "New organizations, pilots",
      details: [
        "Create and manage basic initiatives and donation drives.",
        "Standard dashboard for campaign and community metrics.",
        "Up to 250 bulk messages/month.",
        "Access standard support channels."
      ],
      highlight: false,
      cta: "Start Free"
    },
    {
      name: "Growth",
      icon: "🚀",
      price: 499,
      priceLabel: "₹499/month",
      summary: "Unlimited messaging, enhanced analytics, campaign templates, API access",
      who: "Active NGOs, small businesses",
      details: [
        "Unlimited bulk/targeted messaging.",
        "Advanced analytics and detailed reports for projects.",
        "Use professional campaign templates; easier duplications.",
        "API access for connecting with organization’s tools.",
        "Priority email/chat support."
      ],
      highlight: true,
      cta: "Upgrade Now"
    },
    {
      name: "Impact",
      icon: "🌟",
      price: 999,
      priceLabel: "₹999/month",
      summary: "All Growth features, custom integrations, dedicated support, multi-village tools",
      who: "Scaling NGOs, CSR teams",
      details: [
        "All Growth features included.",
        "Custom API/integration development.",
        "Multi-village project management tools.",
        "Dedicated account manager.",
        "SLA-backed support response."
      ],
      highlight: false,
      cta: "Contact Us"
    }
  ],
  quarterly: [
    {
      name: "Base (Free)",
      icon: "🆓",
      price: 0,
      priceLabel: "₹0",
      summary: "Basic campaigns, donation tracking, limited messaging, standard dashboard",
      who: "New organizations, pilots",
      details: [
        "Create and manage basic initiatives and donation drives.",
        "Standard dashboard for campaign and community metrics.",
        "Up to 250 bulk messages/month.",
        "Access standard support channels."
      ],
      highlight: false,
      cta: "Start Free"
    },
    {
      name: "Growth",
      icon: "🚀",
  price: 1799,
  priceLabel: "₹1,799/quarter (4 mo)",
      summary: "Unlimited messaging, enhanced analytics, campaign templates, API access",
      who: "Active NGOs, small businesses",
      details: [
        "Unlimited bulk/targeted messaging.",
        "Advanced analytics and detailed reports for projects.",
        "Use professional campaign templates; easier duplications.",
        "API access for connecting with organization’s tools.",
        "Priority email/chat support."
      ],
      highlight: true,
      cta: "Upgrade Now"
    },
    {
      name: "Impact",
      icon: "🌟",
  price: 3299,
  priceLabel: "₹3,299/quarter (4 mo)",
      summary: "All Growth features, custom integrations, dedicated support, multi-village tools",
      who: "Scaling NGOs, CSR teams",
      details: [
        "All Growth features included.",
        "Custom API/integration development.",
        "Multi-village project management tools.",
        "Dedicated account manager.",
        "SLA-backed support response."
      ],
      highlight: false,
      cta: "Contact Us"
    }
  ],
  yearly: [
    {
      name: "Base (Free)",
      icon: "🆓",
      price: 0,
      priceLabel: "₹0",
      summary: "Basic campaigns, donation tracking, limited messaging, standard dashboard",
      who: "New organizations, pilots",
      details: [
        "Create and manage basic initiatives and donation drives.",
        "Standard dashboard for campaign and community metrics.",
        "Up to 250 bulk messages/month.",
        "Access standard support channels."
      ],
      highlight: false,
      cta: "Start Free"
    },
    {
      name: "Growth",
      icon: "🚀",
      price: 4999,
      priceLabel: "₹4,999/year",
      summary: "Unlimited messaging, enhanced analytics, campaign templates, API access",
      who: "Active NGOs, small businesses",
      details: [
        "Unlimited bulk/targeted messaging.",
        "Advanced analytics and detailed reports for projects.",
        "Use professional campaign templates; easier duplications.",
        "API access for connecting with organization’s tools.",
        "Priority email/chat support."
      ],
      highlight: true,
      cta: "Upgrade Now"
    },
    {
      name: "Impact",
      icon: "🌟",
      price: 8999,
      priceLabel: "₹8,999/year",
      summary: "All Growth features, custom integrations, dedicated support, multi-village tools",
      who: "Scaling NGOs, CSR teams",
      details: [
        "All Growth features included.",
        "Custom API/integration development.",
        "Multi-village project management tools.",
        "Dedicated account manager.",
        "SLA-backed support response."
      ],
      highlight: false,
      cta: "Contact Us"
    }
  ]
};



const BusinessNgoBusinessModel = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  return (
    <div className="bg-gradient-to-br from-gramin-50 via-white to-setu-50 min-h-screen pb-12">
      {/* Breadcrumbs */}
      <nav className="w-full sticky top-0 z-20 border-b border-gramin-200 shadow-sm backdrop-blur bg-white/80">
        <div className="max-w-5xl mx-auto flex items-center py-4 px-4">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center text-gramin-600 hover:text-gramin-800 font-semibold text-base px-2 py-1 rounded transition-colors focus:outline-none"
            aria-label="Back to Home"
          >
            <span className="mr-2 text-xl">&#8592;</span> Home
          </button>
          <span className="mx-2 text-gramin-400">/</span>
          <span className="text-gramin-900 font-bold text-base">Business / NGO Model</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-14 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gramin-900 mb-4 leading-tight tracking-tight drop-shadow-lg bg-gradient-to-r from-gramin-600 via-gramin-400 to-setu-400 bg-clip-text text-transparent">Explore Our Business / NGO Model</h1>
        <p className="text-2xl text-gramin-700 mb-6 font-semibold">Empower Your Impact — Connect, Engage, Deliver</p>
        <p className="text-lg text-gramin-600 mb-8 max-w-3xl">GraminSetu’s Business and NGO portal is specially designed to empower organizations to extend their reach, simplify project management, and create measurable social impact within rural communities. Harness the power of technology to engage villagers effectively, manage campaigns, and drive sustainable development outcomes.</p>
        <div className="w-full flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gramin-100 bg-white">
            <img src="/images/business-hero.jpg" alt="Business/NGO using GraminSetu" className="mx-auto w-full max-w-2xl object-cover" style={{ minHeight: 220, maxHeight: 340 }} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: "📊",
            title: "Comprehensive Dashboard & Analytics",
            desc: "Access real-time insights into campaigns, donation flows, CSR activities, and community engagement. Measure impact with customizable reports designed to inform strategy and improve results."
          },
          {
            icon: "📢",
            title: "Seamless Campaign Management",
            desc: "Plan, launch, and monitor social or development campaigns easily. Coordinate volunteer efforts, track deliverables, and communicate transparently with beneficiaries and stakeholders."
          },
          {
            icon: "💬",
            title: "Direct Communication Channels",
            desc: "Reach target villages and individual users through bulk messaging, announcements, and personalized communication. Ensure your message gets heard where it matters most."
          },
          {
            icon: "💰",
            title: "Integrated Donation & Fund Management",
            desc: "Simplify collection, allocation, and tracking of donations with transparent reporting. Build trust with contributors and beneficiaries alike through clear financial flows."
          },
          {
            icon: "🔗",
            title: "API Integration & Data Sync",
            desc: "Connect GraminSetu with your existing CRM, ERP, or analytics systems using secure APIs for streamlined operational workflows and data consistency."
          },
          {
            icon: "🤝",
            title: "Priority Support & Customization",
            desc: "Receive dedicated assistance, feature prioritization, and optional bespoke development support tailored to your organizational needs."
          }
        ].map((f, i) => (
          <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-4xl font-bold text-gramin-900 text-center mb-2">Business/NGO Portal Pricing Plans</h2>
        <p className="text-xl text-gramin-700 text-center mb-8">Transparent, Affordable Options Tailored for Impact</p>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full shadow bg-white border border-gramin-200 overflow-hidden">
            {planCycles.map(({key, label, savings}) => (
              <button
                key={key}
                className={`px-6 py-2 text-base font-semibold transition-colors focus:outline-none ${selectedPlan === key ? 'bg-gramin-600 text-white' : 'text-gramin-700 hover:bg-gramin-100'}`}
                onClick={() => setSelectedPlan(key)}
                aria-pressed={selectedPlan === key}
              >
                {label} {savings && <span className="ml-1 text-xs text-gramin-400">{savings}</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans[selectedPlan].map((plan, i) => (
            <PricingAccordionCard key={i} {...plan} />
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gramin-900 mb-6">Why Choose GraminSetu’s Business / NGO Portal?</h2>
        <ul className="list-disc list-inside text-gramin-700 text-lg space-y-3">
          <li>Maximize Outreach & Impact: Efficiently engage thousands of villagers with targeted, data-driven communication and campaigns.</li>
          <li>Transparent Operations: Monitor donation utilization and project progress openly to build credibility and trust.</li>
          <li>Simplify Complex Workflows: Automate campaign management with integrated tools and APIs, reducing manual overhead.</li>
          <li>Scalable Solutions: Flexible plans designed to grow with your organization's ambitions and geographical footprint.</li>
        </ul>
      </section>

      {/* User Journey Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gramin-900 mb-6">User Journey Highlights</h2>
        <ol className="list-decimal list-inside text-gramin-700 text-lg space-y-3">
          <li>Simple Onboarding: Create your profile and set up your first campaign in minutes.</li>
          <li>Campaign Execution: Manage large-scale initiatives with intuitive tools and comprehensive metrics.</li>
          <li>Effective Communication: Send personalized bulk messages and announcements targeted by village or demographic.</li>
          <li>Insights & Reporting: Analyze campaign performance and donation impacts through dynamic dashboards.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-gramin-900 mb-4">Transform the way your organization makes a difference.</h2>
        <p className="text-lg text-gramin-700 mb-6">Join GraminSetu’s Business/NGO platform and unlock the tools designed specifically for scalable, measurable rural impact.</p>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-5 bg-white rounded-xl shadow-md p-6 border border-gramin-100 hover:shadow-lg transition-all group">
      <span className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</span>
      <div>
        <h3 className="font-semibold text-gramin-900 text-xl mb-2">{title}</h3>
        <p className="text-gramin-700 text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}



function PricingAccordionCard({ name, icon, priceLabel, summary, details, highlight, who, cta }) {
  const [open, setOpen] = useAccordionState(false);
  const colors = highlight
    ? 'border-gramin-600 bg-gradient-to-br from-gramin-100 via-white to-setu-100 scale-105 shadow-2xl'
    : 'border-gramin-200 bg-gradient-to-br from-white via-gramin-50 to-setu-50 shadow-lg';
  return (
    <div
      className={`rounded-3xl border-2 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${colors}`}
      style={{ minHeight: 480, backgroundImage: highlight ? 'radial-gradient(circle at 60% 40%, #e0ffe6 0%, #fff 100%)' : undefined }}
    >
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gramin-600 to-gramin-400 text-white px-5 py-1 rounded-full text-xs font-bold shadow-lg tracking-wide z-10 border-2 border-white animate-bounce">
          Most Popular
        </div>
      )}
      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-3 shadow-lg bg-gradient-to-br from-gramin-100 to-white border-2 border-gramin-200">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-extrabold mb-2 text-gramin-900 tracking-tight text-center drop-shadow-sm">{name}</h3>
      <div className="text-3xl font-bold text-gramin-600 mb-1">{priceLabel}</div>
      <div className="text-base text-gramin-700 mb-2 text-center min-h-[56px]">{summary}</div>
      <div className="text-xs text-gramin-500 mb-2 font-semibold uppercase">{who}</div>
      <button
        className="text-gramin-600 font-semibold underline mb-2 focus:outline-none focus:ring-2 focus:ring-gramin-400 transition-all duration-150"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`plan-details-${name}`}
      >
        {open ? 'Hide Plan Details' : 'Show Plan Details'}
      </button>
      <div className={`transition-all duration-300 w-full ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        style={{marginBottom: open ? 16 : 0}}
      >
        {open && (
          <ul id={`plan-details-${name}`} className="mb-4 text-gramin-700 text-base list-disc list-inside text-left w-full space-y-2 bg-gramin-50 rounded-xl p-4 border border-gramin-100 animate-fade-in">
            {details.map((f, j) => (
              <li key={j} className="pl-1 leading-relaxed">{f}</li>
            ))}
          </ul>
        )}
      </div>
      <button
        className={`mt-auto px-8 py-2 rounded-full font-bold shadow text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gramin-400 ${
          highlight
            ? 'bg-gradient-to-r from-gramin-600 to-gramin-400 text-white hover:from-gramin-700 hover:to-gramin-500'
            : 'bg-gramin-100 text-gramin-700 hover:bg-gramin-200'
        }`}
        tabIndex={0}
      >
        {cta}
      </button>
    </div>
  );
}

export default memo(BusinessNgoBusinessModel);
