import React, { useState } from 'react';
import { faqContent as faqs } from '../../constants/faqContent';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);
  const MAJOR_FAQ_COUNT = 5;
  const displayedFaqs = showAll ? faqs : faqs.slice(0, MAJOR_FAQ_COUNT);
  return (
    <section className="py-24 bg-gramin-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gramin-600">
            Find answers to the most common questions about GraminSetu. For more details, contact
            our support team.
          </p>
        </div>
        <div className="space-y-4">
          {displayedFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gramin-200">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gramin-50 transition-colors focus:outline-none"
                aria-expanded={openFAQ === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-medium text-gramin-900 text-lg">{faq.question}</span>
                <span className="ml-2 text-gramin-500">{openFAQ === idx ? '▲' : '▼'}</span>
              </button>
              {openFAQ === idx && (
                <div className="px-6 pb-4" id={`faq-answer-${idx}`}>
                  <p className="text-gramin-700 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {faqs.length > MAJOR_FAQ_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block px-6 py-2 rounded-full bg-gramin-600 text-white font-semibold shadow hover:bg-gramin-700 transition-colors focus:outline-none"
            >
              {showAll ? 'Show Less' : 'Show More Questions'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
