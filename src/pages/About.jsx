import Navbar from '../components/Navbar';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';

function About() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-gramin-100 font-sans flex flex-col">
      <PageTitle pathname={location.pathname} />

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GraminSetu',
            url: 'https://graminsetu.in/',
            logo: 'https://graminsetu.in/static/media/graminsetu-logo.png',
            description: 'Empowering Rural India with Opportunity, Transparency, and Growth',
            founder: {
              '@type': 'Person',
              name: 'Tamminana Bhogesh',
              jobTitle: 'Founder & CEO',
            },
            sameAs: [
              'https://www.linkedin.com/company/graminsetu',
              'https://twitter.com/graminsetu',
            ],
          }),
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto py-16 px-4 pt-0">
        <div className="flex flex-col items-center mb-8">
          <img
            src={graminsetuLogo}
            alt="GraminSetu Logo"
            className="drop-shadow"
            style={{ width: 230, height: 230, marginTop: 0, marginBottom: -20 }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">
            About GraminSetu
          </h1>
          <p className="text-lg text-gramin-700 text-center max-w-2xl mb-4">
            Empowering Rural India with{' '}
            <span className="font-semibold">Opportunity, Transparency, and Growth</span>
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">1. Our Mission</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              Bridge the digital divide in rural India through comprehensive technology solutions
            </li>
            <li>Connect villages with essential services, opportunities, and resources</li>
            <li>Empower rural communities with access to fair trade and transparent governance</li>
            <li>
              Create sustainable growth opportunities for farmers, artisans, and entrepreneurs
            </li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            GraminSetu is dedicated to creating a platform that serves as a bridge between rural
            India and the digital economy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">2. Our Vision</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Create a more connected, equitable, and prosperous future for rural India</li>
            <li>Eliminate geographical barriers that limit opportunities and access</li>
            <li>Ensure every village has access to the same resources as urban areas</li>
            <li>Build a sustainable ecosystem for rural development and growth</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            We envision a world where technology empowers rural communities to achieve their full
            potential.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">3. What We Do</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              Provide a secure digital marketplace for direct trade between farmers and buyers
            </li>
            <li>Facilitate transparent delivery of government schemes and services</li>
            <li>Enable NGOs and corporates to manage and monitor rural impact projects</li>
            <li>Offer learning modules, skill training, and information resources</li>
            <li>Promote community networking and knowledge sharing capabilities</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            Our comprehensive digital ecosystem is designed to address the unique challenges and
            opportunities in rural India.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">4. Who We Serve</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Rural citizens seeking growth and development opportunities</li>
            <li>Farmers, artisans, and rural entrepreneurs</li>
            <li>NGOs and social impact organizations</li>
            <li>Government agencies and local officials</li>
            <li>Businesses and service providers looking to reach rural markets</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            Our platform is designed to benefit all stakeholders in the rural ecosystem, creating
            value for everyone involved.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">5. Our Approach</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Technology-first, community-centered design philosophy</li>
            <li>User-friendly interfaces accessible to all literacy levels</li>
            <li>Multilingual support for regional languages</li>
            <li>Secure and encrypted data protection systems</li>
            <li>Transparent operations with fair pricing policies</li>
            <li>Sustainable development practices and environmental responsibility</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">6. Our Core Values</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              <span className="font-semibold">Transparency:</span> Open and honest communication in
              all our dealings
            </li>
            <li>
              <span className="font-semibold">Inclusivity:</span> Ensuring equal access and
              opportunities for all
            </li>
            <li>
              <span className="font-semibold">Innovation:</span> Continuously improving through
              technology and feedback
            </li>
            <li>
              <span className="font-semibold">Sustainability:</span> Building solutions that create
              lasting positive impact
            </li>
            <li>
              <span className="font-semibold">Trust:</span> Maintaining the highest standards of
              integrity and reliability
            </li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            These values guide every decision we make and every service we provide to our community.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">7. Our Team & Leadership</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              Passionate professionals committed to rural development and digital transformation
            </li>
            <li>Diverse expertise in technology, agriculture, rural development, and business</li>
            <li>Dedicated to creating comprehensive solutions for rural challenges</li>
            <li>Continuous learning and adaptation to community needs</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            Our team combines deep rural understanding with cutting-edge technology expertise to
            deliver meaningful solutions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">8. Our Commitment</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Uphold legal transparency, data protection, and ethical standards</li>
            <li>Partner exclusively with accredited institutions and certified vendors</li>
            <li>Foster sustainable growth and inclusive development for every stakeholder</li>
            <li>Continuous improvement based on user feedback and community needs</li>
            <li>Maintain the highest standards of service quality and reliability</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">9. Join Our Mission</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Partner with us as a rural entrepreneur or community leader</li>
            <li>Collaborate as an organization working in rural development</li>
            <li>Support our mission as someone passionate about rural empowerment</li>
            <li>Contribute your expertise to help build a better rural ecosystem</li>
          </ul>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.linkedin.com/company/graminsetu/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gramin-600 hover:bg-gramin-700 text-white font-semibold py-2 px-6 rounded-full transition shadow focus:ring-2 focus:ring-gramin-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:bhogesh@graminsetu.in"
              className="inline-flex items-center gap-2 bg-white border border-gramin-600 text-gramin-700 hover:bg-gramin-50 font-semibold py-2 px-6 rounded-full transition shadow focus:ring-2 focus:ring-gramin-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">10. Legal & Compliance</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>Full compliance with Indian laws and regulations</li>
            <li>Transparent business practices and ethical operations</li>
            <li>Adherence to highest standards of data protection and privacy</li>
            <li>Regular audits and compliance monitoring</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            For detailed information about our policies, please refer to our{' '}
            <a
              href="/terms"
              className="underline text-gramin-600 hover:text-gramin-800 font-medium"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="underline text-gramin-600 hover:text-gramin-800 font-medium"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <HelpSupportButton />
      </main>

      <Footer />
    </div>
  );
}

export default About;
