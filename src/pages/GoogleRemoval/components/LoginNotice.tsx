import React from 'react';
import { LogIn } from 'lucide-react';

export function LoginNotice() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-amber-100 p-3 rounded-lg">
          <LogIn className="w-6 h-6 text-amber-700" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-medium text-amber-900 mb-2">Inloggning krävs</h3>
          <p className="text-amber-800">
            Du måste vara inloggad på ditt Google-konto för att kunna fylla i och skicka in formuläret för borttagning av personuppgifter.
          </p>
        </div>
      </div>
    </div>
  );
}