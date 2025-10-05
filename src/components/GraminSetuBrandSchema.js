import React from 'react';
import { Helmet } from 'react-helmet';

const GraminSetuBrandSchema = () => {
  const brandSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://graminsetu.in/#organization',
        name: 'GraminSetu',
        alternateName: [
          'GraminSetu India',
          'Gramin Setu',
          'GraminSetu Platform',
          'GraminSetu Official',
        ],
        url: 'https://graminsetu.in',
        sameAs: [
          'https://www.facebook.com/graminsetu',
          'https://twitter.com/graminsetu',
          'https://www.instagram.com/graminsetu/',
          'https://www.linkedin.com/company/graminsetu',
        ],
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://graminsetu.in/#logo',
          url: 'https://graminsetu.in/graminsetu-logo.png',
          contentUrl: 'https://graminsetu.in/graminsetu-logo.png',
          caption: 'GraminSetu Logo',
        },
        image: {
          '@id': 'https://graminsetu.in/#logo',
        },
        description:
          "GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO. We connect and empower rural communities with technology, providing access to government schemes, community services, and rural opportunities.",
        founder: {
          '@type': 'Person',
          '@id': 'https://graminsetu.in/#founder',
          name: 'Tamminana Bhogesh',
          alternateName: [
            'Bhogesh Tamminana',
            'Bhogesh',
            'Tamminana Bhogesh CEO',
            'GraminSetu Founder',
          ],
          jobTitle: 'CEO & Founder',
          worksFor: {
            '@id': 'https://graminsetu.in/#organization',
          },
        },
        foundingDate: '2023',
        keywords:
          'graminsetu, rural india, digital village platform, government schemes, village empowerment, rural technology, indian villages',
        slogan: 'Empowering Every Indian Village Digitally',
        knowsAbout: [
          'Rural Development',
          'Digital Village Platforms',
          'Government Schemes',
          'Rural Technology',
          'Village Empowerment',
          'Digital India',
          'Rural Innovation',
        ],
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: 'India',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://graminsetu.in/#website',
        url: 'https://graminsetu.in',
        name: 'GraminSetu',
        alternateName: 'GraminSetu India',
        description: "India's most trusted digital platform for villages",
        publisher: {
          '@id': 'https://graminsetu.in/#organization',
        },
        inLanguage: 'en-IN',
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://graminsetu.in/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://graminsetu.in/#founder',
        name: 'Tamminana Bhogesh',
        alternateName: [
          'Bhogesh Tamminana',
          'Bhogesh',
          'Tamminana Bhogesh CEO GraminSetu',
          'GraminSetu Founder Bhogesh',
        ],
        jobTitle: 'CEO & Founder of GraminSetu',
        description:
          "Tamminana Bhogesh is the Founder and CEO of GraminSetu, India's most trusted digital platform for villages. He established GraminSetu to bridge the digital divide in rural India.",
        knowsAbout: [
          'Rural Development',
          'Digital Transformation',
          'Village Empowerment',
          'Technology Innovation',
          'Rural India',
          'Government Schemes',
        ],
        worksFor: {
          '@id': 'https://graminsetu.in/#organization',
        },
        foundedOrganization: {
          '@id': 'https://graminsetu.in/#organization',
        },
        sameAs: ['https://www.linkedin.com/in/bhogesh/', 'https://github.com/Bhogesh02'],
        url: 'https://graminsetu.in/about',
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
    </Helmet>
  );
};

export default GraminSetuBrandSchema;
