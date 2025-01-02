import React from 'react';
import { metadata } from '../../seo/metadata';

interface SchemaOrgProps {
  page: keyof typeof metadata;
}

export function SchemaOrg({ page }: SchemaOrgProps) {
  const pageMetadata = metadata[page];
  
  if (!pageMetadata) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageMetadata.title,
    "description": pageMetadata.description,
    "publisher": {
      "@type": "Organization",
      "name": "Frökenkoll",
      "url": "https://frokenkoll.se"
    },
    "mainEntity": {
      "@type": "HowTo",
      "name": pageMetadata.title,
      "description": pageMetadata.description,
      "step": [
        {
          "@type": "HowToStep",
          "text": "Följ vår guide för att skydda dina personuppgifter"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}