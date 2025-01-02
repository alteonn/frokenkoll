import React from 'react';
import { services } from './services';
import { ChevronDown } from 'lucide-react';

export function HeaderLinks() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const dropdownRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleNavigation = (url: string, internal: boolean, e: React.MouseEvent) => {
    e.preventDefault();
    if (internal) {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      window.location.href = url;
    }
  };

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, title: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDropdown(activeDropdown === title ? null : title);
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-6">
      {services.map((service) => (
        <div 
          key={service.title} 
          className="relative"
          onMouseEnter={() => 'links' in service && handleMouseEnter(service.title)}
          onMouseLeave={handleMouseLeave}
          ref={(el) => dropdownRefs.current[service.title] = el}
        >
          {'links' in service ? (
            <>
              <button 
                className="group flex items-center space-x-1.5 text-gray-600 hover:text-red-600 transition-colors py-2"
                onClick={() => setActiveDropdown(activeDropdown === service.title ? null : service.title)}
                onKeyDown={(e) => handleKeyDown(e, service.title)}
                aria-expanded={activeDropdown === service.title}
                aria-haspopup="true"
              >
                <span className="text-sm font-medium">{service.title}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === service.title ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div 
                className={`
                  absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none
                  transition-all duration-200
                  ${activeDropdown === service.title ? 'opacity-100 translate-y-0 pointer-events-auto' : ''}
                `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 relative">
                  {/* Decorative arrow */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45" />
                  
                  {service.links?.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      onClick={(e) => handleNavigation(link.url, !!link.internal, e)}
                      className="
                        block px-4 py-2 text-sm text-gray-600 hover:text-red-600
                        hover:bg-red-50 transition-colors relative group
                      "
                      role="menuitem"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <a
              href={service.internal ? service.path : service.url}
              onClick={(e) => handleNavigation(service.internal ? service.path : service.url, !!service.internal, e)}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors py-2 font-medium"
            >
              {service.icon && <service.icon className="w-4 h-4" />}
              <span>{service.title}</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}