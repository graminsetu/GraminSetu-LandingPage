import React, { memo, useState } from 'react';

const features = [
  {
    icon: '📢',
    title: 'Real-Time Village Updates',
    desc: 'Stay connected with instant access to official announcements, government schemes, community news, and local events. This keeps every villager informed about opportunities and happenings within their own community.',
  },
  {
    icon: '🎯',
    title: 'Simplified Access to Government Benefits',
    desc: 'Apply for government welfare programs, subsidies, and support initiatives directly through a user-friendly digital interface. Track your application progress with complete transparency and avoid unnecessary paperwork.',
  },
  {
    icon: '🛒',
    title: 'Vibrant Digital Marketplace',
    desc: 'Encourage local commerce by enabling villagers to buy, sell, or exchange goods and services within a trusted marketplace built especially for their community. This not only boosts livelihoods but strengthens the local economy.',
  },
  {
    icon: '🤝',
    title: 'Dynamic Community Engagement',
    desc: 'Participate actively in community forums, discussion groups, and event planning. Messaging features enable seamless communication among villagers, strengthening social bonds.',
  },
  {
    icon: '🛠️',
    title: 'Efficient Civic Issue Reporting',
    desc: 'Report infrastructure issues, including water supply interruptions, sanitation concerns, and road repairs, with a simple, guided process. Receive prioritized support and quicker response times, especially as a premium user.',
  },
  {
    icon: '🔍',
    title: 'Transparent Village Governance',
    desc: 'Access detailed village development plans, budgets, project updates, and governance decisions. Engage in village meetings virtually and contribute effectively to your community’s growth with full transparency.',
  },
];

const pricingPlans = {
  monthly: [
    {
      name: 'Basic (Free)',
      features: [
        'Access to village news, community feed, events calendar, marketplace (standard listings), issue reporting, donation portal, and messaging.',
      ],
      price: 0,
      offer: 'Always Free',
      highlight: false,
    },
    {
      name: 'Premium Plus',
      features: [
        'All Basic features',
        'Featured marketplace listings',
        'Priority issue resolution',
        'Exclusive event invitations',
        'Personalized alerts',
        'Community recognition badges',
      ],
      price: 99,
      offer: '₹99/month',
      highlight: true,
    },
    {
      name: 'Ultimate Access',
      features: [
        'All Premium Plus features',
        'Personalized dashboards',
        'Job & skill training alerts',
        'VIP event registrations',
        'Premium customer support',
        'Advanced marketplace analytics',
      ],
      price: 149,
      offer: '₹149/month',
      highlight: false,
    },
  ],
  quarterly: [
    {
      name: 'Basic (Free)',
      features: [
        'Access to village news, community feed, events calendar, marketplace (standard listings), issue reporting, donation portal, and messaging.',
      ],
      price: 0,
      offer: 'Always Free',
      highlight: false,
    },
    {
      name: 'Premium Plus',
      features: [
        'All Basic features',
        'Featured marketplace listings',
        'Priority issue resolution',
        'Exclusive event invitations',
        'Personalized alerts',
        'Community recognition badges',
      ],
      price: 360,
      offer: '₹299 for 4 months',
      highlight: true,
    },
    {
      name: 'Ultimate Access',
      features: [
        'All Premium Plus features',
        'Personalized dashboards',
        'Job & skill training alerts',
        'VIP event registrations',
        'Premium customer support',
        'Advanced marketplace analytics',
      ],
      price: 520,
      offer: '₹399 for 4 months',
      highlight: false,
    },
  ],
  yearly: [
    {
      name: 'Basic (Free)',
      features: [
        'Access to village news, community feed, events calendar, marketplace (standard listings), issue reporting, donation portal, and messaging.',
      ],
      price: 0,
      offer: 'Always Free',
      highlight: false,
    },
    {
      name: 'Premium Plus',
      features: [
        'All Basic features',
        'Featured marketplace listings',
        'Priority issue resolution',
        'Exclusive event invitations',
        'Personalized alerts',
        'Community recognition badges',
      ],
      price: 999,
      offer: 'Save 15% (₹999/year)',
      highlight: true,
    },
    {
      name: 'Ultimate Access',
      features: [
        'All Premium Plus features',
        'Personalized dashboards',
        'Job & skill training alerts',
        'VIP event registrations',
        'Premium customer support',
        'Advanced marketplace analytics',
      ],
      price: 1499,
      offer: 'Save 15% (₹1499/year)',
      highlight: false,
    },
  ],
};

