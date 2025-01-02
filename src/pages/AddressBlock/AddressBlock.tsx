import React from 'react';
import { Hero } from './Hero';
import { Instructions } from './Instructions';
import { ImageSection } from './ImageSection';
import { FamilyInfo } from './FamilyInfo';
import { DigitalMailbox } from './DigitalMailbox';

export function AddressBlock() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Instructions />
      <ImageSection />
      <FamilyInfo />
      <DigitalMailbox />
    </div>
  );
}