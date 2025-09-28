import graminsetuLogo from '../assets/images/graminsetu-logo.png';

const AboutLeadership = () => (
  <section className="w-full max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center bg-white/80 rounded-2xl shadow-xl p-8 gap-8">
    <div className="flex flex-col items-center md:w-1/3">
      <img
        src={graminsetuLogo}
        alt="Tamminana Bhogesh"
        className="mb-4 rounded-full border-4 border-gramin-100 shadow-lg"
        style={{ width: 110, height: 110 }}
      />
      <h2 className="text-2xl font-bold text-gramin-800 mb-1 text-center">Tamminana Bhogesh</h2>
      <h3 className="text-base text-gramin-600 mb-2 text-center">Founder & CEO</h3>
      <div className="w-12 h-1 bg-gramin-600 rounded-full mb-2"></div>
    </div>
    <div className="flex-1">
      {/* Vision and about text removed as per request to avoid duplication */}
    </div>
  </section>
);

export default AboutLeadership;
