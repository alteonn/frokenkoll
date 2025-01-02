import React from 'react';
import { Users } from 'lucide-react';

export function FamilyInfo() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-6">Familjemedlemmar</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Familjemedlemmar som är folkbokförda på samma adress kan fortfarande ändra din adress med e-legitimation. 
            Detta gäller make, maka, registrerad partner, barn, föräldrar och sambo (om ni har gemensamma barn).
          </p>
        </div>
      </div>
    </section>
  );
}