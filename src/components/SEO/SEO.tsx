import React from 'react';
import { Helmet } from 'react-helmet-async';
import { metadata } from '../../seo/metadata';
import { isValidPageType } from '../../seo/utils';

interface SEOProps {
  page: string;
}

export function SEO({ page }: SEOProps) {
  const validPageType = isValidPageType(page) ? page : 'home';
  const pageMetadata = metadata[validPageType];

  if (!pageMetadata) return null;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://frokenkoll.se${window.location.pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Frökenkoll" />
      <meta property="og:url" content={`https://frokenkoll.se${window.location.pathname}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      
      {/* Language */}
      <html lang="sv" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}