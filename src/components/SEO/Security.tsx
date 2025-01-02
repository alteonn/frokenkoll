import React from 'react';

export function Security() {
  React.useEffect(() => {
    const securityHeaders = [
      {
        name: 'Content-Security-Policy',
        content: "default-src 'self'; img-src 'self' https://res.cloudinary.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      },
      {
        name: 'X-Content-Type-Options',
        content: 'nosniff'
      },
      {
        name: 'X-Frame-Options',
        content: 'DENY'
      },
      {
        name: 'X-XSS-Protection',
        content: '1; mode=block'
      },
      {
        name: 'Referrer-Policy',
        content: 'strict-origin-when-cross-origin'
      }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  }, []);

  return null;
}