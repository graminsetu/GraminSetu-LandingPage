import React, { memo, useState } from 'react';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: '📢',
    title: 'Integrated Government Communication Hub',
    desc: 'Receive verified official announcements, policy updates, and scheme notifications directly from government sources. Our platform ensures 100% authentic information reaches every villager through multiple communication channels, eliminating misinformation and ensuring equal access to opportunities.',
    stats: '95% faster information delivery',
  },
  {
    icon: '🎯',
    title: 'Digital-First Government Service Access',
    desc: 'Streamline your interactions with government services through our comprehensive digital portal. Apply for welfare programs, track application status in real-time, and receive automated updates. Our system integrates with 50+ government databases to ensure seamless service delivery.',
    stats: '70% reduction in processing time',
  },
  {
    icon: '🛒',
    title: 'Authenticated Rural Commerce Platform',
    desc: 'Participate in a verified marketplace designed specifically for rural economies. Our platform features quality assurance, secure payment gateways, and logistics support to boost agricultural and artisan commerce. Connect directly with urban markets and government procurement programs.',
    stats: '40% increase in rural income',
  },
  {
    icon: '🤝',
    title: 'Structured Community Governance',
    desc: 'Engage in democratic decision-making through our digital panchayat system. Participate in village meetings, vote on development priorities, and collaborate on community projects. Our platform ensures transparent, inclusive governance with documented decision trails.',
    stats: '85% community participation rate',
  },
  {
    icon: '🛠️',
    title: 'Systematic Infrastructure Issue Management',
    desc: 'Report and track infrastructure concerns through our georeferenced complaint system. Each issue gets a unique tracking ID, automated escalation protocols, and priority-based resolution timelines. Premium users receive dedicated support channels and faster response guarantees.',
    stats: '60% faster issue resolution',
  },
  {
    icon: '🔍',
    title: 'Comprehensive Financial Transparency Portal',
    desc: 'Monitor all public expenditure in your village through our advanced analytics dashboard. Track fund utilization, project progress, and budget allocations with real-time updates. Our system ensures complete accountability and enables informed citizen participation in governance.',
    stats: '100% transaction transparency',
  },
];

