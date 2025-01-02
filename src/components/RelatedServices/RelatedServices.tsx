import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from './services';

interface RelatedServicesProps {
  currentPath: string;
}

export function RelatedServices({ currentPath }: RelatedServicesProps) {
  const relatedServices = services.filter(service => service.path !== currentPath);

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            Andra skyddstjänster
          </h2>
          <p className="text-lg text-gray-600">
            Utforska fler sätt att skydda din integritet online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <a
              key={service.path}
              href={service.path}
              onClick={(e) => handleNavigation(service.path, e)}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-red-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-600 text-sm font-medium">
                    <span>Läs mer</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}