import React from 'react';
import { BackgroundEffects } from './BackgroundEffects';
import { FooterContent } from './FooterContent';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <BackgroundEffects />
      <FooterContent />
    </footer>
  );
}