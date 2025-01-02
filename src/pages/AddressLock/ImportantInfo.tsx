import React from 'react';
import { UserCheck, Users, Lock } from 'lucide-react';

const infoPoints = [
  {
    icon: Lock,
    title: 'Personligt lås',
    description: 'Låset är personligt och är knutet till ditt personnummer'
  },
  {
    icon: Users,
    title: 'Hela familjen',
    description: 'Trygga posten för hela familjen genom att se till att alla över 16 år använder Adresslåset'
  },
  {
    icon: UserCheck,
    title: 'Kundservice',
    description: 'Om du vill att kundservice ska hjälpa dig att hantera någon av våra tjänster, behöver du öppna Adresslåset tillfälligt'
  }
];

export function ImportantInfo() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">Bra att veta</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoPoints.map((point) => (
            <div key={point.title} className="bg-gray-800 rounded-xl p-6">
              <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}