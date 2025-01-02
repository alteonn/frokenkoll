import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Logo() {
  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a href="/" onClick={handleNavigation} className="flex items-center space-x-2 group">
      <div className="relative">
        <ShieldCheck 
          className="w-9 h-9 text-red-600 transform group-hover:scale-105 transition-transform" 
          strokeWidth={1.5}
        />
      </div>
      <span className="text-lg font-medium text-gray-900">
        Frökenkoll
      </span>
    </a>
  );
}