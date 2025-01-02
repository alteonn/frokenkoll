import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex mb-6">
            <div className="bg-red-500/10 p-3 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            GDPR
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Information om dina rättigheter enligt dataskyddsförordningen (GDPR) och hur vi hjälper dig att utöva dem.
          </p>
        </div>
      </div>
    </div>
  );
}