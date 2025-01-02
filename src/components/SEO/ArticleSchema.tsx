import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

export function ArticleSchema({ title, description, datePublished, dateModified, image }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "image": image || "https://frokenkoll.se/og-image.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Frökenkoll",
      "logo": {
        "@type": "ImageObject",
        "url": "https://frokenkoll.se/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}