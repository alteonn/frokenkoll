import React from 'react';

export function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Ta bort personuppgifter från Google
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Enligt EU:s sekretesslag har du möjlighet att begära borttagning av sökträffar på Google som innehåller dina personuppgifter.
          </p>
        </div>
      </div>
    </div>
  );
}