import React, { useState, useEffect, useRef } from 'react';
import { landingContent } from '../../constants/landingContent';
import { Layout, Network, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

// Reusing the FadeInSection component locally here for consistent animations
// In a real refactor, this should be moved to a shared /components/ui folder
const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => currentElement && observer.unobserve(currentElement);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HowItWorks = () => {
  const { howItWorks } = landingContent;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={32} />;
      case 'Network':
        return <Network size={32} />;
      case 'TrendingUp':
        return <TrendingUp size={32} />;
      default:
        return <CheckCircle2 size={32} />;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              Workflow
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {howItWorks.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gramin-500 to-green-400 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

          {howItWorks.steps.map((step, idx) => (
            <FadeInSection
              key={idx}
              delay={idx * 200}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 group-hover:text-white group-hover:border-transparent transition-all duration-500 relative overflow-hidden">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                    idx === 0
                      ? 'from-green-400 to-emerald-600'
                      : idx === 1
                        ? 'from-blue-400 to-indigo-600'
                        : 'from-orange-400 to-amber-600'
                  }`}
                ></div>
                <div className="relative z-10">{getIcon(step.icon)}</div>

                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  {idx + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gramin-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
