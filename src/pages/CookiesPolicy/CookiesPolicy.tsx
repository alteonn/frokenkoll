import React from 'react';
import { Hero } from './components/Hero';
import { Content } from './components/Content';

export function CookiesPolicy() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Content />
    </div>
  );
}