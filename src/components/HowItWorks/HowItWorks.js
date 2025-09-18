import React from 'react';
import { howItWorksContent } from '../../constants/howItWorksContent';

const HowItWorks = () => (
  <section className="py-24 bg-gramin-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-6">
          {howItWorksContent.sectionTitle}
        </h2>
        <p className="text-xl text-gramin-600 max-w-3xl mx-auto">
          {howItWorksContent.sectionSubtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {howItWorksContent.steps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="w-20 h-20 bg-gramin-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gramin-900 mb-3">{step.title}</h3>
            <p className="text-gramin-700 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
