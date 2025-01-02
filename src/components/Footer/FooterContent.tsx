import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { ContactInfo } from './ContactInfo';
import { footerLinks } from './footer-links';

export function FooterContent() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl opacity-20 transform rotate-6" />
              <div className="relative bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-red-400" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.1] mb-6">
            Skydda din integritet online
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vi hjälper dig att ta kontroll över dina personuppgifter och skydda din digitala närvaro.
          </p>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FooterLinks title="Snabblänkar" links={footerLinks.quickLinks} />
          <FooterLinks title="Skydd" links={footerLinks.protectionLinks} />
          <ContactInfo />
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Frökenkoll</span>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', link.href);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Frökenkoll. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}