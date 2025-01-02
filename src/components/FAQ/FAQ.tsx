import React from 'react';
import { FAQHeader } from './FAQHeader';
import { FAQList } from './FAQList';
import { BackgroundEffects } from './BackgroundEffects';

export function FAQ() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FAQHeader />
        <FAQList />
      </div>
    </section>
  );
}