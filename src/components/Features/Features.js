import React from 'react';
import { featuresContent } from '../../constants/featuresContent';

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-6">
          {featuresContent.sectionTitle}
        </h2>
        <p className="text-xl text-gramin-600 max-w-3xl mx-auto">
          {featuresContent.sectionSubtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresContent.features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gramin-200 p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gramin-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform text-3xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gramin-900 mb-3 group-hover:text-gramin-600 transition-colors">
              {feature.name}
            </h3>
            <p className="text-gramin-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
