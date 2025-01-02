import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { ImageSection } from './ImageSection';
import { ImportantInfo } from './ImportantInfo';
import { Services } from './Services';

export function AddressLock() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <ImageSection />
      <ImportantInfo />
      <Services />
    </div>
  );
}