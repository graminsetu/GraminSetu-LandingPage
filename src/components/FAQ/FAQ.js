import React, { useState } from 'react';
import { faqContent as faqs } from '../../constants/faqContent';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);
  const MAJOR_FAQ_COUNT = 5;
  const displayedFaqs = showAll ? faqs : faqs.slice(0, MAJOR_FAQ_COUNT);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gramin-50/30 via-white to-setu-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gramin-100 text-xs sm:text-sm font-bold text-gramin-700 mb-4 md:mb-6 tracking-wide shadow-md hover:shadow-lg transition-shadow">
            <div className="w-2 h-2 rounded-full bg-gramin-500 animate-pulse"></div>
            FAQS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gramin-600 to-setu-600">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Find answers to the most common questions about GraminSetu. For more details, contact
            our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openFAQ === idx;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 hover:bg-gradient-to-r hover:from-gramin-50/50 hover:to-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gramin-500 focus:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gramin-500 to-gramin-600 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                </button>

                {/* Answer with smooth animation */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  id={`faq-answer-${idx}`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {faqs.length > MAJOR_FAQ_COUNT && (
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gramin-600 to-gramin-700 hover:from-gramin-700 hover:to-gramin-800 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gramin-200 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <span>{showAll ? 'Show Less Questions' : 'Show More Questions'}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 md:mt-16 text-center bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg">
          <p className="text-slate-700 text-base sm:text-lg mb-4 font-medium">
            Still have questions?
          </p>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Our support team is here to help you 24/7
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gramin-200 hover:border-gramin-300 text-gramin-700 hover:text-gramin-800 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
