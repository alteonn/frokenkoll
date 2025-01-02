import React from 'react';
import { UserX } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Dölj dig från MrKoll
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Du kan radera dina uppgifter från MrKoll genom att använda BankID eller kontakta deras kundservice för borttagning.
          </p>
          <div className="mt-8">
            <a 
              href="https://mrkoll.se/om/andra-uppgifter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            >
              <UserX className="w-5 h-5 mr-2" />
              Ändra uppgifter på MrKoll
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}