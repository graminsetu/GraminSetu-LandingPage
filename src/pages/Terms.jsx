import React from 'react';
import Navbar from '../components/Navbar';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import './Policies.scss';

function Terms() {
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
        <h1>Terms of Service</h1>
        <div className="effective-date">Effective Date: September 27, 2025</div>
      </header>

      {/* Main Paper Content */}
      <main className="policy-content-wrapper">
        <div className="policy-paper">
          <p className="mb-8 text-lg text-gray-600 leading-relaxed">
            Welcome to GraminSetu. By accessing or using our website, mobile application, or any
            other services provided by GraminSetu (collectively, the "Services"), you agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not use
            our Services.
          </p>

          <section>
            <h2>
              <span className="section-number">1</span> Use of Our Services
            </h2>
            <p>
              You agree to use GraminSetu lawfully and responsibly, respecting all applicable laws
              and regulations.
            </p>
            <ul>
              <li>
                You must provide accurate information when interacting with our platform, including
                during registration, submissions, or communications.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account credentials.
              </li>
              <li>You must not use our services for any unlawful or prohibited activities.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">2</span> Intellectual Property
            </h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to
              the Site are protected under applicable copyrights, trademarks, and other proprietary
              rights.
            </p>
            <ul>
              <li>
                All content, trademarks, logos, software, data, and materials on GraminSetu are
                owned by or licensed to us.
              </li>
              <li>
                Unauthorized use, reproduction, or distribution of our intellectual property is
                prohibited without prior written permission.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">3</span> User Content and Submissions
            </h2>
            <p>
              By submitting any content (including job applications, demo requests, etc.) to
              GraminSetu, you grant us a worldwide, non-exclusive, royalty-free license to use,
              reproduce, modify, and display such content in connection with providing our Services.
            </p>
            <ul>
              <li>
                You warrant that any content you submit does not violate any third-party rights.
              </li>
              <li>
                We reserve the right to remove any content that violates our community guidelines.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">4</span> Limitation of Liability
            </h2>
            <p>
              In no event shall GraminSetu, its directors, employees, or agents be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of your
              access to or use of, or inability to access or use, the Services or any content on the
              Services.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">5</span> Modifications to Services
            </h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the
              Services (or any part thereof) with or without notice. You agree that GraminSetu shall
              not be liable to you or to any third party for any modification, suspension, or
              discontinuance of the Services.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">6</span> Governing Law
            </h2>
            <p>
              {' '}
              These Terms shall be governed by and construed in accordance with the laws of India,
              without regard to its conflict of law provisions. Any disputes shall be resolved in
              the courts located in Visakhapatnam, India.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">7</span> Contact Us
            </h2>
            <p>If you have questions regarding these Terms of Service, please contact us:</p>
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

export default Terms;
