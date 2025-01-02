import React from 'react';
import { LockKeyhole, UserCheck, AlertTriangle } from 'lucide-react';

const steps = [
  {
    icon: LockKeyhole,
    title: 'Aktivera med BankID',
    description: 'Endast du själv kan aktivera eller ta bort spärren med din e-legitimation. Det går inte att göra via telefon, brev eller mejl.'
  },
  {
    icon: UserCheck,
    title: 'Krav på ålder',
    description: 'Du måste ha fyllt 18 år för att kunna använda tjänsten Spärra obehörig adressändring.'
  },
  {
    icon: AlertTriangle,
    title: 'Vid flytt',
    description: 'När spärren är aktiv måste du använda Skatteverkets e-tjänst Flyttanmälan med BankID. Pappersblanketter accepteras inte.'
  }
];

export function Instructions() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-12">Viktigt att veta</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}