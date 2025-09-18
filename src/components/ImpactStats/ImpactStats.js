import React from 'react';

const stats = [
  { number: '500+', label: 'Villages Connected' },
  { number: '50K+', label: 'Active Users' },
  { number: '1000+', label: 'Events Organized' },
  { number: '₹2Cr+', label: 'Funds Raised' },
];

const ImpactStats = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-6">
          Trusted by Villages Across India
        </h2>
        <p className="text-xl text-gramin-600 max-w-3xl mx-auto">
          See how GraminSetu is transforming rural communities
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gramin-600 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gramin-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;
