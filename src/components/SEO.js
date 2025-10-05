import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    {/* Basic SEO Meta Tags */}
    <title>GraminSetu | India's Trusted Digital Platform for Villages | Official Website</title>
    <meta
      name="description"
      content="GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. Connect with your community, access government schemes, and unlock rural opportunities. Join 500+ villages transforming their future with GraminSetu's innovative technology solutions."
    />
    <meta name="author" content="Tamminana Bhogesh, Founder & CEO of GraminSetu" />
    <meta
      name="keywords"
      content="GraminSetu, graminsetu, graminsetu.in, graminsetu india, graminsetu platform, graminsetu official, graminsetu website, gramin setu, rural india, digital village platform, government schemes, village empowerment, rural technology, indian villages, village development, Tamminana Bhogesh, rural digital transformation, village services, rural opportunities, community platform, bharat villages, gram panchayat, rural innovation, village connectivity, digital india villages"
    />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <link rel="canonical" href="https://graminsetu.in/" />

    {/* OpenGraph Meta Tags */}
    <meta
      property="og:title"
      content="GraminSetu | India's Trusted Digital Platform for Villages | Official Website"
    />
    <meta property="og:site_name" content="GraminSetu" />
    <meta
      property="og:description"
      content="GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. Connect with your community, access government schemes, and unlock rural opportunities. Join 500+ villages transforming their future."
    />
    <meta property="og:image" content="https://graminsetu.in/graminsetu-logo.png" />
    <meta property="og:url" content="https://graminsetu.in/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:locale:alternate" content="hi_IN" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="GraminSetu | India's Trusted Digital Platform for Villages"
    />
    <meta
      name="twitter:description"
      content="GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. Access government schemes, connect with your community, and unlock rural opportunities."
    />
    <meta name="twitter:image" content="https://graminsetu.in/graminsetu-logo.png" />
    <meta name="twitter:site" content="@graminsetu" />
    <meta name="twitter:creator" content="@graminsetu" />

    {/* Structured Data: Organization */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GraminSetu",
          "alternateName": ["Gramin Setu", "GraminSetu India", "GraminSetu Platform"],
          "url": "https://graminsetu.in",
          "logo": "https://graminsetu.in/graminsetu-logo.png",
          "description": "GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. We connect and empower rural communities with technology, providing access to government schemes, community services, and rural opportunities.",
          "foundingDate": "2023",
          "founder": {
            "@type": "Person",
            "name": "Tamminana Bhogesh",
            "jobTitle": "CEO & Founder",
            "image": "https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/bhogesh/",
              "https://github.com/Bhogesh02"
            ]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
          },
          "sameAs": [
            "https://www.facebook.com/graminsetu",
            "https://twitter.com/graminsetu",
            "https://www.instagram.com/graminsetu/",
            "https://www.linkedin.com/company/graminsetu"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@graminsetu.in"
          },
          "keywords": "graminsetu, rural india, digital village platform, government schemes, village empowerment, rural technology, indian villages"
        }
      `}
    </script>
    {/* Structured Data: Website */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "GraminSetu",
          "alternateName": "GraminSetu India",
          "url": "https://graminsetu.in/",
          "description": "GraminSetu is India's most trusted digital platform for villages.",
          "publisher": {
            "@type": "Organization",
            "name": "GraminSetu"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://graminsetu.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      `}
    </script>

    {/* Structured Data: Person - Founder */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tamminana Bhogesh",
          "alternateName": ["Bhogesh Tamminana", "Bhogesh", "Tamminana Bhogesh CEO GraminSetu"],
          "jobTitle": "CEO & Founder",
          "image": "https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg",
          "url": "https://graminsetu.in/about",
          "description": "Tamminana Bhogesh is the Founder and CEO of GraminSetu, India's most trusted digital platform for villages.",
          "sameAs": [
            "https://www.linkedin.com/in/bhogesh/",
            "https://github.com/Bhogesh02"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "GraminSetu",
            "url": "https://graminsetu.in"
          },
          "foundedOrganization": {
            "@type": "Organization",
            "name": "GraminSetu"
          }
        }
      `}
    </script>
  </Helmet>
);

export default SEO;
