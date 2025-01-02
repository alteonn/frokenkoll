import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProcessStep({ icon: Icon, title, description }: ProcessStepProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-red-100">
      <div className="flex md:flex-col items-start md:items-start space-x-4 md:space-x-0 md:space-y-4">
        <div className="bg-gray-50 p-3 rounded-xl w-fit group-hover:bg-red-50 transition-colors duration-300">
          <Icon className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors duration-300 mb-2 md:mb-0">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}