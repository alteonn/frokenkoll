import React from 'react';
import { ChevronDown } from 'lucide-react';
import { services } from './services';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const handleNavigation = (url: string, internal: boolean, e: React.MouseEvent) => {
    e.preventDefault();
    if (internal) {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      window.location.href = url;
    }
    onClose();
  };

  return (
    <div 
      className={`fixed inset-0 bg-white md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ zIndex: 40 }}
    >
      <div className="h-full overflow-y-auto pt-20 pb-6 px-4">
        <div className="space-y-2">
          {services.map((service) => (
            <div key={service.title} className="border-b border-gray-100 last:border-0">
              {'links' in service ? (
                <div className="py-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === service.title ? null : service.title)}
                    className="flex items-center justify-between w-full text-base text-gray-600 hover:text-red-600 transition-colors py-3"
                  >
                    <span>{service.title}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === service.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div 
                    className={`pl-4 overflow-hidden transition-all duration-200 ${
                      activeDropdown === service.title ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="py-2 space-y-2">
                      {service.links?.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          onClick={(e) => handleNavigation(link.url, !!link.internal, e)}
                          className="block text-base text-gray-600 hover:text-red-600 transition-colors py-3"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={service.internal ? service.path : service.url}
                  onClick={(e) => handleNavigation(service.internal ? service.path : service.url, !!service.internal, e)}
                  className="flex items-center space-x-3 text-base text-gray-600 hover:text-red-600 transition-colors py-4"
                >
                  {service.icon && <service.icon className="w-5 h-5" />}
                  <span>{service.title}</span>
                </a>
              )}
            </div>
          ))}
          
          <div className="pt-6 text-center">
            <span className="inline-block text-sm text-red-600 border border-red-200 bg-red-50 rounded-full px-6 py-2">
              Tjänsten är kostnadsfri
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}