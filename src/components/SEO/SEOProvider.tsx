import React from 'react';
import { seoConfig, getMetadata } from '../../seo/config';
import { SchemaOrg } from './SchemaOrg';
import { FAQSchema } from './FAQSchema';
import { Breadcrumbs } from './Breadcrumbs';
import { LocalBusinessSchema } from './LocalBusinessSchema';
import { faqData } from '../../seo/faqData';

interface SEOProviderProps {
  page: keyof typeof faqData;
  children: React.ReactNode;
}

export function SEOProvider({ page, children }: SEOProviderProps) {
  const metadata = getMetadata(page);
  const faqs = faqData[page];

  React.useEffect(() => {
    // Uppdatera meta-taggar
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata.keywords.join(', '));
    
    // Uppdatera Open Graph
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', metadata.url);
    
    // Uppdatera Twitter Cards
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    
    // Uppdatera canonical
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', metadata.url);
  }, [page, metadata]);

  return (
    <>
      <SchemaOrg page={page} />
      {faqs && <FAQSchema items={faqs} />}
      <LocalBusinessSchema />
      {children}
    </>
  );
}