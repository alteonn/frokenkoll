import React from 'react';
import { Shield } from 'lucide-react';
import { Title } from './Title';
import { Description } from './Description';
import { FeatureList } from './FeatureList';
import { CTAButton } from './CTAButton';

export function Content() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        {/* Main content */}
        <div className="space-y-8">
          {/* Decorative shield */}
          <div className="animate-fade-in [animation-delay:0.1s] opacity-0">
            <div className="w-16 h-16 bg-red-50 rounded-2xl p-4 transform -rotate-6">
              <Shield className="w-full h-full text-red-600" />
            </div>
          </div>

          {/* Title and description */}
          <div className="space-y-6">
            <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
              <Title />
            </div>
            <div className="animate-fade-in [animation-delay:0.3s] opacity-0">
              <Description />
            </div>
          </div>

          {/* Features */}
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0">
            <FeatureList />
          </div>

          {/* CTA */}
          <div className="animate-fade-in [animation-delay:0.5s] opacity-0">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
}