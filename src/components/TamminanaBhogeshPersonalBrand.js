import React from 'react';
import { Helmet } from 'react-helmet';

const TamminanaBhogeshPersonalBrand = () => {
  const personalBrandSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://graminsetu.in/tamminana-bhogesh',
        name: 'Tamminana Bhogesh',
        alternateName: [
          'Bhogesh Tamminana',
          'Bhogesh',
          'Tamminana Bhogesh CEO',
          'Tamminana Bhogesh Founder',
          'Tamminana Bhogesh Visionary',
          'Bhogesh GraminSetu',
          'CEO Tamminana Bhogesh',
          'Founder Tamminana Bhogesh',
        ],
        description:
          "Tamminana Bhogesh is a visionary founder and CEO of GraminSetu, India's most trusted digital platform for villages. A pioneering entrepreneur in rural technology and digital transformation, he is revolutionizing rural India through innovative technology solutions.",
        jobTitle: [
          'Visionary Founder & CEO of GraminSetu',
          'Rural Technology Pioneer',
          'Digital Transformation Leader',
          'Rural Innovation Entrepreneur',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'CEO & Founder',
          occupationLocation: {
            '@type': 'Country',
            name: 'India',
          },
          skills: [
            'Rural Technology Innovation',
            'Digital Transformation',
            'Rural Development',
            'Entrepreneurship',
            'Technology Leadership',
            'Rural Empowerment',
          ],
        },
        knowsAbout: [
          'Rural Digital Transformation',
          'Village Empowerment Technologies',
          'Government Scheme Integration',
          'Rural Innovation',
          'Digital India Initiatives',
          'Rural Technology Solutions',
          'Community Development',
          'Rural Entrepreneurship',
          'Digital Platform Development',
          'Rural Economic Empowerment',
        ],
        expertise: [
          'Rural Technology',
          'Digital Village Platforms',
          'Rural Innovation',
          'Technology Entrepreneurship',
          'Digital Transformation',
          'Rural Development Strategy',
        ],
        url: 'https://graminsetu.in/about',
        image:
          'https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg',
        sameAs: [
          'https://www.linkedin.com/in/bhogesh/',
          'https://github.com/Bhogesh02',
          'https://graminsetu.in/about',
          'https://twitter.com/tamminana_bhogesh',
          'https://www.instagram.com/tamminana_bhogesh/',
        ],
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://graminsetu.in/#organization',
          name: 'GraminSetu',
        },
        foundedOrganization: {
          '@type': 'Organization',
          '@id': 'https://graminsetu.in/#organization',
          name: 'GraminSetu',
          description: "India's most trusted digital platform for villages",
        },
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        birthPlace: {
          '@type': 'Place',
          name: 'India',
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Technology Education Institute', // Add actual education details
          },
        ],
        award: [
          {
            '@type': 'Award',
            name: 'Rural Innovation Leadership Award',
            description: 'Recognized for pioneering digital transformation in rural India',
          },
          {
            '@type': 'Award',
            name: 'Young Entrepreneur in Rural Technology',
            description: 'Leading rural technology innovation in India',
          },
        ],
        seeks: {
          '@type': 'Thing',
          name: 'Rural Digital Transformation',
          description: 'Empowering every Indian village through technology',
        },
        owns: {
          '@type': 'Organization',
          name: 'GraminSetu',
          description: 'Digital platform for rural empowerment',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://graminsetu.in/tamminana-bhogesh-profile',
        mainEntity: {
          '@id': 'https://graminsetu.in/tamminana-bhogesh',
        },
        name: 'Tamminana Bhogesh - Visionary Founder of GraminSetu',
        description:
          'Learn about Tamminana Bhogesh, the visionary founder and CEO of GraminSetu who is revolutionizing rural India through innovative digital technology solutions.',
        url: 'https://graminsetu.in/about',
        isPartOf: {
          '@type': 'WebSite',
          name: 'GraminSetu',
          url: 'https://graminsetu.in',
        },
      },
      {
        '@type': 'Entrepreneur',
        '@id': 'https://graminsetu.in/tamminana-bhogesh-entrepreneur',
        name: 'Tamminana Bhogesh',
        description:
          'Visionary entrepreneur transforming rural India through GraminSetu digital platform',
        foundedOrganization: {
          '@id': 'https://graminsetu.in/#organization',
        },
        industry: 'Rural Technology and Digital Transformation',
        expertise: [
          'Rural Innovation',
          'Digital Platform Development',
          'Rural Empowerment Solutions',
          'Technology Entrepreneurship',
        ],
      },
      {
        '@type': 'PublicFigure',
        '@id': 'https://graminsetu.in/tamminana-bhogesh-leader',
        name: 'Tamminana Bhogesh',
        description:
          'Public figure and thought leader in rural digital transformation and village empowerment in India',
        publicRole: 'Rural Technology Visionary and GraminSetu Founder',
        influence: 'Rural development and digital transformation in India',
        notableWork: {
          '@type': 'CreativeWork',
          name: 'GraminSetu Platform',
          description: 'Revolutionary digital platform empowering Indian villages',
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personalBrandSchema)}</script>
    </Helmet>
  );
};

export default TamminanaBhogeshPersonalBrand;
