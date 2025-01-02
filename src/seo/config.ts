import { metadata } from './metadata';

export const seoConfig = {
  defaultTitle: 'Frökenkoll | Skydda dina personuppgifter online',
  titleTemplate: '%s | Frökenkoll',
  defaultDescription: 'Vi hjälper dig att ta kontroll över dina personuppgifter och skydda din digitala integritet.',
  siteUrl: 'https://frokenkoll.se',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    site_name: 'Frökenkoll'
  },
  twitter: {
    handle: '@frokenkoll',
    cardType: 'summary_large_image'
  }
};

export const getMetadata = (page: keyof typeof metadata) => {
  const pageMetadata = metadata[page];
  
  return {
    ...pageMetadata,
    url: `${seoConfig.siteUrl}${getPagePath(page)}`,
    modifiedTime: new Date().toISOString()
  };
};

const getPagePath = (page: keyof typeof metadata): string => {
  switch (page) {
    case 'home':
      return '/';
    case 'ratsit':
      return '/ratsit-borttagning';
    case 'mrkoll':
      return '/mrkoll-borttagning';
    // ... fortsätt med alla sidor
    default:
      return '/';
  }
};