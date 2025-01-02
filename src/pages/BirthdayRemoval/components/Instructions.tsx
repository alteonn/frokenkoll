import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      permanentRemoval={{
        title: "Kontakta kundservice",
        email: "info@birthday.se",
        description: "och begär att bli borttagen från den publika sökfunktionen."
      }}
      importantInfo={{
        points: [
          "Inkludera ditt fullständiga namn i mejlet",
          "Ange din folkbokföringsadress för verifiering",
          "Var tydlig med att du vill bli borttagen från den publika sökfunktionen",
          "Det kan ta några dagar innan ändringarna träder i kraft"
        ]
      }}
    />
  );
}