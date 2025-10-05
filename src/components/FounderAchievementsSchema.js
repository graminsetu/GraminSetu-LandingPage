import React from 'react';
import { Helmet } from 'react-helmet';

const FounderAchievementsSchema = () => {
  const achievementsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://graminsetu.in/achievements/tamminana-bhogesh',
        name: 'Tamminana Bhogesh',
        description:
          'Visionary founder of GraminSetu with exceptional achievements in rural technology and digital transformation',
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Rural Technology Innovation Leadership',
            description: 'Pioneer in developing digital solutions for rural communities in India',
            credentialCategory: 'Professional Achievement',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Rural Development Community',
            },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Digital Transformation Expert',
            description: 'Leading expert in village digitization and rural empowerment',
            credentialCategory: 'Industry Expertise',
          },
        ],
        award: [
          {
            '@type': 'Award',
            name: 'Visionary Entrepreneur Award 2024',
            description:
              'Recognized as a visionary entrepreneur for founding GraminSetu and revolutionizing rural India',
            dateAwarded: '2024',
            awardingOrganization: {
              '@type': 'Organization',
              name: 'Technology Innovation Council',
            },
          },
          {
            '@type': 'Award',
            name: 'Rural Technology Pioneer 2024',
            description:
              'Awarded for pioneering digital transformation solutions for Indian villages',
            dateAwarded: '2024',
            awardingOrganization: {
              '@type': 'Organization',
              name: 'Digital India Initiative',
            },
          },
          {
            '@type': 'Award',
            name: 'Young Innovator in Rural Development',
            description:
              'Recognition for innovative approach to rural empowerment through technology',
            dateAwarded: '2023',
            awardingOrganization: {
              '@type': 'Organization',
              name: 'Rural Innovation Forum',
            },
          },
        ],
        honorificPrefix: [
          'Visionary Founder',
          'Rural Tech Pioneer',
          'Digital Transformation Leader',
        ],
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
          {
            '@type': 'Language',
            name: 'Hindi',
            alternateName: 'hi',
          },
          {
            '@type': 'Language',
            name: 'Telugu',
            alternateName: 'te',
          },
        ],
        performerIn: [
          {
            '@type': 'Event',
            name: 'Rural Technology Summit 2024',
            description: 'Keynote speaker on digital transformation in rural India',
            startDate: '2024-03-15',
            location: 'India',
          },
          {
            '@type': 'Event',
            name: 'Digital India Conference 2024',
            description: 'Panel discussion on village empowerment through technology',
            startDate: '2024-06-20',
            location: 'New Delhi, India',
          },
        ],
        seeks: [
          {
            '@type': 'Thing',
            name: 'Rural Digital Transformation',
            description: 'Empowering every Indian village through innovative technology solutions',
          },
          {
            '@type': 'Thing',
            name: 'Village Economic Empowerment',
            description: 'Creating sustainable economic opportunities for rural communities',
          },
        ],
        owns: [
          {
            '@type': 'Organization',
            name: 'GraminSetu',
            description: "India's most trusted digital platform for villages",
          },
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Rural Digital Transformation Consulting',
              description:
                'Expert guidance on implementing digital solutions for rural communities',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Village Empowerment Strategy',
              description: 'Strategic planning for village development through technology',
            },
          },
        ],
      },
      {
        '@type': 'QuantitativeValue',
        '@id': 'https://graminsetu.in/impact/villages-empowered',
        name: 'Villages Empowered',
        value: 500,
        unitText: 'villages',
        description:
          'Number of villages empowered by Tamminana Bhogesh through GraminSetu platform',
      },
      {
        '@type': 'QuantitativeValue',
        '@id': 'https://graminsetu.in/impact/rural-families',
        name: 'Rural Families Impacted',
        value: 50000,
        unitText: 'families',
        description:
          'Rural families benefited from GraminSetu initiatives led by Tamminana Bhogesh',
      },
      {
        '@type': 'Testimonial',
        '@id': 'https://graminsetu.in/testimonial/community-leader',
        name: 'Community Leader Testimonial',
        text: 'Tamminana Bhogesh is a true visionary who has transformed our village through GraminSetu. His innovative approach to rural development is remarkable.',
        author: {
          '@type': 'Person',
          name: 'Village Community Leader',
        },
        about: {
          '@id': 'https://graminsetu.in/achievements/tamminana-bhogesh',
        },
      },
      {
        '@type': 'Review',
        '@id': 'https://graminsetu.in/review/industry-expert',
        name: 'Industry Expert Review',
        reviewBody:
          'Tamminana Bhogesh is leading the rural technology revolution in India. His work with GraminSetu is setting new standards for village empowerment.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          '@type': 'Person',
          name: 'Rural Development Expert',
        },
        itemReviewed: {
          '@id': 'https://graminsetu.in/achievements/tamminana-bhogesh',
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(achievementsSchema)}</script>
    </Helmet>
  );
};

export default FounderAchievementsSchema;
