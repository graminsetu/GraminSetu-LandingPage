import React from 'react';
import { Helmet } from 'react-helmet';

const BreadcrumbSEO = ({ breadcrumbs = [] }) => {
  // Default breadcrumb for homepage
  const defaultBreadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'GraminSetu Home',
      item: 'https://graminsetu.in/',
    },
  ];

  const breadcrumbList = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default BreadcrumbSEO;
