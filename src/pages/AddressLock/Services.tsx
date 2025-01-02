import React from 'react';
import { Mail, Bell, Users, Lock } from 'lucide-react';

const services = [
  {
    icon: Lock,
    title: 'Adressändring och eftersändning',
    description: 'Bara du kan adressändra, eftersända eller pausa din post'
  },
  {
    icon: Bell,
    title: 'Varningar via e-post',
    description: 'När någon ändring sker hos Skatteverket varnas du via e-post'
  },
  {
    icon: Users,
    title: 'Folkbokföringsadress',
    description: 'Se skrivna personer på din folkbokföringsadress'
  }
];

export function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-900 mb-12 text-center">Detta ingår</h2>
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.adressandring.se/logga-in?returnUrl=%2Fmina-sidor%2Fadresslaset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            >
              <Lock className="w-5 h-5 mr-2" />
              Lås min adress
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}