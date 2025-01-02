import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { SEO } from './components/SEO/SEO';
import { CookieBanner } from './components/CookieBanner/CookieBanner';
import { Hero } from './components/Hero/Hero';
import { FeatureGrid } from './components/FeatureGrid/FeatureGrid';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { RemovalService } from './components/RemovalService/RemovalService';
import { FreeService } from './components/FreeService/FreeService';
import { GetHelpSection } from './components/GetHelpSection/GetHelpSection';
import { FAQ } from './components/FAQ/FAQ';
import { routes } from './routes';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { Loading } from './components/shared/Loading';
import { getPageType } from './utils/pageUtils';

export default function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Simulera laddningstid för bättre UX
    const timer = setTimeout(() => setIsLoading(false), 500);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      clearTimeout(timer);
    };
  }, []);

  const renderContent = () => {
    const route = Object.values(routes).find(r => r.path === currentPath);
    
    if (route) {
      const Component = route.component;
      return <Component />;
    }

    return (
      <>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <RemovalService />
        <FreeService />
        <GetHelpSection />
        <FAQ />
      </>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <SEO page={getPageType()} />
        <Navigation />
        {renderContent()}
        <Footer />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
}