const pricingPlans = {
  monthly: [
    {
      name: 'Community Basic',
      price: 0,
      priceLabel: 'Free Forever',
      summary:
        'Perfect for individual villagers starting their digital journey with essential community features',
      bestFor: 'Individual villagers and families',
      features: [
        '🏠 Village news & community updates (unlimited)',
        '📅 Local events & festival announcements',
        '🛒 Basic marketplace (5 product listings)',
        '📢 Civic issue reporting with tracking',
        '💬 Community messaging (50 messages/month)',
        '📱 Mobile app access with offline features',
        '🆔 Digital village identity verification',
        '📋 Government scheme notifications',
      ],
      highlight: false,
      offer: 'Always Free • No Credit Card Required • Join 10,000+ villagers',
    },
    {
      name: 'Village Pro',
      price: 29,
      priceLabel: '₹29/month',
      summary:
        'Enhanced features for active community members, small business owners, and village entrepreneurs',
      bestFor: 'Active villagers, shop owners, local businesses',
      features: [
        '✨ All Community Basic features (unlimited)',
        '🚀 Unlimited marketplace listings with photos',
        '📊 Business analytics & sales tracking',
        '⚡ Priority issue resolution (24-48 hours)',
        '💬 Unlimited messaging, groups & announcements',
        '🎯 Targeted local advertising & promotions',
        '📞 Priority phone & WhatsApp support',
        '💰 Advanced payment gateway integration',
        '📈 Monthly business growth reports',
      ],
      highlight: true,
      offer: '7-Day Free Trial • Cancel Anytime • 50% off first month for early adopters',
    },
    {
      name: 'Community Leader',
      price: 99,
      priceLabel: '₹99/month',
      summary:
        'Complete solution for village organizations, leaders, and institutions managing community initiatives',
      bestFor: 'SHGs, Panchayats, cooperatives, village committees',
      features: [
        '🌟 All Village Pro features (unlimited access)',
        '👥 Multi-user management (up to 25 members)',
        '📈 Advanced community analytics & insights',
        '📧 Bulk messaging & campaign management',
        '🏆 Event planning & management tools',
        '💼 Financial tracking & expense reports',
        '🎓 Free monthly training & skill sessions',
        '📋 Custom forms & survey creation',
        '🤝 Partnership & collaboration tools',
        '📊 Village development progress tracking',
      ],
      highlight: false,
      offer: 'Free Setup • Dedicated Support • 30-Day Money-Back Guarantee',
    },
  ],
  quarterly: [
    {
      name: 'Community Basic',
      price: 0,
      priceLabel: 'Free Forever',
      summary:
        'Perfect for individual villagers starting their digital journey with essential community features',
      bestFor: 'Individual villagers and families',
      features: [
        '🏠 Village news & community updates (unlimited)',
        '📅 Local events & festival announcements',
        '🛒 Basic marketplace (5 product listings)',
        '📢 Civic issue reporting with tracking',
        '💬 Community messaging (50 messages/month)',
        '📱 Mobile app access with offline features',
        '🆔 Digital village identity verification',
        '📋 Government scheme notifications',
      ],
      highlight: false,
      offer: 'Always Free • No Credit Card Required • Join 10,000+ villagers',
    },
    {
      name: 'Village Pro',
      price: 75,
      priceLabel: '₹75/quarter',
      summary:
        'Enhanced features for active community members, small business owners, and village entrepreneurs',
      bestFor: 'Active villagers, shop owners, local businesses',
      features: [
        '✨ All Community Basic features (unlimited)',
        '🚀 Unlimited marketplace listings with photos',
        '📊 Business analytics & sales tracking',
        '⚡ Priority issue resolution (24-48 hours)',
        '💬 Unlimited messaging, groups & announcements',
        '🎯 Targeted local advertising & promotions',
        '📞 Priority phone & WhatsApp support',
        '💰 Advanced payment gateway integration',
        '📈 Quarterly business growth reports',
      ],
      highlight: true,
      offer: 'Save ₹12 (14% Off) • Free Business Consultation • Priority Support',
    },
    {
      name: 'Community Leader',
      price: 267,
      priceLabel: '₹267/quarter',
      summary:
        'Complete solution for village organizations, leaders, and institutions managing community initiatives',
      bestFor: 'SHGs, Panchayats, cooperatives, village committees',
      features: [
        '🌟 All Village Pro features (unlimited access)',
        '👥 Multi-user management (up to 25 members)',
        '📈 Advanced community analytics & insights',
        '📧 Bulk messaging & campaign management',
        '🏆 Event planning & management tools',
        '💼 Financial tracking & expense reports',
        '🎓 Free quarterly training & skill sessions',
        '📋 Custom forms & survey creation',
        '🤝 Partnership & collaboration tools',
        '📊 Village development progress tracking',
      ],
      highlight: false,
      offer: 'Save ₹30 (10% Off) • Free Onboarding • Dedicated Account Manager',
    },
  ],
  yearly: [
    {
      name: 'Community Basic',
      price: 0,
      priceLabel: 'Free Forever',
      summary:
        'Perfect for individual villagers starting their digital journey with essential community features',
      bestFor: 'Individual villagers and families',
      features: [
        '🏠 Village news & community updates (unlimited)',
        '📅 Local events & festival announcements',
        '🛒 Basic marketplace (5 product listings)',
        '📢 Civic issue reporting with tracking',
        '💬 Community messaging (50 messages/month)',
        '📱 Mobile app access with offline features',
        '🆔 Digital village identity verification',
        '📋 Government scheme notifications',
      ],
      highlight: false,
      offer: 'Always Free • No Credit Card Required • Join 10,000+ villagers',
    },
    {
      name: 'Village Pro',
      price: 249,
      priceLabel: '₹249/year',
      summary:
        'Enhanced features for active community members, small business owners, and village entrepreneurs',
      bestFor: 'Active villagers, shop owners, local businesses',
      features: [
        '✨ All Community Basic features (unlimited)',
        '🚀 Unlimited marketplace listings with photos',
        '📊 Business analytics & sales tracking',
        '⚡ Priority issue resolution (24-48 hours)',
        '💬 Unlimited messaging, groups & announcements',
        '🎯 Targeted local advertising & promotions',
        '📞 Priority phone & WhatsApp support',
        '💰 Advanced payment gateway integration',
        '📈 Annual business growth reports & insights',
        '🎁 Exclusive annual member benefits',
      ],
      highlight: true,
      offer: 'Save ₹99 (28% Off) • Free Business Setup • Annual Success Review',
    },
    {
      name: 'Community Leader',
      price: 899,
      priceLabel: '₹899/year',
      summary:
        'Complete solution for village organizations, leaders, and institutions managing community initiatives',
      bestFor: 'SHGs, Panchayats, cooperatives, village committees',
      features: [
        '🌟 All Village Pro features (unlimited access)',
        '👥 Multi-user management (up to 25 members)',
        '📈 Advanced community analytics & insights',
        '📧 Bulk messaging & campaign management',
        '🏆 Event planning & management tools',
        '💼 Financial tracking & expense reports',
        '🎓 Free monthly training & skill sessions',
        '📋 Custom forms & survey creation',
        '🤝 Partnership & collaboration tools',
        '📊 Village development progress tracking',
        '🏅 Annual leadership certification',
        '💎 Priority access to new features',
      ],
      highlight: false,
      offer: 'Save ₹289 (24% Off) • Annual Strategy Session • VIP Support Channel',
    },
  ],
};

