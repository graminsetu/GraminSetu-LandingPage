import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

// Microsoft Clarity: Load only if production and ID exists
// const clarityId = process.env.REACT_APP_CLARITY_ID;

// if (
//   process.env.NODE_ENV === 'production' &&
//   clarityId
// ) {
//   (function(c,l,a,r,i,t,y){
//     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
//     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
//     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
//   })(window, document, "clarity", "script", clarityId);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Service worker configuration
serviceWorkerRegistration.unregister();

// Performance reporting
reportWebVitals();
