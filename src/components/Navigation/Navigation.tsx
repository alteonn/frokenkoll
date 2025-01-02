import React from 'react';
import { Menu, X } from 'lucide-react';
import { HeaderLinks } from './HeaderLinks';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../Logo/Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <Logo />
            <span className="text-sm text-red-600 border border-red-200 bg-red-50 rounded-full px-4 py-1.5 hidden sm:inline-block">
              Tjänsten är kostnadsfri
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HeaderLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-red-600 transition-colors"
            aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={isOpen}
            style={{ zIndex: 50 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}