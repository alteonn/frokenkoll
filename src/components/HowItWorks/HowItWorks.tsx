import React from 'react';
import { Step } from './Step';
import { steps } from './steps';
import { BackgroundEffects } from './BackgroundEffects';

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-red-600 font-medium text-sm md:text-base tracking-wide uppercase mb-3 block">
            Processen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 tracking-tight leading-tight mb-6">
            Så här funkar det
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vi guidar dig genom processen att ta bort dina uppgifter från upplysnings-sajter och skadliga länkar på Google.
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}