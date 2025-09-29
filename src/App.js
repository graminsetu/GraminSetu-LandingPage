import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WorkInProgress from './pages/WorkInProgress';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Schemes from './pages/Schemes.jsx';
import Policies from './pages/Policies.jsx';
import Careers from './pages/Careers.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';

import { Suspense, lazy } from 'react';
import PageTitle from './components/PageTitle';
import Blog from './pages/Blog.jsx';
import LoginVillage from './pages/LoginVillage.jsx';
import LoginBusiness from './pages/LoginBusiness.jsx';
import LoginGovernment from './pages/LoginGovernment.jsx';

const VillageBusinessModel = lazy(() => import('./businessModels/VillageBusinessModel.jsx'));
const BusinessNgoBusinessModel = lazy(
  () => import('./businessModels/BusinessNgoBusinessModel.jsx')
);
const GovernmentCsrBusinessModel = lazy(
  () => import('./businessModels/GovernmentCsrBusinessModel.jsx')
);

function PageTitleWithLocation() {
  const location = useLocation();
  return <PageTitle pathname={location.pathname} />;
}

function App() {
  return (
    <Router>
      <PageTitleWithLocation />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/village-business-model" element={<VillageBusinessModel />} />
          <Route path="/business/ngo-business-model" element={<BusinessNgoBusinessModel />} />
          <Route path="/government-csr-business-model" element={<GovernmentCsrBusinessModel />} />
          <Route path="/login/village" element={<LoginVillage />} />
          <Route path="/login/business" element={<LoginBusiness />} />
          <Route path="/login/government" element={<LoginGovernment />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
