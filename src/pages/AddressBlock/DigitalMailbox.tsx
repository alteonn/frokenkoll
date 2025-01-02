import React from 'react';
import { Mail } from 'lucide-react';

export function DigitalMailbox() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-6">
            <div className="bg-red-50 p-4 rounded-xl">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Digital brevlåda</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Skaffa en säker digital brevlåda för myndighetspost och få meddelanden direkt när din folkbokföringsadress ändras. 
                Tjänsten är kostnadsfri och ger dig snabb kontroll över din adress.
              </p>
              <a 
                href="https://www.skatteverket.se/privat/etjansterochblanketter/digitalbrevlada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Skaffa digital brevlåda
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}