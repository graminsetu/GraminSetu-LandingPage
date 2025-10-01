import React, { memo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const features = [
  {
    icon: '💰',
    title: 'Advanced Fundraising & Donor Relationship Management',
    desc: 'Deploy sophisticated fundraising strategies with AI-powered donor analytics, automated campaign optimization, and integrated payment processing. Our platform supports multiple currencies, recurring donations, and compliance with international fundraising regulations including FCRA and tax exemption protocols.',
    certification: 'FCRA Compliant',
    stats: '300% increase in donor retention',
  },
  {
    icon: '📊',
    title: 'Scientific Impact Measurement & ESG Reporting',
    desc: 'Implement evidence-based impact measurement frameworks aligned with UN SDGs and GRI standards. Our platform provides real-time beneficiary tracking, outcome evaluation, and automated ESG reporting for corporate partners and international donors.',
    certification: 'UN SDG Aligned',
    stats: 'ISO 14064 Verified Impact',
  },
  {
    icon: '🎯',
    title: 'Strategic Campaign & Advocacy Management',
    desc: 'Execute data-driven advocacy campaigns with targeted messaging, multi-channel distribution, and performance analytics. Our platform includes media monitoring, influencer engagement tools, and regulatory compliance tracking for policy advocacy initiatives.',
    certification: 'Media Monitoring Certified',
    stats: '85% campaign success rate',
  },
  {
    icon: '🤝',
    title: 'Comprehensive Stakeholder Ecosystem',
    desc: 'Manage complex stakeholder relationships through our integrated CRM system featuring donor portals, volunteer management, beneficiary tracking, and corporate partnership modules. Includes automated reporting and stakeholder communication workflows.',
    certification: 'CRM Excellence Award',
    stats: '95% stakeholder satisfaction',
  },
  {
    icon: '📈',
    title: 'Social Enterprise Acceleration & Networking',
    desc: 'Access exclusive business development opportunities through our curated network of impact investors, corporate partners, and government agencies. Includes pitch deck builder, due diligence support, and growth mentorship programs.',
    certification: 'Impact Investor Network',
    stats: '₹50Cr+ funding facilitated',
  },
  {
    icon: '🔧',
    title: 'Enterprise Integration & Automation Suite',
    desc: 'Seamlessly connect with 200+ business applications including Salesforce, Tally, Zoho, and international platforms like GlobalGiving and Network for Good. Our API ecosystem ensures automated data synchronization and workflow optimization.',
    certification: 'API Excellence Partner',
    stats: '200+ seamless integrations',
  },
];

const pricingPlans = {
  monthly: [
    {
      name: 'Community Starter',
      icon: '�',
      price: 0,
      priceLabel: 'Free Forever',
      summary: 'Perfect for new NGOs and grassroots organizations starting their impact journey',
      who: 'New NGOs, community groups, volunteers',
      details: [
        '💚 Create & manage 3 active campaigns',
        '📊 Basic impact tracking dashboard',
        '💬 Community messaging (100 messages/month)',
        '💰 Simple donation collection tools',
        '📱 Mobile-friendly volunteer portal',
        '📧 Email support & resource library',
      ],
      highlight: false,
      cta: 'Start Your Impact Journey',
    },
    {
      name: 'Impact Accelerator',
      icon: '🚀',
      price: 199,
      priceLabel: '₹199/month',
      summary: 'Enhanced tools for growing NGOs ready to scale their social impact',
      who: 'Growing NGOs, social enterprises',
      details: [
        '✨ All Community Starter features',
        '🎯 Unlimited campaigns & projects',
        '📈 Advanced impact analytics & reports',
        '💬 Unlimited messaging & donor engagement',
        '🎨 Professional campaign templates',
        '🔗 Basic integrations (payment gateways)',
        '📞 Priority phone & email support',
      ],
      highlight: true,
      cta: 'Accelerate Your Impact',
    },
    {
      name: 'Social Enterprise',
      icon: '🌟',
      price: 499,
      priceLabel: '₹499/month',
      summary:
        'Comprehensive platform for established organizations with multi-location operations',
      who: 'Large NGOs, social enterprises, foundations',
      details: [
        '🌟 All Impact Accelerator features',
        '👥 Multi-team management (up to 50 users)',
        '🏢 Multi-location project management',
        '⚙️ Custom integrations & API access',
        '📊 White-label reporting & branding',
        '👨‍💼 Dedicated success manager',
        '🎓 Training & capacity building sessions',
      ],
      highlight: false,
      cta: 'Scale Your Organization',
    },
  ],
  quarterly: [
    {
      name: 'Community Starter',
      icon: '�',
      price: 0,
      priceLabel: 'Free Forever',
      summary: 'Perfect for new NGOs and grassroots organizations starting their impact journey',
      who: 'New NGOs, community groups, volunteers',
      details: [
        '💚 Create & manage 3 active campaigns',
        '📊 Basic impact tracking dashboard',
        '💬 Community messaging (100 messages/month)',
        '💰 Simple donation collection tools',
        '📱 Mobile-friendly volunteer portal',
        '📧 Email support & resource library',
      ],
      highlight: false,
      cta: 'Start Your Impact Journey',
    },
    {
      name: 'Impact Accelerator',
      icon: '🚀',
      price: 537,
      priceLabel: '₹537/quarter',
      summary: 'Enhanced tools for growing NGOs ready to scale their social impact',
      who: 'Growing NGOs, social enterprises',
      details: [
        '✨ All Community Starter features',
        '🎯 Unlimited campaigns & projects',
        '📈 Advanced impact analytics & reports',
        '💬 Unlimited messaging & donor engagement',
        '🎨 Professional campaign templates',
        '🔗 Basic integrations (payment gateways)',
        '📞 Priority phone & email support',
      ],
      highlight: true,
      cta: 'Save ₹60 • 10% off monthly',
    },
    {
      name: 'Social Enterprise',
      icon: '🌟',
      price: 1347,
      priceLabel: '₹1,347/quarter',
      summary:
        'Comprehensive platform for established organizations with multi-location operations',
      who: 'Large NGOs, social enterprises, foundations',
      details: [
        '🌟 All Impact Accelerator features',
        '👥 Multi-team management (up to 50 users)',
        '🏢 Multi-location project management',
        '⚙️ Custom integrations & API access',
        '📊 White-label reporting & branding',
        '👨‍💼 Dedicated success manager',
        '🎓 Training & capacity building sessions',
      ],
      highlight: false,
      cta: 'Save ₹150 • 10% off + training',
    },
  ],
  yearly: [
    {
      name: 'Community Starter',
      icon: '�',
      price: 0,
      priceLabel: 'Free Forever',
      summary: 'Perfect for new NGOs and grassroots organizations starting their impact journey',
      who: 'New NGOs, community groups, volunteers',
      details: [
        '💚 Create & manage 3 active campaigns',
        '📊 Basic impact tracking dashboard',
        '💬 Community messaging (100 messages/month)',
        '💰 Simple donation collection tools',
        '📱 Mobile-friendly volunteer portal',
        '📧 Email support & resource library',
      ],
      highlight: false,
      cta: 'Start Your Impact Journey',
    },
    {
      name: 'Impact Accelerator',
      icon: '🚀',
      price: 1799,
      priceLabel: '₹1,799/year',
      summary: 'Enhanced tools for growing NGOs ready to scale their social impact',
      who: 'Growing NGOs, social enterprises',
      details: [
        '✨ All Community Starter features',
        '🎯 Unlimited campaigns & projects',
        '📈 Advanced impact analytics & reports',
        '💬 Unlimited messaging & donor engagement',
        '🎨 Professional campaign templates',
        '🔗 Basic integrations (payment gateways)',
        '📞 Priority phone & email support',
      ],
      highlight: true,
      cta: 'Save ₹589 • 25% off monthly',
    },
    {
      name: 'Social Enterprise',
      icon: '🌟',
      price: 4499,
      priceLabel: '₹4,499/year',
      summary:
        'Comprehensive platform for established organizations with multi-location operations',
      who: 'Large NGOs, social enterprises, foundations',
      details: [
        '🌟 All Impact Accelerator features',
        '👥 Multi-team management (up to 50 users)',
        '🏢 Multi-location project management',
        '⚙️ Custom integrations & API access',
        '📊 White-label reporting & branding',
        '👨‍💼 Dedicated success manager',
        '🎓 Training & capacity building sessions',
      ],
      highlight: false,
      cta: 'Save ₹1,489 • 25% off + annual perks',
    },
  ],
};

const whyChooseUs = [
  'Purpose-Built Platform: Specifically designed for NGOs and social enterprises with features that matter.',
  'Cost-Effective Solutions: Transparent pricing with significant savings for annual commitments.',
  'Real Impact Tracking: Measure and showcase your social impact with comprehensive analytics.',
  'Seamless Integrations: Connect with popular tools like Salesforce, Mailchimp, and accounting software.',
  'Dedicated Support: Expert support team understanding the unique challenges of social organizations.',
  'Scalable Infrastructure: Grow from small campaigns to large-scale social movements on the same platform.',
];

const successStories = [
  'Fundraising Success: NGOs increased average donation amounts by 35% using our targeted campaign tools.',
  'Volunteer Engagement: Organizations saw 60% improvement in volunteer retention with our engagement features.',
  'Impact Visibility: Social enterprises improved stakeholder reporting efficiency by 50% with automated analytics.',
  'Cost Savings: Organizations reduced operational costs by 25% through streamlined processes and automation.',
];

const planLabels = {
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  yearly: 'Annual',
};

const BusinessNgoBusinessModel = () => {
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
                🌟 Social Impact Focused • Community-Driven Development
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gramin-600">Social Impact Acceleration Platform</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                Emerging NGO & Social Enterprise Solution — Purpose-Built • Community-Tested •
                Impact-Driven
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <strong>
                Co-created with leading social organizations and impact measurement experts
              </strong>
              , our comprehensive platform empowers NGOs and social enterprises to maximize their
              effectiveness. With focus on authentic impact tracking, transparent operations, and
              sustainable growth, we're building tools that truly serve the social sector.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Social Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to grow your organization and amplify your social impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                certification={feature.certification}
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
              Transparent Pricing for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as your impact grows
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
                  Why NGOs Choose GraminSetu
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of organizations already amplifying their social impact
                </p>
              </div>

              <ul className="space-y-6">
                {whyChooseUs.map((item, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Success Stories</h3>
              </div>

              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gramin-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{story}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

function Feature({ icon, title, desc, certification, stats }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {/* Impact-focused gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gramin-50/25 via-purple-50/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-gramin-50 to-gramin-100 p-3 rounded-lg">
              {icon}
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gramin-700 transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {certification && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    🏆 {certification}
                  </div>
                )}
                {stats && (
                  <div className="inline-flex items-center px-3 py-1 bg-gramin-100 text-gramin-700 text-xs font-semibold rounded-full">
                    💎 {stats}
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>

            {/* Impact CTA */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-gramin-600 text-sm font-medium group-hover:text-gramin-700 transition-colors cursor-pointer flex items-center">
                Maximize Impact →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, icon, details, price, priceLabel, highlight, who, summary, cta }) {
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

      {/* Impact Badge for Free Plan */}
      {name.includes('Starter') && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            🌱 Impact Start
          </span>
        </div>
      )}

      <div className="text-center space-y-6">
        <div
          className={`text-5xl group-hover:scale-110 transition-transform duration-300 ${highlight ? 'drop-shadow-lg' : ''}`}
        >
          {icon}
        </div>
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'text-white' : 'text-gray-900'}`}>
            {name}
          </h3>
          <p className={`text-sm font-medium ${highlight ? 'text-gramin-100' : 'text-gray-600'}`}>
            {who}
          </p>
        </div>
        <div className="space-y-3">
          <div className={`text-4xl font-bold ${highlight ? 'text-white' : 'text-gramin-600'}`}>
            {priceLabel}
          </div>
          {price > 0 && (
            <div className={`text-sm ${highlight ? 'text-gramin-200' : 'text-gray-500'}`}>
              {price === 199 && '≈ ₹6.6/day'}
              {price === 499 && '≈ ₹16.6/day'}
              {price === 537 && '≈ ₹6.0/day'}
              {price === 1347 && '≈ ₹15.0/day'}
              {price === 1799 && '≈ ₹4.9/day'}
              {price === 4499 && '≈ ₹12.3/day'}
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
            💚 Impact Features:
          </h4>
          <ul className="space-y-3">
            {details.map((detail, idx) => (
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
                <span className="flex-1">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className={`w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
          highlight
            ? 'bg-white text-gramin-600 hover:bg-gray-50 shadow-lg'
            : 'bg-gradient-to-r from-gramin-600 to-gramin-700 text-white hover:from-gramin-700 hover:to-gramin-800 shadow-lg hover:shadow-xl'
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

export default memo(BusinessNgoBusinessModel);