const whyUpgrade = [
  'Priority Issue Handling: Enjoy expedited support and faster resolution of civic problems reported via the portal.',
  'Enhanced Marketplace: Gain better visibility for your products and services with premium listing features.',
  'Advanced Analytics: Access detailed insights about community engagement and your personal usage patterns.',
  'Exclusive Content: Get early access to government announcements, training materials, and special programs.',
  'Dedicated Support: Receive personalized assistance from our community support team.',
];

const userJourney = [
  'Easy Registration: Sign up quickly and select your village to access the portal.',
  'Explore Features: Browse through various features like marketplace, news, events, and community forums.',
  'Engage with Community: Start participating in discussions, report issues, or list products in the marketplace.',
  'Upgrade When Ready: Consider upgrading to Premium for enhanced features and priority support.',
];

const planLabels = {
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  yearly: 'Annual',
};

const VillageBusinessModel = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Perfect UX */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gramin-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gramin-100 rounded-full">
              <span className="text-sm font-semibold text-gramin-700 uppercase tracking-wide">
                🚀 Beta Launch - Early Access Program
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gramin-600">Village Digital Transformation Platform</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                India's Emerging Rural Digitization Solution — Innovative • Secure • Future-Ready
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <strong>
                Developing in partnership with rural communities and technology experts
              </strong>
              , our comprehensive digital platform is designed to transform rural governance,
              commerce, and community engagement. With focus on security, accessibility, and real
              impact, we're building the foundation for Digital India at the grassroots level.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              📊 Advanced Digital Village Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital infrastructure designed specifically for rural transformation
              and sustainable development
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              🌟 Trusted by 1000+ Villages Across India
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                stats={feature.stats}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Modern Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your village community
            </p>
          </div>

          {/* Plan Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              {Object.keys(planLabels).map((key) => (
                <button
                  key={key}
                  className={`px-6 py-3 text-sm font-semibold rounded-md transition-all ${
                    selectedPlan === key
                      ? 'bg-gramin-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => setSelectedPlan(key)}
                >
                  {planLabels[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans[selectedPlan].map((plan, index) => (
              <PricingCard key={index} {...plan} planType={selectedPlan} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gramin-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Premium?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unlock advanced features and priority support for your village community
                </p>
              </div>

              <ul className="space-y-6">
                {whyUpgrade.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gramin-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                        <path
                          d="M10 3L4.5 8.5 2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Started is Simple</h3>
              </div>

              <div className="space-y-6">
                {userJourney.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gramin-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gramin-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-gramin-700 to-gramin-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join India's Digital Village Movement? 🚀
          </h2>
          <p className="text-xl text-gramin-100 mb-8 max-w-2xl mx-auto">
            Be part of the <strong>next generation</strong> of digitally empowered villages. Help us
            build and test the future of rural India.
          </p>

          {/* Development status */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gramin-100">
            <div className="flex items-center gap-2">
              🔬 <span className="text-sm">Beta Testing</span>
            </div>
            <div className="flex items-center gap-2">
              🛡️ <span className="text-sm">Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              � <span className="text-sm">Community Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gramin-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              🌱 Join Beta Program
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gramin-600 transition-all duration-200">
              � Schedule Discussion
            </button>
          </div>

          <p className="text-sm text-gramin-200 mt-4">
            ✨ Early access • Free during beta • Community-driven development
          </p>
        </div>
      </section>
    </div>
  );
};

