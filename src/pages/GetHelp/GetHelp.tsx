import React from 'react';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { ContactForm } from './components/ContactForm';

export function GetHelp() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Hero />
      <Content />
      <ContactForm />
    </div>
  );
}