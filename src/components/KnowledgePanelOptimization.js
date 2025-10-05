import React from 'react';
import { Helmet } from 'react-helmet';

const KnowledgePanelOptimization = () => {
  const knowledgePanelSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://graminsetu.in/knowledge-panel/tamminana-bhogesh',
        name: 'Tamminana Bhogesh',
        alternateName: [
          'Bhogesh Tamminana',
          'Tamminana Bhogesh CEO GraminSetu',
          'Visionary Founder Tamminana Bhogesh',
          'GraminSetu Founder Bhogesh',
        ],
        headline: 'Visionary Founder of GraminSetu - Transforming Rural India',
        description:
          "Tamminana Bhogesh is a visionary founder and CEO of GraminSetu, India's most trusted digital platform for villages. He is a pioneering entrepreneur revolutionizing rural India through innovative technology solutions and digital transformation initiatives.",
        image: {
          '@type': 'ImageObject',
          url: 'https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg',
          caption: 'Tamminana Bhogesh - Visionary Founder of GraminSetu',
          width: 400,
          height: 400,
        },
        jobTitle: 'Visionary Founder & CEO',
        worksFor: {
          '@type': 'Organization',
          name: 'GraminSetu',
          url: 'https://graminsetu.in',
          description: "India's most trusted digital platform for villages",
        },
        foundedOrganization: {
          '@type': 'Organization',
          name: 'GraminSetu',
          foundingDate: '2023',
          description: 'Revolutionary digital platform for rural empowerment in India',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Technology Leadership',
            credentialCategory: 'Professional Experience',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Rural Innovation Expert',
            credentialCategory: 'Industry Expertise',
          },
        ],
        knowsAbout: [
          'Rural Digital Transformation',
          'Village Technology Solutions',
          'Digital India Initiatives',
          'Rural Entrepreneurship',
          'Government Scheme Integration',
          'Community Empowerment',
          'Rural Innovation',
          'Technology for Social Good',
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          url: 'https://graminsetu.in/about',
          name: 'About Tamminana Bhogesh - GraminSetu Founder',
        },
        url: 'https://graminsetu.in/about',
        sameAs: [
          'https://www.linkedin.com/in/bhogesh/',
          'https://github.com/Bhogesh02',
          'https://graminsetu.in/about',
        ],
        nationality: 'Indian',
        birthPlace: 'India',
        homeLocation: 'India',
        workLocation: 'India',
        seeks: 'Empowering rural India through digital technology',
        memberOf: [
          {
            '@type': 'Organization',
            name: 'Rural Technology Leaders',
            description: 'Community of technology leaders focused on rural development',
          },
          {
            '@type': 'Organization',
            name: 'Digital India Entrepreneurs',
            description: 'Network of entrepreneurs driving digital transformation in India',
          },
        ],
        award: [
          {
            '@type': 'Award',
            name: 'Rural Innovation Pioneer',
            description: 'Recognized for pioneering digital solutions for rural communities',
            dateAwarded: '2024',
          },
          {
            '@type': 'Award',
            name: 'Technology Entrepreneur of the Year',
            description: 'Leading rural technology innovation in India',
            dateAwarded: '2024',
          },
        ],
        achievement: [
          "Founded GraminSetu - India's most trusted digital platform for villages",
          'Empowered 500+ villages through digital transformation',
          'Pioneer in rural technology solutions',
          'Thought leader in village empowerment strategies',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://graminsetu.in/about-tamminana-bhogesh',
        mainEntity: {
          '@id': 'https://graminsetu.in/knowledge-panel/tamminana-bhogesh',
        },
        name: 'Tamminana Bhogesh - Visionary Founder of GraminSetu',
        description:
          'Meet Tamminana Bhogesh, the visionary founder and CEO of GraminSetu who is transforming rural India through innovative digital technology solutions.',
        url: 'https://graminsetu.in/about',
        isPartOf: {
          '@type': 'WebSite',
          name: 'GraminSetu Official Website',
          url: 'https://graminsetu.in',
        },
        about: {
          '@id': 'https://graminsetu.in/knowledge-panel/tamminana-bhogesh',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'GraminSetu',
            item: 'https://graminsetu.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://graminsetu.in/about',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Tamminana Bhogesh - Founder',
            item: 'https://graminsetu.in/about#founder',
          },
        ],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(knowledgePanelSchema)}</script>
    </Helmet>
  );
};

export default KnowledgePanelOptimization;
