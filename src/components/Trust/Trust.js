import React, { useRef, useEffect, useState } from 'react';
import { metrics } from './metrics';

function useCountUp(end, duration = 1200, startWhen = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startWhen) {
      setCount(0);
      return;
    }
    let start = 0;
    let startTime = null;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [end, startWhen]);
  return count;
}

function MetricCard({ metric, visible, delay }) {
  const value = useCountUp(metric.value, 1200 + delay, visible);
  return (
    <div
      className="bg-[#f6fcf8] rounded-2xl shadow-md flex flex-col items-center justify-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl group cursor-pointer border border-gramin-100 relative"
    >
      <div className="mb-3">{metric.icon}</div>
      <div className="text-4xl md:text-5xl font-extrabold text-gramin-700 mb-1 flex items-end">
        {metric.label === 'Funds Raised' ? <span>₹</span> : null}{value.toLocaleString()}
      </div>
      <div className="text-lg text-gramin-700 font-semibold mb-1">{metric.label}</div>
      {/* Tooltip/info icon */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-gramin-700 text-white text-xs rounded px-2 py-1 shadow">{metric.label}</span>
      </div>
    </div>
  );
}

const Trust = () => {
  // Animate metrics when in view
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gramin-800 mb-4 text-center tracking-tight">Trusted by Villages Across India</h2>
        <p className="text-xl md:text-2xl text-gramin-600 mb-12 text-center max-w-2xl">See how GraminSetu is transforming rural communities</p>

        {/* Animated Metrics Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {metrics.map((metric, idx) => (
            <MetricCard key={metric.label} metric={metric} visible={visible} delay={idx * 200} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-2xl font-bold text-gramin-800 mb-3 flex items-center gap-2"><span role="img" aria-label="point">👉</span> Ready to connect your village?</div>
          <a href="/register" className="inline-block bg-gramin-600 hover:bg-gramin-700 text-white font-bold text-lg px-8 py-3 rounded shadow transition-all duration-200">Join Beta Today</a>
        </div>

        {/* Trust & Privacy Commitment */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-4">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 2l7 7-7 7-7-7z"/><path d="M12 22V9"/></svg>
            <span className="text-gramin-700 font-semibold text-lg">Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-gramin-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <span className="text-gramin-700 font-semibold text-lg">Data Privacy Protected</span>
          </div>
        </div>
        <div className="text-gramin-600 text-base mb-4 text-center max-w-xl">
          Your data is always private and secure. We never share your information without your consent.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/terms" className="text-gramin-600 hover:text-gramin-800 underline">Terms of Service</a>
          <a href="/privacy" className="text-gramin-600 hover:text-gramin-800 underline">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Trust;
