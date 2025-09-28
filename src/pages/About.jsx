import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import AboutBanner from '../components/AboutBanner';

const About = () => (
  <div
    className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col"
    role="main"
  >
    {/* Structured Data for Person (Founder) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
          jobTitle: 'Founder & CEO',
          worksFor: { '@type': 'Organization', name: 'GraminSetu' },
          url: 'https://graminsetu.in/',
          sameAs: [
            'https://www.linkedin.com/in/tamminana-bhogesh',
            'https://twitter.com/graminsetu',
          ],
        }),
      }}
    />
    <Navbar />
    <main className="flex-1 w-full mx-auto py-0 px-0 pt-0" tabIndex="-1">
      <AboutBanner />
      <div className="w-full flex flex-col items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gramin-800 text-center mb-2 tracking-tight">
          About GraminSetu
        </h1>
        <p className="text-lg md:text-xl text-gramin-600 text-center max-w-2xl mb-2">
          Empowering Rural India with Opportunity, Transparency, and Growth
        </p>
        <div className="w-24 h-1 bg-gramin-600 rounded-full mb-2"></div>
      </div>
      <section className="w-full max-w-3xl bg-white/95 rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col items-center border border-gramin-100 hover:shadow-3xl transition-shadow duration-300 mx-auto mb-12">
        <img
          src={require('../assets/images/graminsetu-logo.png')}
          alt="GraminSetu Logo"
          className="mb-5 rounded-full border-4 border-gramin-100 shadow-lg w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white"
        />
        <h2 className="text-2xl md:text-3xl font-extrabold text-gramin-800 mb-1 text-center tracking-tight">
          Our Team
        </h2>
        <h3 className="text-base md:text-lg text-gramin-600 mb-2 text-center font-medium">
          Driven by a Shared Vision
        </h3>
        <div className="w-14 h-1 bg-gramin-600 rounded-full mb-2"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gramin-800 mb-4 text-center border-l-4 border-gramin-600 pl-2">
          Our Vision
        </h2>
        <blockquote className="italic text-xl md:text-2xl text-gramin-700 font-semibold mb-4 text-center px-2 md:px-4">
          “Our vision is to bridge the digital divide in rural India, empowering every village and
          community with access to opportunity, transparency, and growth. GraminSetu is not just a
          platform, but a movement led by our passionate team to create a more connected, equitable,
          and prosperous future for all.”
        </blockquote>
        <div className="text-center text-gramin-600 text-base mb-6">— The GraminSetu Team</div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center w-full">
            <a
              href="https://www.linkedin.com/company/graminsetu/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gramin-600 hover:bg-gramin-700 text-white font-semibold py-2 px-7 rounded-full transition shadow w-full sm:w-auto justify-center focus:ring-2 focus:ring-gramin-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:bhogesh@graminsetu.in"
              className="flex items-center gap-2 bg-white border border-gramin-600 text-gramin-700 hover:bg-gramin-50 font-semibold py-2 px-7 rounded-full transition shadow w-full sm:w-auto justify-center focus:ring-2 focus:ring-gramin-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto flex flex-col gap-12 mb-20 px-2 items-center justify-center z-10">
        <h2 className="text-2xl font-bold text-gramin-800 mb-4 border-l-4 border-gramin-600 pl-2 w-full text-center">
          Who We Serve
        </h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 mb-2 text-left w-full max-w-xl mx-auto">
          <li>Rural citizens seeking growth opportunities</li>
          <li>Farmers, artisans, and entrepreneurs</li>
          <li>NGOs and social impact organizations</li>
          <li>Government agencies and local officials</li>
          <li>Businesses and service providers</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2 max-w-xl mx-auto mb-8">
          Our platform is accessible to all users, subject to our terms of use and data privacy
          standards.
        </p>

        <h2 className="text-2xl font-bold text-gramin-800 mb-4 border-l-4 border-gramin-600 pl-2 w-full text-center">
          What We Do
        </h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 mb-2 text-left w-full max-w-xl mx-auto">
          <li>Provide a secure digital marketplace for direct trade.</li>
          <li>Facilitate transparent delivery of government schemes and services.</li>
          <li>Enable NGOs and corporates to manage and monitor rural impact projects.</li>
          <li>Offer learning modules, skill training, and information resources.</li>
          <li>Promote community networking and knowledge sharing.</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2 max-w-xl mx-auto mb-8">
          All platform features are designed in compliance with Indian law, GDPR principles where
          applicable, and fair use policies.
        </p>

        <h2 className="text-2xl font-bold text-gramin-800 mb-4 border-l-4 border-gramin-600 pl-2 w-full text-center">
          How GraminSetu Works
        </h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 mb-2 text-left w-full max-w-xl mx-auto">
          <li>
            Registration and use require valid identity and compliance with our community
            guidelines.
          </li>
          <li>Transactions and data are encrypted and protected by best industry practices.</li>
          <li>Content and engagement are moderated to maintain trust, safety, and inclusivity.</li>
          <li>
            Users’ rights and responsibilities, our legal obligations, and dispute resolution
            procedures are outlined in our{' '}
            <a href="/terms" className="underline text-gramin-600 hover:text-gramin-800">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline text-gramin-600 hover:text-gramin-800">
              Privacy Policy
            </a>
            , available via the footer links.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gramin-800 mb-4 border-l-4 border-gramin-600 pl-2 w-full text-center">
          Our Commitment
        </h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 mb-2 text-left w-full max-w-xl mx-auto">
          <li>Uphold legal transparency, data protection, and ethical standards.</li>
          <li>Partner with accredited institutions and certified vendors only.</li>
          <li>Foster sustainable growth and inclusive development for every stakeholder.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gramin-800 mb-4 border-l-4 border-gramin-600 pl-2 w-full text-center">
          Join GraminSetu
        </h2>
        <p className="text-lg text-gramin-700 mb-2 max-w-xl mx-auto">
          Collaborate with us to create lasting impact. For partnership, service, or compliance
          inquiries, please use the Connect section above or visit our legal policy pages.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
