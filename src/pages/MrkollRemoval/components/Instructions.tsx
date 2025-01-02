import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "BankID-metoden",
        steps: [
          "Gå till MrKoll.se",
          "Logga in med BankID",
          "Välj att dölja dina uppgifter",
          "Bekräfta ditt val"
        ]
      }}
      permanentRemoval={{
        title: "Permanent borttagning",
        email: "hej@nusvar.se",
        description: "och begär att bli borttagen. Använd gärna IMY:s brevmall nedan."
      }}
      importantInfo={{
        points: [
          "Du måste ha BankID för att verifiera din identitet",
          "Borttagningen är permanent när du använder mejlmetoden",
          "Du får bekräftelse när dina uppgifter har tagits bort",
          "Det kan ta upp till 30 dagar innan ändringarna syns i sökmotorer"
        ]
      }}
    />
  );
}