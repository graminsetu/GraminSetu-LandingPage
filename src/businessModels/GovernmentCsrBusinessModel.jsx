
import React, { memo, useState } from "react";

const pricingPlans = [
  {
    name: "Basic Governance",
    price: 1499,
    priceLabel: "₹1499 / month",
    summary: "Village-level monitoring, issue tracking, announcements",
    bestFor: "Suitable for local government bodies",
    details: [
      "Village-level monitoring dashboard.",
      "Track civic issues and complaints.",
      "Broadcast government announcements.",
      "Schedule and manage local events.",
      "Standard support."
    ],
    highlight: false
  },
  {
    name: "Advanced Compliance",
    price: 3499,
    priceLabel: "₹3499 / month",
    summary: "All Basic features plus audit trails, fund tracking, API access",
    bestFor: "Designed for district/state departments",
    details: [
      "All Basic Governance features.",
      "Audit trails and compliance tools.",
      "Fund allocation and tracking.",
      "API access for integration.",
      "Priority support."
    ],
    highlight: true
  },
  {
    name: "Enterprise Governance",
    price: null,
    priceLabel: "Custom Pricing",
    summary: "Full suite with custom integrations, priority support, multi-region management",
    bestFor: "Large scale govt/CSR agencies",
    details: [
      "All Advanced Compliance features.",
      "Custom integrations and reporting.",
      "Multi-region and multi-project management.",
      "SLA-backed uptime and premium support.",
      "Dedicated account manager."
    ],
    highlight: false
  }
];

const features = [
  { icon: "🛰️", title: "Real-Time Village Monitoring", desc: "Access real-time data on village activities, scheme implementations, infrastructure projects, and community well-being — enabling better decision making and performance tracking." },
  { icon: "📑", title: "Compliance & Transparency Tools", desc: "Maintain digital records of fund allocations, audit trails, and beneficiary lists. Facilitate accountability in governance with fully transparent workflows accessible by stakeholders." },
  { icon: "🛠️", title: "Issue Tracking & Resolution Management", desc: "Track civic complaints and their resolution status across villages, enabling faster responses and proactive governance." },
  { icon: "📢", title: "Direct Community Engagement", desc: "Broadcast announcements, schedule government-led events, and collect citizen feedback, ensuring two-way communication and participatory governance." },
  { icon: "🔗", title: "Integration with Government Systems", desc: "Leverage APIs to synchronize data seamlessly with existing government portals, databases, and analytics platforms for cohesive operations." },
  { icon: "📊", title: "Reporting & Analytics", desc: "Generate comprehensive reports on scheme coverage, fund utilization, and project impact with customizable dashboards tailored for different administrative levels." }
];

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

function PricingAccordionCard({ name, priceLabel, summary, bestFor, details, highlight }) {
  const [open, setOpen] = useState(false);
  const icons = {
    'Basic Governance': '🏛️',
    'Advanced Compliance': '📑',
    'Enterprise Governance': '🌐'
  };
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
        <span className="text-4xl">{icons[name]}</span>
      </div>
      <h3 className="text-2xl font-extrabold mb-2 text-gramin-900 tracking-tight text-center drop-shadow-sm">{name}</h3>
      <div className="text-3xl font-bold text-gramin-600 mb-1">{priceLabel}</div>
      <div className="text-base text-gramin-700 mb-2 text-center min-h-[56px]">{summary}</div>
      <div className="text-xs text-gramin-500 mb-2 font-semibold uppercase">{bestFor}</div>
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
        {name === 'Enterprise Governance' ? 'Contact Us' : 'Get Started'}
      </button>
    </div>
  );
}

const GovernmentCsrBusinessModel = () => (
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
        <span className="text-gramin-900 font-bold text-base">Government & CSR Model</span>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="max-w-5xl mx-auto px-4 py-14 text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gramin-900 mb-4 leading-tight tracking-tight drop-shadow-lg bg-gradient-to-r from-gramin-600 via-gramin-400 to-setu-400 bg-clip-text text-transparent">Explore Our Government & CSR Model</h1>
      <p className="text-2xl text-gramin-700 mb-6 font-semibold">Promote Transparent Governance & Accelerate Rural Development</p>
      <p className="text-lg text-gramin-600 mb-8 max-w-3xl">GraminSetu’s Government and CSR portal empowers public agencies and socially responsible enterprises to efficiently monitor village-level programs, foster transparency, and engage with communities in real time. Drive impactful governance and development outcomes through technology tailored for rural realities.</p>
    </section>

    {/* Features Section */}
    <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((f, i) => (
        <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
      ))}
    </section>

    {/* Pricing Section */}
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-4xl font-bold text-gramin-900 text-center mb-8">Government/CSR Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, i) => (
          <PricingAccordionCard key={i} {...plan} />
        ))}
      </div>
    </section>

    {/* Why Choose Section */}
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gramin-900 mb-6">Why Governments & CSR Teams Choose GraminSetu</h2>
      <ul className="list-disc list-inside text-gramin-700 text-lg space-y-3">
        <li>Enhanced Accountability: Transparent digital records strengthen governance and citizen trust.</li>
        <li>Efficient Resource Utilization: Real-time monitoring helps optimize fund allocation and program execution.</li>
        <li>Citizen-Centric Services: Direct engagement channels improve community responsiveness and participation.</li>
        <li>Data-Driven Insights: Actionable analytics enable evidence-based policy making and project planning.</li>
      </ul>
    </section>

    {/* User Journey Section */}
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gramin-900 mb-6">User Journey Highlights</h2>
      <ol className="list-decimal list-inside text-gramin-700 text-lg space-y-3">
        <li>Quick Onboarding: Register government/CSR agency and link relevant administrative units or schemes.</li>
        <li>Dashboard Access: Monitor multiple villages and projects with interactive mapping and reporting tools.</li>
        <li>Issue Management: Receive, assign, and track resolution of community complaints efficiently.</li>
        <li>Community Communication: Publish announcements, conduct surveys, and organize government events virtually.</li>
        <li>Integration & Reporting: Easily connect with existing systems and generate compliance reports.</li>
      </ol>
    </section>

    {/* Call to Action */}
    <section className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold text-gramin-900 mb-4">Join GraminSetu’s Government/CSR portal to promote open governance and transform the lives of rural citizens.</h2>
      <p className="text-lg text-gramin-700 mb-6">Harness the power of real-time data and citizen engagement.</p>
    </section>
  </div>
);

export default memo(GovernmentCsrBusinessModel);
