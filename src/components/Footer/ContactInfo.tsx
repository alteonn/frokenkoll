import React from 'react';
import { Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-white">Kontakt</h3>
      <div>
        <a 
          href="mailto:hej@frokenkoll.se" 
          className="group flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors bg-white/5 rounded-xl p-4 hover:bg-white/10"
        >
          <Mail className="w-5 h-5" />
          <span>hej@frokenkoll.se</span>
        </a>
      </div>
    </div>
  );
}