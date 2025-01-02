import React from 'react';
import { BackgroundEffects } from './BackgroundEffects';
import { Content } from './Content';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20">
      <BackgroundEffects />
      <Content />
    </section>
  );
}