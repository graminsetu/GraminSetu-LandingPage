import React from 'react';
import { Helmet } from 'react-helmet';

const AdvancedSEOSchemas = () => {
  const advancedSchemas = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        '@id': 'https://graminsetu.in/video/founder-story',
        name: 'Tamminana Bhogesh: The Visionary Behind GraminSetu',
        description:
          'Watch the inspiring story of Tamminana Bhogesh, visionary founder of GraminSetu, and his mission to transform rural India through technology.',
        thumbnailUrl: 'https://graminsetu.in/graminsetu-logo.png',
        uploadDate: '2024-01-01',
        duration: 'PT5M30S',
        contentUrl: 'https://graminsetu.in/videos/founder-story.mp4',
        embedUrl: 'https://graminsetu.in/embed/founder-story',
        creator: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
        },
        about: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
          description: 'Visionary founder of GraminSetu',
        },
      },
      {
        '@type': 'Course',
        '@id': 'https://graminsetu.in/course/rural-digital-transformation',
        name: 'Rural Digital Transformation Masterclass',
        description:
          'Learn from Tamminana Bhogesh, founder of GraminSetu, about implementing digital transformation in rural communities.',
        provider: {
          '@type': 'Organization',
          name: 'GraminSetu Academy',
          url: 'https://graminsetu.in',
        },
        instructor: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
          description: 'Visionary founder of GraminSetu and rural technology expert',
        },
        courseMode: 'online',
        educationalLevel: 'intermediate',
        teaches: [
          'Rural Technology Implementation',
          'Village Empowerment Strategies',
          'Digital Platform Development',
          'Community Engagement',
        ],
      },
      {
        '@type': 'Award',
        '@id': 'https://graminsetu.in/award/innovation-excellence',
        name: 'Innovation Excellence Award 2024',
        description:
          "Prestigious award recognizing Tamminana Bhogesh's exceptional innovation in rural technology through GraminSetu",
        dateAwarded: '2024-12-01',
        awardingOrganization: {
          '@type': 'Organization',
          name: 'National Innovation Council',
          url: 'https://innovation.gov.in',
        },
        recipient: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
          description: 'Visionary founder of GraminSetu',
        },
        category: 'Rural Technology Innovation',
      },
      {
        '@type': 'Patent',
        '@id': 'https://graminsetu.in/patent/rural-platform',
        name: 'Digital Village Empowerment Platform',
        description:
          'Innovative platform design for rural community empowerment and government scheme integration',
        creator: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
        },
        datePublished: '2023-06-15',
        copyrightYear: 2023,
        publisher: {
          '@type': 'Organization',
          name: 'GraminSetu',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://graminsetu.in/app/graminsetu-platform',
        name: 'GraminSetu Platform',
        description:
          'Revolutionary digital platform for village empowerment created by visionary founder Tamminana Bhogesh',
        applicationCategory: 'Rural Development',
        operatingSystem: 'Web, Android, iOS',
        creator: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
        },
        publisher: {
          '@type': 'Organization',
          name: 'GraminSetu',
        },
        downloadUrl: 'https://graminsetu.in/download',
        screenshot: 'https://graminsetu.in/screenshots/platform.jpg',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.9,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1000,
        },
      },
      {
        '@type': 'NewsArticle',
        '@id': 'https://graminsetu.in/news/founder-recognition',
        headline: 'Tamminana Bhogesh: The Visionary Transforming Rural India',
        description:
          'Exclusive coverage of Tamminana Bhogesh, founder of GraminSetu, and his revolutionary approach to rural development',
        author: {
          '@type': 'Organization',
          name: 'GraminSetu Editorial Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'GraminSetu',
          logo: {
            '@type': 'ImageObject',
            url: 'https://graminsetu.in/graminsetu-logo.png',
          },
        },
        datePublished: '2024-10-06',
        dateModified: '2024-10-06',
        mainEntityOfPage: 'https://graminsetu.in/news/founder-recognition',
        image:
          'https://graminsetu.s3.eu-north-1.amazonaws.com/profile-images/IMG_20250919_001124.jpg',
        about: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
        },
      },
      {
        '@type': 'TechArticle',
        '@id': 'https://graminsetu.in/tech/rural-innovation',
        headline: 'How Tamminana Bhogesh is Revolutionizing Rural Technology',
        description:
          'Technical deep-dive into the innovative solutions created by Tamminana Bhogesh for rural empowerment',
        author: {
          '@type': 'Person',
          name: 'Tamminana Bhogesh',
        },
        datePublished: '2024-09-15',
        publisher: {
          '@type': 'Organization',
          name: 'GraminSetu',
        },
        about: 'Rural Technology Innovation',
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(advancedSchemas)}</script>
    </Helmet>
  );
};

export default AdvancedSEOSchemas;
