import React from 'react';
import { Lock } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Adresslåset
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Skydda din adress genom att låsa den hos Adressändring. Förhindra att någon obehörig ändrar din adress eller lagrar och eftersänder din post. När adressen är låst kan beställningar enbart bekräftas med BankID.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.adressandring.se/vara-tjanster/adresslaset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            >
              <Lock className="w-5 h-5 mr-2" />
              Lås min adress
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}