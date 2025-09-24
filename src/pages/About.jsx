
import Logo from '../components/Logo/Logo';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
    {/* Nav Bar */}
    <header className="bg-white border-b border-gramin-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-3">
            <Logo size="lg" showText={true} />
          </a>
          <div className="flex items-center space-x-6">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
    {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto py-16 px-4 pt-0">
      <div className="flex flex-col items-center mb-8">
        <img
          src={graminsetuLogo}
          alt="GraminSetu Logo"
          className="drop-shadow"
          style={{ width: 230, height: 230, marginTop: 0, marginBottom: -20 }}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">About GraminSetu</h1>
        <p className="text-lg text-gramin-800 text-center max-w-2xl mb-4">GraminSetu (“Village Bridge”) is a registered digital platform committed to advancing rural development by connecting communities, businesses, government bodies, and NGOs in India. Our mission is to create equitable access to markets, resources, information, and services, fully respecting all applicable legal regulations and privacy norms.</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">Who We Serve</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Rural citizens seeking growth opportunities</li>
          <li>Farmers, artisans, and entrepreneurs</li>
          <li>NGOs and social impact organizations</li>
          <li>Government agencies and local officials</li>
          <li>Businesses and service providers</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2">Our platform is accessible to all users, subject to our terms of use and data privacy standards.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">What We Do</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Provide a secure digital marketplace for direct trade.</li>
          <li>Facilitate transparent delivery of government schemes and services.</li>
          <li>Enable NGOs and corporates to manage and monitor rural impact projects.</li>
          <li>Offer learning modules, skill training, and information resources.</li>
          <li>Promote community networking and knowledge sharing.</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2">All platform features are designed in compliance with Indian law, GDPR principles where applicable, and fair use policies.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">How GraminSetu Works</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Registration and use require valid identity and compliance with our community guidelines.</li>
          <li>Transactions and data are encrypted and protected by best industry practices.</li>
          <li>Content and engagement are moderated to maintain trust, safety, and inclusivity.</li>
          <li>Users’ rights and responsibilities, our legal obligations, and dispute resolution procedures are outlined in our <a href="/terms" className="underline text-gramin-600 hover:text-gramin-800">Terms of Service</a> and <a href="/privacy" className="underline text-gramin-600 hover:text-gramin-800">Privacy Policy</a>, available via the footer links.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">Our Commitment</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Uphold legal transparency, data protection, and ethical standards.</li>
          <li>Partner with accredited institutions and certified vendors only.</li>
          <li>Foster sustainable growth and inclusive development for every stakeholder.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">Join GraminSetu</h2>
        <p className="text-lg text-gramin-700 mb-2">Collaborate with us to create lasting impact. For partnership, service, or compliance inquiries, contact us at <a href="mailto:support@graminsetu.in" className="underline text-gramin-600 hover:text-gramin-800">support@graminsetu.in</a> or visit our legal policy pages.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
