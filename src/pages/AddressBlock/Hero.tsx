import React from 'react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Spärra obehörig adressändring
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Skydda dig mot bedrägerier och id-kapning genom att spärra obehöriga adressändringar. När spärren är aktiverad krävs BankID för alla adressändringar.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.skatteverket.se/privat/folkbokforing/flyttanmalan/sparraobehorigadressandring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Aktivera spärr hos Skatteverket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}