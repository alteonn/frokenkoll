import React from 'react';
import { Clock, Mail, AlertCircle } from 'lucide-react';

interface InstructionsSectionProps {
  temporaryRemoval?: {
    title: string;
    steps: string[];
  };
  permanentRemoval?: {
    title: string;
    email: string;
    description: string;
  };
  importantInfo: {
    points: string[];
  };
}

export function InstructionsSection({ 
  temporaryRemoval,
  permanentRemoval,
  importantInfo 
}: InstructionsSectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96">
          <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-20 animate-float-slow" />
        </div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96">
          <div className="absolute inset-0 bg-gray-100 rounded-full blur-3xl opacity-30 animate-float-reverse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temporaryRemoval && (
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Background shape aligned with icon */}
              <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative">
                <div className="relative mb-6">
                  <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                    <Clock className="w-7 h-7 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-900 transition-colors duration-300">
                  {temporaryRemoval.title}
                </h3>
                <ol className="space-y-3">
                  {temporaryRemoval.steps.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="font-medium mr-2">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {permanentRemoval && (
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Background shape aligned with icon */}
              <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative">
                <div className="relative mb-6">
                  <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                    <Mail className="w-7 h-7 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-900 transition-colors duration-300">
                  {permanentRemoval.title}
                </h3>
                <p className="text-gray-600">
                  Mejla{' '}
                  <a 
                    href={`mailto:${permanentRemoval.email}`}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    {permanentRemoval.email}
                  </a>
                  {' '}{permanentRemoval.description}
                </p>
              </div>
            </div>
          )}

          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Background shape aligned with icon */}
            <div className="absolute inset-0 bg-red-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative">
              <div className="relative mb-6">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                  <AlertCircle className="w-7 h-7 text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-900 transition-colors duration-300">
                Viktigt att veta
              </h3>
              <ul className="space-y-3">
                {importantInfo.points.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}