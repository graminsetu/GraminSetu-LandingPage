import React from 'react';
import { Helmet } from 'react-helmet';

const LocalBusinessSchema = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GraminSetu',
    alternateName: 'GraminSetu India',
    description:
      "India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO.",
    url: 'https://graminsetu.in',
    telephone: '+91-XXXXXXXXXX', // Add actual phone number
    email: 'contact@graminsetu.in',
    logo: 'https://graminsetu.in/graminsetu-logo.png',
    image: 'https://graminsetu.in/graminsetu-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address', // Add actual address
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your PIN Code',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.5937, // Center of India coordinates
      longitude: 78.9629,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'State',
        name: 'All Indian States',
      },
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'India',
    },
    founder: {
      '@type': 'Person',
      name: 'Tamminana Bhogesh',
      jobTitle: 'CEO & Founder',
    },
    foundingDate: '2023',
    sameAs: [
      'https://www.facebook.com/graminsetu',
      'https://twitter.com/graminsetu',
      'https://www.instagram.com/graminsetu/',
      'https://www.linkedin.com/company/graminsetu',
    ],
    priceRange: 'Free',
    paymentAccepted: ['Cash', 'Credit Card', 'Digital Payment'],
    currenciesAccepted: 'INR',
    openingHours: 'Mo-Su 00:00-23:59', // 24/7 digital platform
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GraminSetu Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Village Digital Platform',
            description: 'Digital platform for village communities',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Government Schemes Access',
            description: 'Access to government schemes and services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rural Empowerment',
            description: 'Rural community empowerment and development',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '500',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Village Community',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'GraminSetu has transformed our village with digital empowerment and access to government schemes.',
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
