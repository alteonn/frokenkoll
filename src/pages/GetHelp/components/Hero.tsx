import React from 'react';
import { HelpingHand } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex mb-6">
            <div className="bg-red-500/10 p-3 rounded-xl">
              <HelpingHand className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Få hjälp
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Behöver du snabb hjälp med att ta bort oönskade länkar från Google? Vi har hjälpt hundratals personer under många år och kan assistera dig mot en låg ersättning.
          </p>
        </div>
      </div>
    </div>
  );
}