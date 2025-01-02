import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon container with aligned hover effect */}
      <div className="relative mb-6">
        {/* Background shape - now aligned with icon container */}
        <div className="absolute inset-0 bg-red-100 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="relative bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
          <Icon className="w-7 h-7 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-red-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}