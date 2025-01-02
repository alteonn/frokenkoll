import React from 'react';
import { Hero } from './components/Hero';
import { Instructions } from './components/Instructions';
import { ContactInfo } from './components/ContactInfo';
import { RelatedServices } from '../../components/RelatedServices/RelatedServices';

export function HittaRemoval() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Instructions />
      <ContactInfo />
      <RelatedServices currentPath="/hitta-borttagning" />
    </div>
  );
}