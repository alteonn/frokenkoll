import React from 'react';
import { Cookie } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex mb-6">
            <div className="bg-red-500/10 p-3 rounded-xl">
              <Cookie className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Cookies
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Vi använder endast nödvändiga cookies för att säkerställa webbplatsens grundläggande funktionalitet. Här förklarar vi hur vi använder cookies och varför.
          </p>
        </div>
      </div>
    </div>
  );
}