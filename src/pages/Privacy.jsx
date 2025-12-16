import React from 'react';
import Navbar from '../components/Navbar';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import './Policies.scss';

function Privacy() {
  const location = useLocation();
  return (
    <div className="policies-page">
      <PageTitle pathname={location.pathname} />
      <Navbar />

      {/* Hero Header */}
      <header className="policy-hero">
        <div className="hero-pattern"></div>
        <div className="logo-wrapper">
          <img src={graminsetuLogo} alt="GraminSetu" />
        </div>
        <h1>Privacy Policy</h1>
        <div className="effective-date">Effective Date: September 27, 2025</div>
      </header>

      {/* Main Paper Content */}
      <main className="policy-content-wrapper">
        <div className="policy-paper">
          <p className="mb-8 text-lg text-gray-600 leading-relaxed">
            At GraminSetu, we are committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we collect, use, disclosure,
            and safeguard your data when you visit our website or use our services.
          </p>

          <section>
            <h2>
              <span className="section-number">1</span> Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you
              express an interest in obtaining information about us or our products and services, or
              when you contact us.
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, job title, and
                company name.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you interact with our website, such
                as IP address, browser type, and pages visited.
              </li>
              <li>
                <strong>Application Data:</strong> Resumes, cover letters, and other details
                submitted during job applications.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">2</span> How We Use Your Information
            </h2>
            <p>We use the information we collect for various business purposes, including:</p>
            <ul>
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To improve, personalize, and expand our platform.</li>
              <li>To understand and analyze how you use our website.</li>
              <li>
                To communicate with you, either directly or through one of our partners, including
                for customer service, to provide you with updates and other information relating to
                the website, and for marketing and promotional purposes.
              </li>
              <li>To process your job applications and manage recruitment.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">3</span> Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally
              Identifiable Information unless we provide users with advance notice. This does not
              include website hosting partners and other parties who assist us in operating our
              website, conducting our business, or serving our users, so long as those parties agree
              to keep this information confidential.
            </p>
            <ul>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where we are
                legally required to do so in order to comply with applicable law, governmental
                requests, a judicial proceeding, court order, or legal process.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">4</span> Data Security
            </h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your
              personal information. While we have taken reasonable steps to secure the personal
              information you provide to us, please be aware that despite our efforts, no security
              measures are perfect or impenetrable, and no method of data transmission can be
              guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">5</span> Your Privacy Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal
              information, such as the right to access, correct, or delete the data we hold about
              you. To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">6</span> Contact Us
            </h2>
            <p>
              If you have questions or comments about this policy, you may contact us by email or
              post:
            </p>
            <div className="contact-info-box">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@graminsetu.in">support@graminsetu.in</a>
              </p>
              <p>
                <strong>Address:</strong> Visakhapatnam, Andhra Pradesh, India
              </p>
            </div>
          </section>
        </div>
      </main>

      <HelpSupportButton />
      <Footer />
    </div>
  );
}

export default Privacy;
