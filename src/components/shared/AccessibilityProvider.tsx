import React from 'react';

interface AccessibilityContextType {
  isReducedMotion: boolean;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

export const AccessibilityContext = React.createContext<AccessibilityContextType>({
  isReducedMotion: false,
  highContrast: false,
  toggleHighContrast: () => {},
});

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = React.useState(false);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <AccessibilityContext.Provider value={{ isReducedMotion, highContrast, toggleHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}