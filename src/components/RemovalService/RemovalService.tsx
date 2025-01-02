import React from 'react';
import { ProcessSteps } from './ProcessSteps';
import { Timeline } from './Timeline';
import { BackgroundEffects } from './BackgroundEffects';

export function RemovalService() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="text-red-600 font-medium text-sm md:text-base tracking-wide uppercase mb-3 block animate-fade-in [animation-delay:0.1s] opacity-0">
            Digital integritet
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1] mb-6 animate-fade-in [animation-delay:0.2s] opacity-0">
            Ta kontroll över din digitala närvaro
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in [animation-delay:0.3s] opacity-0">
            Vi förklarar steg för steg hur du kan hantera din{' '}
            <span className="text-red-600 font-medium">digitala integritet</span>{' '}
            och ta bort oönskade spår på internet
          </p>
        </div>

        <div className="mt-16 md:mt-24 animate-fade-in [animation-delay:0.4s] opacity-0">
          <ProcessSteps />
        </div>
        
        <div className="mt-24 md:mt-32 animate-fade-in [animation-delay:0.5s] opacity-0">
          <Timeline />
        </div>
      </div>
    </section>
  );
}