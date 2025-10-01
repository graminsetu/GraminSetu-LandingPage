import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    {/* Basic SEO Meta Tags */}
    <title>GraminSetu | Home</title>
    <meta
      name="description"
      content="GraminSetu, founded by Tamminana Bhogesh, connects and empowers rural communities with technology."
    />
    <meta name="author" content="Tamminana Bhogesh" />
    <meta
      name="keywords"
      content="GraminSetu, Rural, Technology, India, Bhogesh, Community, Empowerment, Founder, Tamminana Bhogesh"
    />

    {/* OpenGraph Meta Tags */}
    <meta property="og:title" content="GraminSetu – Empowering Rural Communities with Technology" />
    <meta
      property="og:description"
      content="GraminSetu, founded by Tamminana Bhogesh, connects and empowers rural communities with technology."
    />
    <meta property="og:image" content="https://graminsetu.com/logo.png" />
    <meta property="og:url" content="https://graminsetu.com" />
    <meta property="og:type" content="website" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="GraminSetu – Empowering Rural Communities with Technology"
    />
    <meta
      name="twitter:description"
      content="GraminSetu, founded by Tamminana Bhogesh, connects and empowers rural communities with technology."
    />
    <meta name="twitter:image" content="https://graminsetu.com/logo.png" />

    {/* Structured Data: Person & Organization */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GraminSetu",
          "url": "https://graminsetu.com",
          "logo": "https://graminsetu.com/logo.png",
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
          "description": "GraminSetu, founded by Tamminana Bhogesh, connects and empowers rural communities with technology."
        }
      `}
    </script>
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tamminana Bhogesh",
          "jobTitle": "CEO & Founder",
          "image": "https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg",
          "url": "https://graminsetu.com",
          "sameAs": [
            "https://www.linkedin.com/in/bhogesh/",
            "https://github.com/Bhogesh02"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "GraminSetu",
            "url": "https://graminsetu.com"
          }
        }
      `}
    </script>
  </Helmet>
);

export default SEO;
