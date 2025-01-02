import React from 'react';

export function Performance() {
  React.useEffect(() => {
    // Preload kritiska resurser
    const preloadResources = [
      { href: '/fonts/serif.woff2', as: 'font', type: 'font/woff2' },
      { href: '/assets/index.css', as: 'style' }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });

    // Lazy loading av bilder
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
      lazyImages.forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
    }

    // Preconnect till externa domäner
    const preconnectDomains = [
      'https://res.cloudinary.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}