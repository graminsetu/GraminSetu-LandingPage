const AboutBanner = () => (
  <div className="w-full h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-gramin-600 via-gramin-400 to-setu-400 relative mb-12">
    <div className="absolute inset-0 bg-black/20" />
    <div className="relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
        Empowering Rural India, Bridging Digital Divides
      </h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        GraminSetu is committed to transforming lives and communities through technology, trust, and
        innovation.
      </p>
    </div>
  </div>
);

export default AboutBanner;
