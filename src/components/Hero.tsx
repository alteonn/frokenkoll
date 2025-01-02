import React from 'react';
import { FeatureList } from './FeatureList';

export function Hero() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#B8C9D7] rounded-bl-[100px] hidden md:block" />
      <div className="absolute right-0 top-0 w-full h-48 bg-[#B8C9D7] md:hidden" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-12 md:py-20 lg:py-32 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 md:mb-6">
            Dölj dina personliga uppgifter online
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10">
            Sverige möter nya säkerhetsutmaningar. Vi hjälper dig att skydda din personliga information online och värnar om din digitala integritet.
          </p>
          
          <FeatureList />

          <div className="mt-8 md:mt-10">
            <button className="w-full md:w-auto bg-gray-900 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Kom igång
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}