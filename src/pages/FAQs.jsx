import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import FAQStructuredData from '../components/FAQStructuredData';
import PageSEO from '../components/PageSEO';
import { useLocation } from 'react-router-dom';

const FAQs = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-gramin-100 font-sans flex flex-col">
      <PageTitle pathname={location.pathname} />
      <PageSEO title="FAQs" description="Frequently asked questions about GraminSetu" url="/faqs" />
      <FAQStructuredData />

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto py-8 px-4">
        <FAQ />
      </main>

      <Footer />
      <HelpSupportButton />
    </div>
  );
};

export default FAQs;
