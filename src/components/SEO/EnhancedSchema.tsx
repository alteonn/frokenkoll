import React from 'react';

interface EnhancedSchemaProps {
  page: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function EnhancedSchema({ page, title, description, datePublished, dateModified }: EnhancedSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://frokenkoll.se/#website",
        "url": "https://frokenkoll.se",
        "name": "Frökenkoll",
        "description": "Skydda dina personuppgifter online",
        "publisher": {
          "@type": "Organization",
          "name": "Frökenkoll",
          "logo": {
            "@type": "ImageObject",
            "url": "https://frokenkoll.se/logo.png"
          }
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://frokenkoll.se${page}#webpage`,
        "url": `https://frokenkoll.se${page}`,
        "name": title,
        "description": description,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "isPartOf": { "@id": "https://frokenkoll.se/#website" },
        "inLanguage": "sv-SE"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://frokenkoll.se${page}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://frokenkoll.se/",
              "url": "https://frokenkoll.se/",
              "name": "Hem"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": `https://frokenkoll.se${page}`,
              "url": `https://frokenkoll.se${page}`,
              "name": title
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}