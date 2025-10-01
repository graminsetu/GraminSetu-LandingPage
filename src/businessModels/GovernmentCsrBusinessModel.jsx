import React, { memo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const features = [
  {
    icon: '📊',
    title: 'Advanced Government Analytics Intelligence',
    desc: 'Deploy sophisticated monitoring systems with real-time data visualization, predictive analytics, and automated reporting. Our platform integrates with PFMS, DBT systems, and state databases to provide comprehensive governance insights with 99.99% data accuracy.',
    compliance: 'ISO 27001 Certified',
    stats: '50+ government integrations',
  },
  {
    icon: '🎯',
    title: 'Scientific Impact Assessment Framework',
    desc: 'Utilize evidence-based methodologies for precise beneficiary identification and impact measurement. Our AI-powered algorithms analyze socio-economic indicators, ensuring optimal resource allocation and measurable outcomes for government schemes and CSR initiatives.',
    compliance: 'NITI Aayog Approved',
    stats: '95% targeting accuracy',
  },
  {
    icon: '💰',
    title: 'Blockchain-Enabled Financial Transparency',
    desc: 'Implement immutable fund tracking with automated audit trails and real-time compliance monitoring. Every transaction is recorded on distributed ledgers, ensuring complete transparency and eliminating financial irregularities in government and CSR projects.',
    compliance: 'RBI Guidelines Compliant',
    stats: '100% audit compliance',
  },
  {
    icon: '🏛️',
    title: 'Federated Governance Architecture',
    desc: 'Establish seamless integration across all governance levels from Gram Panchayat to Central Government. Our platform supports multi-tenant architecture with role-based access, ensuring secure data sharing and coordinated policy implementation.',
    compliance: 'Digital India Certified',
    stats: 'Multi-tier integration',
  },
  {
    icon: '📈',
    title: 'Executive-Grade Business Intelligence',
    desc: 'Generate comprehensive stakeholder reports with advanced analytics, trend analysis, and forecasting capabilities. Our platform produces audit-ready documentation, impact assessments, and compliance reports meeting international standards.',
    compliance: 'OECD Standards',
    stats: 'Real-time reporting',
  },
  {
    icon: '🔐',
    title: 'Government-Grade Security Infrastructure',
    desc: 'Deploy military-grade security protocols with multi-factor authentication, end-to-end encryption, and quantum-resistant cryptography. Our platform meets the highest security standards mandated for government and critical infrastructure systems.',
    compliance: 'CERT-In Approved',
    stats: 'Zero security breaches',
  },
];

const pricingPlans = {
  monthly: [
    {
      name: 'Panchayat Essential',
      price: 999,
      priceLabel: '₹999/month',
      summary: 'Perfect for village-level governance and basic civic management',
      bestFor: 'Gram Panchayats & local bodies',
      details: [
        '🏛️ Village dashboard & citizen portal',
        '📋 Citizen grievance tracking system',
        '📢 Public announcements & notifications',
        '📅 Community event management',
        '📊 Basic reporting & analytics',
        '📞 Email & phone support',
        '👥 Up to 5 admin users',
      ],
      highlight: false,
    },
    {
      name: 'District Pro',
      price: 2499,
      priceLabel: '₹2,499/month',
      summary: 'Advanced governance tools with compliance and fund tracking',
      bestFor: 'Block/District offices & CSR teams',
      details: [
        '✨ All Panchayat Essential features',
        '💰 Fund allocation & expenditure tracking',
        '📋 Digital audit trails & compliance',
        '🔗 API integration capabilities',
        '📈 Advanced analytics & reporting',
        '⚡ Priority support with SLA',
        '👥 Up to 25 admin users',
        '🎯 Multi-village management',
      ],
      highlight: true,
    },
    {
      name: 'State Enterprise',
      price: 4999,
      priceLabel: '₹4,999/month',
      summary: 'Comprehensive solution for large-scale governance programs',
      bestFor: 'State departments & large CSR',
      details: [
        '🌟 All District Pro features',
        '🏢 Multi-region project management',
        '⚙️ Custom integrations & workflows',
        '📊 White-label reporting solutions',
        '🛡️ Advanced security & compliance',
        '👨‍💼 Dedicated account manager',
        '👥 Unlimited admin users',
        '🎓 Training & onboarding support',
      ],
      highlight: false,
    },
  ],
  quarterly: [
    {
      name: 'Panchayat Essential',
      price: 2697,
      priceLabel: '₹2,697/quarter',
      summary: 'Perfect for village-level governance and basic civic management',
      bestFor: 'Gram Panchayats & local bodies',
      details: [
        '🏛️ Village dashboard & citizen portal',
        '📋 Citizen grievance tracking system',
        '📢 Public announcements & notifications',
        '📅 Community event management',
        '📊 Basic reporting & analytics',
        '📞 Email & phone support',
        '👥 Up to 5 admin users',
      ],
      highlight: false,
    },
    {
      name: 'District Pro',
      price: 6747,
      priceLabel: '₹6,747/quarter',
      summary: 'Advanced governance tools with compliance and fund tracking',
      bestFor: 'Block/District offices & CSR teams',
      details: [
        '✨ All Panchayat Essential features',
        '💰 Fund allocation & expenditure tracking',
        '📋 Digital audit trails & compliance',
        '🔗 API integration capabilities',
        '📈 Advanced analytics & reporting',
        '⚡ Priority support with SLA',
        '👥 Up to 25 admin users',
        '🎯 Multi-village management',
      ],
      highlight: true,
    },
    {
      name: 'State Enterprise',
      price: 13497,
      priceLabel: '₹13,497/quarter',
      summary: 'Comprehensive solution for large-scale governance programs',
      bestFor: 'State departments & large CSR',
      details: [
        '🌟 All District Pro features',
        '🏢 Multi-region project management',
        '⚙️ Custom integrations & workflows',
        '📊 White-label reporting solutions',
        '🛡️ Advanced security & compliance',
        '👨‍💼 Dedicated account manager',
        '👥 Unlimited admin users',
        '🎓 Training & onboarding support',
      ],
      highlight: false,
    },
  ],
  yearly: [
    {
      name: 'Panchayat Essential',
      price: 8999,
      priceLabel: '₹8,999/year',
      summary: 'Perfect for village-level governance and basic civic management',
      bestFor: 'Gram Panchayats & local bodies',
      details: [
        '🏛️ Village dashboard & citizen portal',
        '📋 Citizen grievance tracking system',
        '📢 Public announcements & notifications',
        '📅 Community event management',
        '📊 Basic reporting & analytics',
        '📞 Email & phone support',
        '👥 Up to 5 admin users',
      ],
      highlight: false,
    },
    {
      name: 'District Pro',
      price: 22499,
      priceLabel: '₹22,499/year',
      summary: 'Advanced governance tools with compliance and fund tracking',
      bestFor: 'Block/District offices & CSR teams',
      details: [
        '✨ All Panchayat Essential features',
        '💰 Fund allocation & expenditure tracking',
        '📋 Digital audit trails & compliance',
        '🔗 API integration capabilities',
        '📈 Advanced analytics & reporting',
        '⚡ Priority support with SLA',
        '👥 Up to 25 admin users',
        '🎯 Multi-village management',
      ],
      highlight: true,
    },
    {
      name: 'State Enterprise',
      price: 44999,
      priceLabel: '₹44,999/year',
      summary: 'Comprehensive solution for large-scale governance programs',
      bestFor: 'State departments & large CSR',
      details: [
        '🌟 All District Pro features',
        '🏢 Multi-region project management',
        '⚙️ Custom integrations & workflows',
        '📊 White-label reporting solutions',
        '🛡️ Advanced security & compliance',
        '👨‍💼 Dedicated account manager',
        '👥 Unlimited admin users',
        '🎓 Training & onboarding support',
      ],
      highlight: false,
    },
  ],
};

const whyChooseUs = [
  'Government-Grade Security: Bank-level encryption and security protocols meeting all government compliance standards.',
  'Real-Time Analytics: Live dashboards providing instant insights into project progress and fund utilization.',
  'Seamless Integration: Compatible with existing government systems and third-party applications.',
  'Comprehensive Audit Trails: Complete transparency with detailed logs for every transaction and activity.',
  'Dedicated Support: 24/7 premium support with dedicated account managers for enterprise clients.',
  'Custom Reporting: Generate tailored reports for different stakeholders and compliance requirements.',
];

const implementationSteps = [
  'Initial Consultation: Understand your specific governance needs and customize the platform accordingly.',
  'System Integration: Seamlessly integrate with your existing government infrastructure and databases.',
  'Team Training: Comprehensive training for your staff on platform usage and best practices.',
  'Pilot Launch: Start with a pilot project to ensure smooth operation and gather feedback.',
  'Full Deployment: Scale up to full implementation across all targeted regions and departments.',
  'Ongoing Support: Continuous monitoring, updates, and dedicated support for optimal performance.',
];

const planLabels = {
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  yearly: 'Annual',
};

const GovernmentCsrBusinessModel = () => {
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
                🏛️ Government Standards Compliant • Security First
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gramin-600">Enterprise Governance & CSR Platform</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                Next-Generation Digital Governance Solution — Secure • Compliant • Innovation-Driven
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <strong>
                Built with government-grade security standards and compliance frameworks
              </strong>
              , our enterprise platform is designed to revolutionize public service delivery and CSR
              impact measurement. With advanced analytics, blockchain transparency, and robust
              security protocols, we're creating the next generation of governance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advanced Governance Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed for government bodies and CSR organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                compliance={feature.compliance}
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
              Scalable Pricing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right plan for your governance and CSR needs
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
                  Why Government Bodies Choose Us
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Trusted by government agencies and CSR organizations for transparent, efficient
                  governance
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h3>
              </div>

              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

function Feature({ icon, title, desc, compliance, stats }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {/* Premium gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gramin-50/30 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300 bg-gramin-50 p-3 rounded-lg">
              {icon}
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gramin-700 transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {compliance && (
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    🛡️ {compliance}
                  </div>
                )}
                {stats && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    📊 {stats}
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>

            {/* Enterprise CTA */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-gramin-600 text-sm font-medium group-hover:text-gramin-700 transition-colors cursor-pointer flex items-center">
                Enterprise Solution →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, details, price, priceLabel, highlight, bestFor, summary }) {
  const icons = {
    'Panchayat Essential': '🏛️',
    'District Pro': '🚀',
    'State Enterprise': '👑',
    // Legacy names for backward compatibility
    'Basic Governance': '🏛️',
    'Advanced Compliance': '🚀',
    'Enterprise Governance': '👑',
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

      {/* Trusted Badge for Government Plans */}
      {name.includes('Panchayat') && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            🏅 Trusted
          </span>
        </div>
      )}

      <div className="text-center space-y-6">
        <div
          className={`text-5xl group-hover:scale-110 transition-transform duration-300 ${highlight ? 'drop-shadow-lg' : ''}`}
        >
          {icons[name] || '🏛️'}
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
              {price === 999 && '≈ ₹33/day'}
              {price === 2499 && '≈ ₹83/day'}
              {price === 4999 && '≈ ₹167/day'}
              {price === 2697 && '≈ ₹30/day'}
              {price === 6747 && '≈ ₹75/day'}
              {price === 13497 && '≈ ₹150/day'}
              {price === 8999 && '≈ ₹25/day'}
              {price === 22499 && '≈ ₹62/day'}
              {price === 44999 && '≈ ₹123/day'}
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
            🏛️ Governance Features:
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
        {price ? '🏛️ Choose Plan' : '📞 Contact Sales'}
      </button>
    </div>
  );
}

export default memo(GovernmentCsrBusinessModel);
