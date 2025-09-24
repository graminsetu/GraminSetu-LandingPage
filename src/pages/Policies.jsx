
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';


const Policies = () => (
  <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
    {/* Nav Bar */}
    <header className="bg-white border-b border-gramin-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-3">
            <img src={graminsetuLogo} alt="GraminSetu Logo" className="drop-shadow" style={{ width: 48, height: 48, marginTop: 0, marginBottom: 0 }} />
            <span className="text-2xl font-bold text-gramin-700 hidden sm:inline">GraminSetu</span>
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">GraminSetu Company Policies</h1>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">1. Code of Conduct</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Comply fully with applicable local, national, and international laws and regulations.</li>
          <li>Act honestly, transparently, and respectfully in all interactions.</li>
          <li>Maintain confidentiality and safeguard sensitive information.</li>
          <li>Avoid any form of discrimination, harassment, or unethical conduct.</li>
          <li>Report any conflicts of interest or unlawful activities promptly.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">2. Data Protection and Privacy</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Collect, process, and store personal data only with explicit consent and for legitimate business purposes.</li>
          <li>Implement technical and organizational security measures to protect data from unauthorized access, loss, or misuse.</li>
          <li>Ensure transparent communication about data use and provide users with rights to access, correct, or delete their data.</li>
          <li>Do not sell user data and strictly control third-party access.</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2">GraminSetu complies with the Information Technology Act, 2000 (India), and global privacy standards as applicable.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">3. Equal Opportunity and Diversity</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Promote an inclusive workplace culture.</li>
          <li>Provide reasonable accommodations for employees and clients with disabilities.</li>
          <li>Encourage diversity as a strength and foster collaborative teamwork.</li>
        </ul>
        <p className="text-base text-gramin-600 mt-2">We provide equal opportunities irrespective of race, caste, gender, religion, age, sexual orientation, disability, or any other protected characteristic.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">4. Anti-Corruption and Ethical Dealings</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Strict compliance with the Prevention of Corruption Act, 1988 (India) and other relevant statutes.</li>
          <li>Prohibition against offering or accepting bribes, kickbacks, or improper favors.</li>
          <li>Mandatory reporting and investigation of suspected unethical conduct.</li>
          <li>Conducting periodic audits and trainings to uphold ethical standards.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">5. Health, Safety, and Environmental Responsibility</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Comply with workplace safety regulations as per the Factories Act, 1948, or other relevant frameworks.</li>
          <li>Promote environmentally sustainable practices including waste reduction, energy efficiency, and responsible sourcing.</li>
          <li>Support community well-being and environmental stewardship initiatives.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">6. Intellectual Property Rights</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Ownership of all content, software, trademarks, and designs by GraminSetu or its licensors.</li>
          <li>Prohibition against unauthorized copying, distribution, or modification.</li>
          <li>Legal action against infringement to protect company assets.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gramin-800">7. Customer Service and Feedback</h2>
        <ul className="list-disc pl-6 text-lg text-gramin-700 space-y-1">
          <li>Provide clear channels for feedback and support inquiries.</li>
          <li>Respond promptly and respectfully to user needs.</li>
          <li>Use feedback to continuously improve our platform and services.</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default Policies;
