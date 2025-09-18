import React, { useState } from 'react';
import { faqContent as faqs } from '../../constants/faqContent';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = idx => setOpenFAQ(openFAQ === idx ? null : idx);
  return (
    <section className="py-24 bg-gramin-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gramin-600">Everything you need to know about GraminSetu</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gramin-200">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gramin-50 transition-colors"
              >
                <span className="font-medium text-gramin-900">{faq.question}</span>
                <span>{openFAQ === idx ? '▲' : '▼'}</span>
              </button>
              {openFAQ === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gramin-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
