import React from 'react';
import { FileText } from 'lucide-react';
import { RemovalButton } from './RemovalButton';
import { LoginNotice } from './LoginNotice';

export function Instructions() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Icon and Title */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-red-50 p-4 rounded-xl mb-4">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Så här gör du</h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Fyll i ett formulär där du hänvisar till sökträffar du vill ha raderade. 
            Du behöver legitimera dig genom att skicka med en kopia på legitimation.
          </p>

          {/* Button */}
          <div className="flex justify-center mb-8">
            <RemovalButton />
          </div>

          {/* Login Notice */}
          <LoginNotice />
        </div>
      </div>
    </section>
  );
}