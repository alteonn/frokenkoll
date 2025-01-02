import React from 'react';
import { UserX } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Dölj dig från Ratsit
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Du kan dölja dig själv i Ratsits öppna sök i 12 månader genom att logga in med BankID eller kontakta kundservice för permanent borttagning.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.ratsit.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            >
              <UserX className="w-5 h-5 mr-2" />
              Logga in på Ratsit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}