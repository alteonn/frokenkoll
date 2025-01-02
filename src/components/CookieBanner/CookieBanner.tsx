import React from 'react';
import { Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // Delay the check to ensure hydration is complete
    const timer = setTimeout(() => {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
      setIsVisible(!hasAcceptedCookies);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  // Don't render anything during initial check
  if (isVisible === null) return null;
  
  // Don't render if banner should be hidden
  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg animate-fade-in"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
              <Cookie className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                Vi använder endast nödvändiga cookies för att säkerställa webbplatsens grundläggande funktionalitet.{' '}
                <a 
                  href="/cookies"
                  className="text-red-600 hover:text-red-700 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/cookies');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                    setIsVisible(false);
                  }}
                >
                  Läs mer om cookies
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={acceptCookies}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium whitespace-nowrap"
            >
              Acceptera cookies
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Stäng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}