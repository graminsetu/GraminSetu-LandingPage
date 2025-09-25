

import Logo from '../components/Logo/Logo';
import graminsetuLogo from '../assets/images/graminsetu-logo.png';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';



const Terms = () => (
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">Terms of Service</h1>
        <p className="text-lg text-gramin-700 text-center max-w-2xl mb-4">
          Effective Date: <span className="font-semibold">[Insert Date]</span>
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-gramin-100 max-w-3xl w-full mx-auto p-8 md:p-12 animate-fade-in">
        <ol className="list-decimal list-inside text-gramin-800 text-lg space-y-6">
          <li>
            <span className="font-bold">Use of Our Services</span><br/>
            You agree to use GraminSetu lawfully and responsibly, respecting all applicable laws and regulations.<br/>
            You must provide accurate information when interacting with our platform, including during registration, submissions, or communications.
          </li>
          <li>
            <span className="font-bold">Intellectual Property</span><br/>
            All content, trademarks, logos, software, data, and materials on GraminSetu are owned by or licensed to us.<br/>
            Unauthorized use, reproduction, or distribution of our intellectual property is prohibited without prior written permission.
          </li>
          <li>
            <span className="font-bold">User Content and Submissions</span><br/>
            By submitting job applications, demo requests, or contact information, you agree that GraminSetu may store, use, and process this data as described in our Privacy Policy.<br/>
            You grant us a non-exclusive, worldwide, royalty-free license to use submitted content for providing and improving our services.
          </li>
          <li>
            <span className="font-bold">Privacy and Data Protection</span><br/>
            We value your privacy and handle personal information in accordance with our Privacy Policy.<br/>
            Please review our Privacy Policy to understand how your data is collected, used, and protected.
          </li>
          <li>
            <span className="font-bold">Limitation of Liability</span><br/>
            GraminSetu strives for accuracy and reliability but does not guarantee errors or omissions will be corrected immediately.<br/>
            We disclaim all liability for any indirect, incidental, consequential, or punitive damages arising out of your use of our website or services.
          </li>
          <li>
            <span className="font-bold">Modifications to Services and Terms</span><br/>
            We reserve the right to modify or discontinue services at any time without prior notice.<br/>
            These Terms may be updated periodically. Continued use of GraminSetu constitutes acceptance of the updated Terms.
          </li>
          <li>
            <span className="font-bold">Governing Law and Dispute Resolution</span><br/>
            These Terms are governed by the laws of India.<br/>
            Any disputes arising out of or in connection with these Terms shall be resolved amicably or, if necessary, by arbitration or in courts located in <span className="font-semibold">[Your City]</span>, India.
          </li>
          <li>
            <span className="font-bold">Contact Us</span><br/>
            For questions or concerns regarding these Terms, please contact us at: <span className="font-semibold">[Insert official contact email]</span>
          </li>
        </ol>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
