import graminsetuLogo from '../assets/images/graminsetu-logo.png';

const AboutHero = () => (
  <section className="w-full min-h-[60vh] flex justify-center items-center mb-12 pt-10 pb-12 bg-gradient-to-br from-gramin-100 via-white to-setu-100 px-2 border-b border-gramin-200">
    <div className="w-full max-w-2xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col items-center p-10 border border-gramin-100">
      <img
        src={graminsetuLogo}
        alt="GraminSetu Logo"
        className="mb-4 rounded-full border-4 border-gramin-100 shadow-lg"
        style={{ width: 100, height: 100 }}
      />
      <h2 className="text-2xl font-bold text-gramin-800 mb-1 text-center">Tamminana Bhogesh</h2>
      <h3 className="text-base text-gramin-600 mb-4 text-center">GraminSetu Team</h3>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gramin-700 tracking-tight mb-4 text-center">
        About GraminSetu
      </h1>
      <blockquote className="italic text-2xl md:text-3xl text-gramin-700 font-semibold mb-6 text-center">
        “My vision is to bridge the digital divide in rural India, empowering every village and
        community with access to opportunity, transparency, and growth. GraminSetu is not just a
        platform, but a movement to create a more connected, equitable, and prosperous future for
        all.”
      </blockquote>
      <p className="text-lg text-gramin-800 text-center max-w-xl mb-6">
        GraminSetu (“Village Bridge”) is a digital platform dedicated to advancing rural development
        by connecting communities, businesses, government bodies, and NGOs in India. Our mission is
        to create equitable access to markets, resources, information, and services, fully
        respecting all applicable legal regulations and privacy norms.
      </p>
    </div>
  </section>
);

export default AboutHero;
