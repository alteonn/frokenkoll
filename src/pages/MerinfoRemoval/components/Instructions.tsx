import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "Så här gör du",
        steps: [
          "Gå till merinfo.se/tabort",
          "Logga in med BankID",
          "Välj att ta bort dina uppgifter",
          "Bekräfta borttagningen"
        ]
      }}
      permanentRemoval={{
        title: "Kontakta kundservice",
        email: "info@merinfo.se",
        description: "och begär att bli borttagen permanent. Använd gärna IMY:s brevmall nedan."
      }}
      importantInfo={{
        points: [
          "Du måste ha BankID för att verifiera din identitet",
          "Borttagningen gäller alla dina personuppgifter på Merinfo",
          "Du får bekräftelse när dina uppgifter har tagits bort",
          "Det kan ta upp till 30 dagar innan ändringarna syns i sökmotorer"
        ]
      }}
    />
  );
}