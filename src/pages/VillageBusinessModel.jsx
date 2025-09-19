import React from "react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic Free",
    features: [
      "Access to village news, community feed, events",
      "Marketplace (standard listings)",
      "Issue reporting"
    ],
    price: "₹0",
    quarterly: "₹0",
    offer: "N/A",
    highlight: false
  },
  {
    name: "Premium Plus",
    features: [
      "All Basic features",
      "Featured marketplace listings",
      "Priority issue resolution",
      "Exclusive event invites",
      "Customized alerts",
      "Social credibility badges"
    ],
    price: "₹99/month",
    quarterly: "₹270 (3 months)",
    offer: "₹199 for first 3 months",
    highlight: true
  },
  {
    name: "Ultimate Village",
    features: [
      "Complete access including personalized dashboard",
      "Job & training listings",
      "VIP event registrations",
      "Premium support and more"
    ],
    price: "₹149/month",
    quarterly: "₹400 (3 months)",
    offer: "₹299 for first 3 months",
    highlight: false
  }
];

const features = [
  {
    icon: "📢",
    title: "Real-Time Village Updates",
    desc: "Timely announcements, government scheme notifications, local news, and event invitations."
  },
  {
    icon: "🎯",
    title: "Effortless Access to Government Benefits",
    desc: "Apply for welfare schemes, subsidies, and support programs directly via the portal."
  },
  {
    icon: "🛒",
    title: "Digital Marketplace for Local Trade",
    desc: "Buy, sell, and exchange goods and services within your village and neighboring areas."
  },
  {
    icon: "🤝",
    title: "Community Engagement & Collaboration",
    desc: "Connect with fellow villagers via feeds, forums, events, and group messaging."
  },
  {
    icon: "🛠️",
    title: "Civic Issue Reporting & Resolution",
    desc: "Report infrastructure or utility issues and enjoy faster response times."
  },
  {
    icon: "🔍",
    title: "Transparent Governance & Participation",
    desc: "Access village plans, budgets, and participate in virtual meetings."
  }
];

const VillageBusinessModel = () => (
  <div className="bg-gramin-50 min-h-screen pb-12">
    {/* Breadcrumbs */}
    <nav className="bg-white py-3 px-4 text-sm sticky top-0 z-10 border-b border-gramin-200">
      <ol className="flex space-x-2 text-gramin-600">
        <li><Link to="/">Home</Link></li>
        <li>&gt;</li>
        <li><Link to="/explore">Explore Business Models</Link></li>
        <li>&gt;</li>
        <li className="text-gramin-900 font-semibold">Village</li>
      </ol>
    </nav>

    {/* Hero Section */}
    <section className="max-w-5xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-4">Explore Our Village Business Model</h1>
      <p className="text-xl text-gramin-700 mb-6">Empower Your Village Digitally — Connect, Grow, Thrive</p>
      <p className="text-lg text-gramin-600 mb-8">GraminSetu bridges the digital divide by creating an integrated village ecosystem where every resident enjoys seamless access to information, commerce, community engagement, and governance transparency. Our platform empowers villagers to take charge of their development and livelihood, unlocking opportunities for sustainable growth.</p>
    </section>

    {/* Empowered Village Image Section */}
    <section className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-md border border-gramin-100 p-4 flex items-center justify-center">
        <img src={require('../assets/business-models/village-before-after.png')} alt="GraminSetu: The Empowered Village" className="w-full max-w-2xl rounded-lg" />
      </div>
    </section>

    {/* Features Section */}
    <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((f, i) => (
        <div key={i} className="flex items-start space-x-4 bg-white rounded-lg shadow p-5 border border-gramin-100">
          <span className="text-3xl md:text-4xl">{f.icon}</span>
          <div>
            <h3 className="font-semibold text-gramin-900 text-lg mb-1">{f.title}</h3>
            <p className="text-gramin-700 text-base">{f.desc}</p>
          </div>
        </div>
      ))}
    </section>

    {/* Pricing Section */}
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gramin-900 text-center mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <div key={i} className={`rounded-xl shadow-lg border-2 ${plan.highlight ? 'border-gramin-600 bg-gramin-50' : 'border-gramin-200 bg-white'} p-6 flex flex-col items-center`}>
            <h3 className="text-xl font-bold mb-2 text-gramin-900">{plan.name}</h3>
            <ul className="mb-4 text-gramin-700 text-base list-disc list-inside">
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <div className="text-2xl font-bold text-gramin-600 mb-1">{plan.price}</div>
            <div className="text-sm text-gramin-500 mb-2">Quarterly: {plan.quarterly}</div>
            {plan.offer !== "N/A" && <div className="bg-gramin-200 text-gramin-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">Early Bird: {plan.offer}</div>}
            {plan.highlight && <div className="text-xs text-gramin-600 font-semibold mb-2">Most Popular</div>}
            <button className="mt-auto px-6 py-2 rounded-full bg-gramin-600 text-white font-semibold shadow hover:bg-gramin-700 transition-colors">Start Free</button>
          </div>
        ))}
      </div>
    </section>

    {/* Why Upgrade Section */}
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">Why Upgrade to Premium?</h2>
      <ul className="list-disc list-inside text-gramin-700 text-base space-y-2">
        <li>Enhance your marketplace visibility with featured listings to drive quicker sales and better prices.</li>
        <li>Receive priority support for your reported issues, ensuring faster resolution.</li>
        <li>Get exclusive access to workshops, government schemes, and village events designed to improve skills and livelihoods.</li>
        <li>Earn recognition within your community through premium badges that build trust and social standing.</li>
        <li>Enjoy personalized alerts tailored to your needs and interests.</li>
      </ul>
    </section>

    {/* User Journey Section */}
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">User Journey Highlights</h2>
      <ol className="list-decimal list-inside text-gramin-700 text-base space-y-2">
        <li><b>Simple Onboarding:</b> Register and select your village effortlessly.</li>
        <li><b>Explore Features:</b> Access free tools and discover premium benefits through contextual prompts and tutorials.</li>
        <li><b>Seamless Upgrading:</b> Upgrade anytime with supported payment methods including UPI and mobile wallets.</li>
        <li><b>Ongoing Support:</b> Dedicated help desks and community ambassadors guide you at every step.</li>
      </ol>
    </section>

    {/* Call to Action */}
    <section className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">Join thousands of villagers already benefiting from GraminSetu’s digital transformation.</h2>
      <p className="text-lg text-gramin-700 mb-6">Start for free today or upgrade to premium plans to unlock your village’s full potential.</p>
      <Link to="/explore" className="inline-block px-6 py-2 rounded-full bg-gramin-600 text-white font-semibold shadow hover:bg-gramin-700 transition-colors">Back to Explore Business Models</Link>
    </section>
  </div>
);

export default VillageBusinessModel;
