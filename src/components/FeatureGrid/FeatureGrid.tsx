import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './features';
import { BackgroundEffects } from './BackgroundEffects';

export function FeatureGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-red-600 font-medium text-sm md:text-base tracking-wide uppercase mb-3 block">
            Skydda din integritet
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 tracking-tight leading-tight mb-6">
            Bli av med oönskad exponering
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vi hjälper dig att ta kontroll över din digitala närvaro och skydda din personliga information
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}