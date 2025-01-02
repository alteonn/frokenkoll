import React from 'react';
import { Clock, Shield, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Enkelt',
    description: 'Det tar bara en minut att låsa din adress med BankID. Låset är personligt.'
  },
  {
    icon: Shield,
    title: 'Säkert',
    description: 'Gör det svårare att kapa din identitet eller beställa saker i ditt namn.'
  },
  {
    icon: CheckCircle,
    title: 'Tryggt',
    description: 'Skydda din post och dina personliga uppgifter från att hamna i fel händer.'
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}