import React from 'react';
import { HelpCircle } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="bg-red-50 p-4 rounded-xl">
                <HelpCircle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4">Behöver du hjälp?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Om du har frågor eller behöver hjälp med processen kan du läsa mer i Hitta.se:s hjälpcenter eller kontakta deras kundtjänst.
                </p>
                <a 
                  href="https://hitta.zendesk.com/hc/sv/articles/207655179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
                >
                  Läs mer i hjälpcentret
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}