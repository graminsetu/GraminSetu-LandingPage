import React from 'react';
import { Helmet } from 'react-helmet';

const Analytics = () => {
  return (
    <Helmet>
      {/* Google Analytics 4 - Already configured in index.html */}

      {/* Google Search Console Verification */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

      {/* Bing Webmaster Tools Verification */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

      {/* Yandex Webmaster Verification */}
      {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}

      {/* Additional Analytics Scripts */}

      {/* Facebook Pixel (Optional) */}
      {/* <script>{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
      `}</script> */}

      {/* LinkedIn Insight Tag (Optional) */}
      {/* <script type="text/javascript">{`
        _linkedin_partner_id = "YOUR_PARTNER_ID";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}</script> */}

      {/* Hotjar Tracking Code (Optional) */}
      {/* <script>{`
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}</script> */}

      {/* Google Tag Manager (Optional - Alternative to GA4) */}
      {/* <script>{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');
      `}</script> */}

      {/* Structured Data for Enhanced Analytics */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'GraminSetu',
          url: 'https://graminsetu.in',
          applicationCategory: 'Rural Development Platform',
          operatingSystem: 'Web Browser',
          description: "India's most trusted digital platform for villages",
          author: {
            '@type': 'Person',
            name: 'Tamminana Bhogesh',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        })}
      </script>
    </Helmet>
  );
};

export default Analytics;
