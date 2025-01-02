export const trackEvent = (category: string, action: string, label?: string) => {
  // GDPR-safe analytics tracking
  if (!document.cookie.includes('analytics-consent=true')) {
    return;
  }
  
  // Track event logic here
  console.log('Track:', { category, action, label });
};

export const trackPageView = (path: string) => {
  if (!document.cookie.includes('analytics-consent=true')) {
    return;
  }
  
  // Page view tracking logic here
  console.log('Page view:', path);
};