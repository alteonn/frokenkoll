import React from 'react';
import { Search } from 'lucide-react';

export function RemovalButton() {
  return (
    <a 
      href="https://reportcontent.google.com/forms/rtbf?visit_id=638410356488180862-345888039&hl=sv&rd=1"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-white font-medium transition-colors space-x-3"
    >
      <Search className="w-5 h-5" />
      <span>Begär borttagning från Google</span>
    </a>
  );
}