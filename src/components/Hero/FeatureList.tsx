import React from 'react';
import { Shield, Search, X } from 'lucide-react';

const features = [
  {
    icon: Search,
    text: 'Dölj dig från upplysnings-sajter'
  },
  {
    icon: X,
    text: 'Ta bort dig från Google'
  },
  {
    icon: Shield,
    text: 'Kostnadsfritt'
  }
];

export function FeatureList() {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group flex items-center space-x-4 bg-white rounded-xl border border-gray-100 p-4 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-white transition-colors duration-300">
            <feature.icon className="w-5 h-5 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
          </div>
          <span className="text-base text-gray-900 font-medium group-hover:text-red-900 transition-colors duration-300">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
}