const whyUpgrade = [
  'Maximize Marketplace Success: Showcase your products with premium listings highlighted to attract more buyers and increase sales speed.',
  'Priority Issue Handling: Enjoy expedited support and faster resolution of civic problems reported via the portal.',
  'Exclusive Access to Development Events: Participate early in government schemes, skill development sessions, and community workshops.',
  'Social Recognition: Build trust and reputation within your village using premium status badges visible to the community.',
  'Tailored Notifications: Receive customized alerts for events, government schemes, marketplace activities, and social initiatives that matter most to you.',
];

const userJourney = [
  'Easy Registration: Sign up quickly and select your village to access the portal.',
  'Accessible on Any Device: Mobile-first design ensures smooth navigation on smartphones, even with limited internet.',
  'Transparent Subscription Management: Upgrade, renew, or cancel premium plans effortlessly via multiple payment options including UPI, Paytm, and other popular wallets.',
  'Continuous Support: Get help from local community ambassadors, in-app assistance, and responsive customer support teams.',
];

const planLabels = {
  monthly: 'Monthly',
  quarterly: 'Quarterly (4 Months)',
  yearly: 'Yearly (12 Months)',
};

const VillageBusinessModel = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  return (
    <div className="bg-gradient-to-br from-gramin-50 via-white to-setu-50 min-h-screen pb-12">
      {/* Breadcrumbs */}
      <nav className="w-full sticky top-0 z-20 border-b border-gramin-200 shadow-sm backdrop-blur bg-white/80">
        <div className="max-w-5xl mx-auto flex items-center py-4 px-4">
          <button
            onClick={() => (window.location.href = '/')}
            className="flex items-center text-gramin-600 hover:text-gramin-800 font-semibold text-base px-2 py-1 rounded transition-colors focus:outline-none"
            aria-label="Back to Home"
          >
            <span className="mr-2 text-xl">&#8592;</span> Home
          </button>
          <span className="mx-2 text-gramin-400">/</span>
          <span className="text-gramin-900 font-bold text-base">Village Business Model</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-14 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gramin-900 mb-4 leading-tight tracking-tight drop-shadow-lg bg-gradient-to-r from-gramin-600 via-gramin-400 to-setu-400 bg-clip-text text-transparent">
          Explore Our Village Business Model
        </h1>
        <p className="text-2xl text-gramin-700 mb-6 font-semibold">
          Empower Your Village Digitally — Connect, Grow, Thrive
        </p>
        <p className="text-lg text-gramin-600 mb-8 max-w-3xl">
          At GraminSetu, we are dedicated to transforming rural communities through technology,
          fostering economic growth, enhancing governance transparency, and building strong local
          connections. Our Village Business Model is designed to empower villagers by providing an
          integrated platform that bridges information gaps, facilitates commerce, and promotes
          community engagement—all from the convenience of their smartphones.
        </p>
        <div className="w-full flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gramin-100 bg-white">
            <img
              src={require('../assets/Before-and-after-images/village-b-f.png')}
              alt="GraminSetu: The Empowered Village"
              className="mx-auto w-full max-w-2xl object-cover"
              style={{ minHeight: 250, maxHeight: 640 }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-4xl font-bold text-gramin-900 text-center mb-8">
          Flexible Pricing Plans for Every Need
        </h2>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full shadow bg-white border border-gramin-200 overflow-hidden">
            {Object.keys(planLabels).map((key) => (
              <button
                key={key}
                className={`px-6 py-2 text-base font-semibold transition-colors focus:outline-none ${selectedPlan === key ? 'bg-gramin-600 text-white' : 'text-gramin-700 hover:bg-gramin-100'}`}
                onClick={() => setSelectedPlan(key)}
                aria-pressed={selectedPlan === key}
              >
                {planLabels[key]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans[selectedPlan].map((plan, i) => (
            <PricingCard key={i} {...plan} planType={selectedPlan} />
          ))}
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gramin-900 mb-6">Why Upgrade to Premium?</h2>
        <ul className="list-disc list-inside text-gramin-700 text-lg space-y-3">
          {whyUpgrade.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* User Journey Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gramin-900 mb-6">Seamless User Experience</h2>
        <ol className="list-decimal list-inside text-gramin-700 text-lg space-y-3">
          {userJourney.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-gramin-900 mb-4">
          Be part of the digital transformation shaping the future of rural India.
        </h2>
        <p className="text-lg text-gramin-700 mb-6">
          Start with our free offerings or take advantage of premium benefits to unlock the full
          potential of your village. Together, let's create a thriving, connected, and empowered
          community.
        </p>
      </section>
    </div>
  );
};

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-5 bg-white rounded-xl shadow-md p-6 border border-gramin-100 hover:shadow-lg transition-all group">
      <span className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-gramin-900 text-xl mb-2">{title}</h3>
        <p className="text-gramin-700 text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ name, features, price, offer, highlight, planType }) {
  // Add icons for each plan
  const icons = {
    'Basic (Free)': '🌱',
    'Premium Plus': '🚀',
    'Ultimate Access': '👑',
  };
  const colors = highlight
    ? 'border-gramin-600 bg-gradient-to-br from-gramin-100 to-white scale-105 shadow-2xl'
    : 'border-gramin-200 bg-white shadow-lg';
  return (
    <div
      className={`rounded-3xl border-2 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${colors}`}
      style={{ minHeight: 440 }}
    >
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gramin-600 to-gramin-400 text-white px-5 py-1 rounded-full text-xs font-bold shadow-lg tracking-wide z-10 border-2 border-white">
          Most Popular
        </div>
      )}
      <div className="text-5xl mb-2">{icons[name]}</div>
      <h3 className="text-2xl font-extrabold mb-2 text-gramin-900 tracking-tight text-center drop-shadow-sm">
        {name}
      </h3>
      <div className="w-full flex-1 flex flex-col justify-center">
        <ul className="mb-6 text-gramin-700 text-base list-disc list-inside text-left w-full space-y-2">
          {features.map((f, j) => (
            <li key={j} className="pl-1 leading-relaxed">
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-4xl font-extrabold text-gramin-600 mb-1 flex items-end">
        {price === 0 ? (
          <span>Free</span>
        ) : (
          <>
            <span className="text-2xl align-super">₹</span>
            {price}
          </>
        )}
        <span className="text-base font-medium text-gramin-500 ml-1">
          {planType === 'monthly' ? '/mo' : planType === 'quarterly' ? '/4mo' : '/yr'}
        </span>
      </div>
      <div className="text-xs text-gramin-500 mb-3 font-semibold tracking-wide uppercase">
        {offer}
      </div>
      <button
        className={`mt-auto px-8 py-2 rounded-full font-bold shadow text-lg transition-all duration-200 ${
          highlight
            ? 'bg-gradient-to-r from-gramin-600 to-gramin-400 text-white hover:from-gramin-700 hover:to-gramin-500'
            : 'bg-gramin-100 text-gramin-700 hover:bg-gramin-200'
        }`}
      >
        {price === 0 ? 'Start Free' : 'Get Started'}
      </button>
    </div>
  );
}

export default memo(VillageBusinessModel);
