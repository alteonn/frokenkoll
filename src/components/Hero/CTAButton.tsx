import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTAButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/ratsit-borttagning');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <button 
        onClick={handleClick}
        className="group bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-colors duration-300"
      >
        <span className="flex items-center space-x-2">
          <span className="text-base font-medium">Kom igång</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      
      <span className="text-sm text-red-600 border border-red-200 bg-red-50 rounded-full px-4 py-2">
        Helt kostnadsfritt
      </span>
    </div>
  );
}