import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "Tillfällig borttagning",
        steps: [
          "Gå till Ratsit.se",
          "Logga in med BankID",
          "Välj att dölja dina uppgifter",
          "Bekräfta ditt val"
        ]
      }}
      permanentRemoval={{
        title: "Permanent borttagning",
        email: "kundservice@ratsit.se",
        description: "och begär att bli borttagen. Använd gärna IMY:s brevmall nedan."
      }}
      importantInfo={{
        points: [
          "Du måste ha BankID för att verifiera din identitet",
          "Tillfällig borttagning gäller i 12 månader",
          "Permanent borttagning kräver kontakt med kundservice",
          "Det kan ta upp till 30 dagar innan ändringarna syns"
        ]
      }}
    />
  );
}