import Navbar from '../components/Navbar';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

function Terms() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-gramin-100 font-sans flex flex-col">
      <PageTitle pathname={location.pathname} />

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
            Terms of Service
          </h1>
          <p className="text-lg text-gramin-700 text-center max-w-2xl mb-4">
            Effective Date: <span className="font-semibold">September 27, 2025</span>
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">1. Use of Our Services</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              You agree to use GraminSetu lawfully and responsibly, respecting all applicable laws
              and regulations
            </li>
            <li>
              You must provide accurate information when interacting with our platform, including
              during registration, submissions, or communications
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your account credentials
            </li>
            <li>You must not use our services for any unlawful or prohibited activities</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            By accessing our platform, you acknowledge that you have read, understood, and agree to
            be bound by these terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">2. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              All content, trademarks, logos, software, data, and materials on GraminSetu are owned
              by or licensed to us
            </li>
            <li>
              Unauthorized use, reproduction, or distribution of our intellectual property is
              prohibited without prior written permission
            </li>
            <li>
              You may not modify, copy, distribute, transmit, display, or create derivative works
              from our platform
            </li>
            <li>
              All user-generated content remains subject to our content policies and guidelines
            </li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            GraminSetu respects intellectual property rights and expects users to do the same.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">
            3. User Content and Submissions
          </h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              By submitting job applications, demo requests, or contact information, you agree that
              GraminSetu may store, use, and process this data as described in our Privacy Policy
            </li>
            <li>
              You grant us a non-exclusive, worldwide, royalty-free license to use submitted content
              for providing and improving our services
            </li>
            <li>You warrant that any content you submit does not violate any third-party rights</li>
            <li>
              We reserve the right to remove any content that violates our community guidelines
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">
            4. Privacy and Data Protection
          </h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              We value your privacy and handle personal information in accordance with our Privacy
              Policy
            </li>
            <li>We implement appropriate security measures to protect your personal data</li>
            <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
            <li>We comply with applicable data protection laws and regulations</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            Please review our{' '}
            <a
              href="/privacy"
              className="underline text-gramin-600 hover:text-gramin-800 font-medium"
            >
              Privacy Policy
            </a>{' '}
            to understand how your data is collected, used, and protected.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">5. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              GraminSetu strives for accuracy and reliability but does not guarantee errors or
              omissions will be corrected immediately
            </li>
            <li>
              We disclaim all liability for any indirect, incidental, consequential, or punitive
              damages arising out of your use of our website or services
            </li>
            <li>Our total liability shall not exceed the amount paid by you for our services</li>
            <li>
              We are not responsible for any third-party content or services accessed through our
              platform
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">
            6. Modifications to Services and Terms
          </h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>
              We reserve the right to modify or discontinue services at any time without prior
              notice
            </li>
            <li>
              These Terms may be updated periodically to reflect changes in our services or legal
              requirements
            </li>
            <li>Continued use of GraminSetu constitutes acceptance of the updated Terms</li>
            <li>Material changes will be communicated through appropriate channels</li>
          </ul>
          <p className="text-base text-gramin-600 mt-2">
            We recommend reviewing these Terms periodically to stay informed of any updates.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">
            7. Governing Law and Dispute Resolution
          </h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>These Terms are governed by the laws of India</li>
            <li>
              Any disputes arising out of or in connection with these Terms shall be resolved
              amicably through negotiation
            </li>
            <li>
              If resolution through negotiation fails, disputes shall be resolved by arbitration or
              in courts located in Visakhapatnam, India
            </li>
            <li>You agree to submit to the exclusive jurisdiction of these courts</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">8. Account Termination</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            <li>You may terminate your account at any time by contacting our support team</li>
            <li>
              Upon termination, your access to services will cease, but certain provisions of these
              Terms will survive
            </li>
            <li>We will handle data deletion requests in accordance with our Privacy Policy</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gramin-800">9. Contact Us</h2>
          <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
            <li>For questions or concerns regarding these Terms, please contact us</li>
            <li>We are committed to addressing your inquiries promptly and professionally</li>
            <li>Legal notices should be sent to our registered business address</li>
          </ul>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:support@graminsetu.in"
              className="inline-flex items-center gap-2 bg-gramin-600 hover:bg-gramin-700 text-white font-semibold py-2 px-6 rounded-full transition shadow focus:ring-2 focus:ring-gramin-400"
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
              Email Support
            </a>
            <a
              href="/contact"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.405L3 21l2.595-5.906A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                />
              </svg>
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
