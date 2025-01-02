import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQHeader() {
  return (
    <div className="max-w-3xl mb-16 md:mb-24">
      <span className="text-red-600 font-medium text-sm md:text-base tracking-wide uppercase mb-3 block animate-fade-in [animation-delay:0.1s] opacity-0">
        Vanliga frågor
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1] mb-6 animate-fade-in [animation-delay:0.2s] opacity-0">
        Frågor & Svar
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in [animation-delay:0.3s] opacity-0">
        Här hittar du svar på de vanligaste frågorna om hur du kan{' '}
        <span className="text-red-600 font-medium">skydda din integritet</span>{' '}
        och ta bort personuppgifter från nätet.
      </p>
    </div>
  );
}