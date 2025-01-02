import React from 'react';
import { Hero } from './components/Hero';
import { Instructions } from './components/Instructions';
import { RelatedServices } from '../../components/RelatedServices/RelatedServices';

export function EniroRemoval() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Instructions />
      <RelatedServices currentPath="/eniro-borttagning" />
    </div>
  );
}