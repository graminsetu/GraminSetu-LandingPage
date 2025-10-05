import React from 'react';
import { Helmet } from 'react-helmet';

const PageSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Tamminana Bhogesh, Founder & CEO of GraminSetu',
  publishedTime,
  modifiedTime,
  breadcrumbs = [],
}) => {
  const defaultImage = 'https://graminsetu.in/graminsetu-logo.png';
  const baseUrl = 'https://graminsetu.in';

  const fullTitle = title
    ? `${title} | GraminSetu`
    : "GraminSetu | India's Trusted Digital Platform for Villages";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image || defaultImage;

  const defaultKeywords =
    'GraminSetu, graminsetu, graminsetu.in, graminsetu india, rural india, digital village, government schemes, village empowerment, Tamminana Bhogesh';
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GraminSetu" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@graminsetu" />
      <meta name="twitter:creator" content="@graminsetu" />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && <meta property="article:author" content={author} />}

      {/* Breadcrumb Structured Data */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs,
          })}
        </script>
      )}

      {/* Page-specific Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: fullTitle,
          description: description,
          url: fullUrl,
          image: fullImage,
          isPartOf: {
            '@type': 'WebSite',
            name: 'GraminSetu',
            url: baseUrl,
          },
          about: {
            '@type': 'Organization',
            name: 'GraminSetu',
          },
        })}
      </script>
    </Helmet>
  );
};

export default PageSEO;
