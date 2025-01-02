import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center text-gray-300 hover:text-red-400 transition-colors"
            onClick={(e) => handleNavigation(link.href, e)}
          >
            <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}