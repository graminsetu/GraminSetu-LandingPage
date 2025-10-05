import React from 'react';
import { Helmet } from 'react-helmet';

const FAQStructuredData = () => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is GraminSetu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "GraminSetu is India's most trusted digital platform for villages. Founded by Tamminana Bhogesh, CEO, we connect and empower rural communities with technology, providing access to government schemes, community services, and rural opportunities.",
        },
      },
      {
        '@type': 'Question',
        name: 'Who founded GraminSetu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GraminSetu was founded by Tamminana Bhogesh, who serves as the CEO and Founder of the platform. He established GraminSetu to bridge the digital divide in rural India.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does GraminSetu help villages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GraminSetu helps villages by providing access to government schemes, connecting communities, enabling digital services, offering rural job opportunities, and facilitating transparent governance. Over 500+ villages are already transforming their future with GraminSetu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GraminSetu available across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, GraminSetu is designed to serve villages across India. Our platform focuses on rural empowerment and digital transformation for every Indian village.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I access GraminSetu services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can access GraminSetu services through our website at graminsetu.in. Our platform provides various business models for villages, government CSR partnerships, and NGO collaborations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes GraminSetu different from other rural platforms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "GraminSetu is India's most trusted digital platform specifically designed for villages. Founded by Tamminana Bhogesh with deep understanding of rural needs, we focus on community empowerment, transparent governance, and sustainable rural development.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqData)}</script>
    </Helmet>
  );
};

export default FAQStructuredData;