function Feature({ icon, title, desc, stats }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gramin-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gramin-700 transition-colors">
                {title}
              </h3>
              {stats && (
                <div className="inline-flex items-center px-3 py-1 bg-gramin-100 text-gramin-700 text-xs font-semibold rounded-full mb-3">
                  📈 {stats}
                </div>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>

            {/* Call to action */}
            <div className="pt-2">
              <span className="text-gramin-600 text-sm font-medium group-hover:text-gramin-700 transition-colors cursor-pointer">
                Learn more →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, features, price, priceLabel, highlight, offer, bestFor, summary }) {
  const icons = {
    'Community Basic': '�',
    'Village Pro': '🚀',
    'Community Leader': '👑',
    // Legacy names for backward compatibility
    Basic: '🏡',
    'Premium Individual': '🚀',
    'Premium Group': '�',
  };

  const colors = highlight
    ? {
        bg: 'bg-gradient-to-br from-gramin-600 to-gramin-700',
        text: 'text-white',
        border: 'border-gramin-600',
        cardShadow: 'shadow-2xl shadow-gramin-200',
      }
    : {
        bg: 'bg-white',
        text: 'text-gray-900',
        border: 'border-gray-200',
        cardShadow: 'shadow-lg hover:shadow-xl',
      };

  return (
    <div
      className={`relative rounded-2xl border-2 transition-all duration-300 ${colors.border} ${colors.bg} ${colors.cardShadow} p-8 ${highlight ? 'scale-105 ring-4 ring-gramin-200' : 'hover:scale-102'} group`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-gramin-500 to-gramin-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Popular Badge for Free Plan */}
      {name.includes('Basic') && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            🎯 Best Start
          </span>
        </div>
      )}

      <div className="text-center space-y-6">
        <div
          className={`text-5xl group-hover:scale-110 transition-transform duration-300 ${highlight ? 'drop-shadow-lg' : ''}`}
        >
          {icons[name] || '🏠'}
        </div>
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'text-white' : 'text-gray-900'}`}>
            {name}
          </h3>
          <p className={`text-sm font-medium ${highlight ? 'text-gramin-100' : 'text-gray-600'}`}>
            {bestFor}
          </p>
        </div>
        <div className="space-y-3">
          <div className={`text-4xl font-bold ${highlight ? 'text-white' : 'text-gramin-600'}`}>
            {priceLabel}
          </div>
          {price > 0 && (
            <div className={`text-sm ${highlight ? 'text-gramin-200' : 'text-gray-500'}`}>
              {price === 29 && '≈ ₹1/day'}
              {price === 75 && '≈ ₹0.83/day'}
              {price === 99 && '≈ ₹3.3/day'}
              {price === 249 && '≈ ₹0.68/day'}
              {price === 267 && '≈ ₹2.97/day'}
              {price === 899 && '≈ ₹2.46/day'}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <p className={`text-sm leading-relaxed ${highlight ? 'text-gramin-100' : 'text-gray-600'}`}>
          {summary}
        </p>

        <div className="space-y-4">
          <h4
            className={`font-semibold text-sm uppercase tracking-wide ${highlight ? 'text-gramin-200' : 'text-gray-700'}`}
          >
            ✨ Features Included:
          </h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-3 text-sm leading-relaxed ${highlight ? 'text-gramin-100' : 'text-gray-600'}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${highlight ? 'bg-gramin-500' : 'bg-gramin-100'}`}
                >
                  <svg
                    className={`w-3 h-3 ${highlight ? 'text-white' : 'text-gramin-600'}`}
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {offer && (
          <div
            className={`p-4 rounded-xl border-2 border-dashed ${highlight ? 'bg-gramin-800 border-gramin-400' : 'bg-gramin-50 border-gramin-300'}`}
          >
            <p
              className={`text-sm font-bold text-center ${highlight ? 'text-gramin-100' : 'text-gramin-700'}`}
            >
              🎁 {offer}
            </p>
          </div>
        )}
      </div>

      <button
        className={`w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
          highlight
            ? 'bg-white text-gramin-600 hover:bg-gray-50 shadow-lg'
            : 'bg-gradient-to-r from-gramin-600 to-gramin-700 text-white hover:from-gramin-700 hover:to-gramin-800 shadow-lg hover:shadow-xl'
        }`}
      >
        {price === 0 ? '🚀 Get Started Free' : `💼 Choose ${name}`}
      </button>
    </div>
  );
}

export default memo(VillageBusinessModel);
