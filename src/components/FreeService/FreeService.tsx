import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { BackgroundEffects } from './BackgroundEffects';

export function FreeService() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-20 transform rotate-6" />
              <div className="relative bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center">
                <Gift className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 tracking-tight leading-tight mb-6">
            Kostnadsfri vägledning
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Vi hjälper dig att ta bort dina personuppgifter från nätet, helt kostnadsfritt. 
            Vår guide visar dig steg för steg hur du kan skydda din integritet online.
          </p>

          {/* CTA Button */}
          <a 
            href="/ratsit-borttagning"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 group"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/ratsit-borttagning');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            <span className="font-medium">Kom igång</span>
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}