import React from 'react';
import { Shield, Search, X } from 'lucide-react';

export function FeatureList() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-700 flex-shrink-0" />
        <span className="text-sm md:text-base text-gray-900">Dölj dig från upplysnings-sajter</span>
      </div>
      <div className="flex items-center space-x-4">
        <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700 flex-shrink-0" />
        <span className="text-sm md:text-base text-gray-900">Ta bort dig från Google</span>
      </div>
      <div className="flex items-center space-x-4">
        <Shield className="w-5 h-5 md:w-6 md:h-6 text-gray-700 flex-shrink-0" />
        <span className="text-sm md:text-base text-gray-900">Kostnadsfritt</span>
      </div>
    </div>
  );
}