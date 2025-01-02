import React from 'react';
import { processItems } from './process-items';

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {processItems.map((item, index) => (
        <div 
          key={item.title}
          className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          {/* Background shape aligned with icon */}
          <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          
          <div className="relative space-y-4">
            {/* Icon container */}
            <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
              <item.icon className="w-6 h-6 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-red-900 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}