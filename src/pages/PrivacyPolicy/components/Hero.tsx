import React from 'react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex mb-6">
            <div className="bg-red-500/10 p-3 rounded-xl">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Integritetspolicy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Vi värnar om din integritet och är transparenta med hur vi hanterar information på vår webbplats.
          </p>
        </div>
      </div>
    </div>
  );
}