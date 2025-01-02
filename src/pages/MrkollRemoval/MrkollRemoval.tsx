import React from 'react';
import { Hero } from './components/Hero';
import { Instructions } from './components/Instructions';
import { TemplateLetter } from './components/TemplateLetter';
import { RelatedServices } from '../../components/RelatedServices/RelatedServices';

export function MrkollRemoval() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Instructions />
      <TemplateLetter />
      <RelatedServices currentPath="/mrkoll-borttagning" />
    </div>
  );
}