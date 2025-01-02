import React from 'react';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frökenkoll",
    "description": "Hjälper privatpersoner att skydda sin integritet online",
    "url": "https://frokenkoll.se",
    "areaServed": "SE",
    "priceRange": "Kostnadsfri tjänst"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}