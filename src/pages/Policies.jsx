import React from 'react';
import Navbar from '../components/Navbar';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import './Policies.scss';

const Policies = () => {
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
        <h1>Company Policies</h1>
        <div className="effective-date">Last Updated: September 27, 2025</div>
      </header>

      {/* Main Paper Content */}
      <main className="policy-content-wrapper">
        <div className="policy-paper">
          <p className="mb-8 text-lg text-gray-600 leading-relaxed">
            At GraminSetu, we operate with integrity, transparency, and a deep commitment to our
            mission of rural empowerment. The following policies outline the standards of conduct
            and operational guidelines that govern our organization.
          </p>

          <section>
            <h2>
              <span className="section-number">1</span> Code of Conduct
            </h2>
            <p>We hold ourselves to the highest ethical standards in all our interactions.</p>
            <ul>
              <li>
                Comply fully with applicable local, national, and international laws and
                regulations.
              </li>
              <li>Act honestly, transparently, and respectfully in all interactions.</li>
              <li>Maintain confidentiality and safeguard sensitive information.</li>
              <li>Avoid any form of discrimination, harassment, or unethical conduct.</li>
              <li>Report any conflicts of interest or unlawful activities promptly.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">2</span> Data Protection and Privacy
            </h2>
            <p>Your data security is paramount. We adhere to strict data protection protocols.</p>
            <ul>
              <li>
                Collect, process, and store personal data only with explicit consent and for
                legitimate business purposes.
              </li>
              <li>
                Implement technical and organizational security measures to protect data from
                unauthorized access, loss, or misuse.
              </li>
              <li>
                Ensure transparent communication about data use and provide users with rights to
                access, correct, or delete their data.
              </li>
              <li>Do not sell user data and strictly control third-party access.</li>
            </ul>
            <p className="mt-4">
              GraminSetu complies with the Information Technology Act, 2000 (India), and global
              privacy standards as applicable.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">3</span> Equal Opportunity and Diversity
            </h2>
            <p>We believe diversity strains innovation and strengthens our community.</p>
            <ul>
              <li>Promote an inclusive workplace culture.</li>
              <li>
                Provide reasonable accommodations for employees and clients with disabilities.
              </li>
              <li>Encourage diversity as a strength and foster collaborative teamwork.</li>
            </ul>
            <p className="mt-4">
              We provide equal opportunities irrespective of race, caste, gender, religion, age,
              sexual orientation, disability, or any other protected characteristic.
            </p>
          </section>

          <section>
            <h2>
              <span className="section-number">4</span> Anti-Corruption and Ethical Dealings
            </h2>
            <ul>
              <li>
                Strict compliance with the Prevention of Corruption Act, 1988 (India) and other
                relevant statutes.
              </li>
              <li>
                Prohibition against offering or accepting bribes, kickbacks, or improper favors.
              </li>
              <li>Mandatory reporting and investigation of suspected unethical conduct.</li>
              <li>Conducting periodic audits and trainings to uphold ethical standards.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">5</span> Health & Safety
            </h2>
            <ul>
              <li>
                Comply with workplace safety regulations as per the Factories Act, 1948, or other
                relevant frameworks.
              </li>
              <li>
                Promote environmentally sustainable practices including waste reduction, energy
                efficiency, and responsible sourcing.
              </li>
              <li>Support community well-being and environmental stewardship initiatives.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">6</span> Intellectual Property Rights
            </h2>
            <ul>
              <li>
                Ownership of all content, software, trademarks, and designs by GraminSetu or its
                licensors.
              </li>
              <li>Prohibition against unauthorized copying, distribution, or modification.</li>
              <li>Legal action against infringement to protect company assets.</li>
            </ul>
          </section>

          <section>
            <h2>
              <span className="section-number">7</span> Contact Us
            </h2>
            <p>For inquiries regarding our company policies:</p>
            <div className="contact-info-box">
              <p>
                <strong>Email:</strong> <a href="mailto:HR@graminsetu.in">HR@graminsetu.in</a>
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
};

export default Policies;
