import React from 'react';

export function IdentityProtection() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-serif mb-8">Skydda din identitet online</h1>
        <div className="prose prose-lg">
          <h2>1. Grundläggande skydd</h2>
          <ul>
            <li>Aktivera spärr för adressändring</li>
            <li>Använd adresslåset</li>
            <li>Skaffa digital brevlåda</li>
          </ul>

          <h2>2. Skydda dina personuppgifter</h2>
          <ul>
            <li>Ta bort uppgifter från upplysningssajter</li>
            <li>Begär borttagning från Google</li>
            <li>Kontrollera sociala medier</li>
          </ul>
        </div>
      </div>
    </div>
  );
}