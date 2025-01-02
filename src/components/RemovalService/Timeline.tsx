import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export function Timeline() {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl lg:mr-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent" />
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center space-x-3 mb-12">
          <div className="h-1 w-12 bg-red-600/10 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-serif text-gray-900">
            Processen för avindexering
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <TimelineStep
            icon={Clock}
            title="Begäran om borttagning"
            description="Vi förklarar hur du kan begära borttagning av dina uppgifter från olika källor. Du får tydliga instruktioner för hur du kan rapportera länkar som du vill få borttagna från Google."
            step={1}
          />

          <TimelineStep
            icon={CheckCircle2}
            title="Förväntad tidsram"
            description="Processen för borttagning kan variera. Vissa länkar kan tas bort inom 7 dagar, medan andra kan ta upp till några månader. Vi förklarar hela processen och vad du kan förvänta dig."
            step={2}
          />
        </div>
      </div>
    </div>
  );
}

interface TimelineStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
}

function TimelineStep({ icon: Icon, title, description, step }: TimelineStepProps) {
  return (
    <div className="group relative bg-gray-50/50 rounded-2xl p-6 hover:bg-red-50/50 transition-colors duration-300">
      {/* Step number */}
      <div className="absolute -top-3 -right-3">
        <span className="text-4xl font-serif text-gray-100 group-hover:text-red-100 transition-colors duration-300">
          {step}
        </span>
      </div>
      
      <div className="relative">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-red-50 transition-colors duration-300">
            <Icon className="w-8 h-8 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h4 className="text-xl font-medium text-gray-900 mb-3">
            {title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}