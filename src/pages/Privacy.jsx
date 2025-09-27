import Logo from '../components/Logo/Logo';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-gramin-100 font-sans flex flex-col">
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
    <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 md:px-8 flex flex-col items-center justify-start pt-0">
      <div className="flex flex-col items-center mb-8 pt-2">
        <img
          src={graminsetuLogo}
          alt="GraminSetu Logo"
          className="drop-shadow"
          style={{ width: 230, height: 230, marginTop: 0, marginBottom: -20 }}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-gramin-700 text-center max-w-2xl mb-4">
          Effective Date: <span className="font-semibold">September 27, 2025</span>
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-gramin-100 max-w-3xl w-full mx-auto p-8 md:p-12 animate-fade-in">
        <ol className="list-decimal list-inside text-gramin-800 text-lg space-y-6">
          <li>
            <span className="font-bold">Information We Collect</span>
            <br />
            We collect personal information you provide directly to us, such as:
            <ul className="list-disc pl-6 mt-2 text-base text-gramin-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>
                Resume and other documents submitted through job applications or demo requests
              </li>
              <li>Any other information you choose to provide</li>
            </ul>
            We may also collect non-personal information via cookies and similar technologies to
            improve user experience.
          </li>
          <li>
            <span className="font-bold">How We Use Your Information</span>
            <br />
            We use your information to:
            <ul className="list-disc pl-6 mt-2 text-base text-gramin-700">
              <li>Provide and improve our services and website</li>
              <li>
                Respond to your inquiries and requests, including job applications and demo contacts
              </li>
              <li>Communicate updates and marketing information if you opt-in</li>
              <li>Comply with legal obligations</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Data Sharing and Disclosure</span>
            <br />
            We do not sell, rent, or trade your personal data to third parties.
            <br />
            We may share information with:
            <ul className="list-disc pl-6 mt-2 text-base text-gramin-700">
              <li>
                Service providers who assist us in operating our business, under strict
                confidentiality.
              </li>
              <li>As required by law, or to protect legal rights.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Data Security</span>
            <br />
            We implement reasonable security measures to protect your personal information from
            unauthorized access or disclosure. However, no internet transmission is 100% secure.
          </li>
          <li>
            <span className="font-bold">Data Retention</span>
            <br />
            We retain your personal data only as long as necessary for the purposes described in
            this policy or as required by law.
          </li>
          <li>
            <span className="font-bold">Your Rights</span>
            <br />
            Depending on your jurisdiction, you may have rights to:
            <ul className="list-disc pl-6 mt-2 text-base text-gramin-700">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time where applicable</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Children’s Privacy</span>
            <br />
            Our website and services are not intended for children under 13. We do not knowingly
            collect data from children.
          </li>
          <li>
            <span className="font-bold">Cookies and Tracking Technologies</span>
            <br />
            Our website uses cookies to enhance user experience. You can control cookie preferences
            through your browser settings.
          </li>
          <li>
            <span className="font-bold">Changes to This Privacy Policy</span>
            <br />
            We may update this policy periodically. We encourage you to review it regularly.
            Continued use of our site signifies acceptance of current terms.
          </li>
          <li>
            <span className="font-bold">Contact Us</span>
            <br />
            If you have questions, concerns, or requests regarding this Privacy Policy, please
            contact us at:
            <br />
            <span className="font-semibold">support@graminsetu.in</span>
            <br />
            <span className="font-semibold">Vishakapatnam, India</span>
          </li>
        </ol>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
