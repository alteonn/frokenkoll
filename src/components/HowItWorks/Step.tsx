import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export function Step({ icon: Icon, title, description, index, isLast }: StepProps) {
  return (
    <div className="group relative">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-px bg-gray-100 group-hover:bg-red-100 transition-colors duration-300 hidden md:block" />
      )}
      
      <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        {/* Icon and number */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Background shape aligned with icon */}
            <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Icon container */}
            <div className="relative bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
              <Icon className="w-8 h-8 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
            </div>
            
            {/* Step number */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
              {index + 1}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 group-hover:text-red-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Hover indicator */}
          <div className="h-0.5 w-0 group-hover:w-12 bg-red-600/10 transition-all duration-300 rounded-full mt-4" />
        </div>
      </div>
    </div>
  );
}