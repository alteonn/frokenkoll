import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "Så här gör du",
        steps: [
          "Gå till person.eniro.se",
          "Logga in med BankID",
          "Välj 'Ändra uppgifter'",
          "Välj att ta bort din profil"
        ]
      }}
      importantInfo={{
        points: [
          "Processen kräver BankID för verifiering",
          "Borttagningen gäller alla dina personuppgifter på Eniro",
          "Du får bekräftelse när dina uppgifter har tagits bort",
          "Det kan ta upp till 30 dagar innan ändringarna syns i sökmotorer"
        ]
      }}
    />
  );
}