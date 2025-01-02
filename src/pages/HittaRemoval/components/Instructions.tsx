import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "Så här gör du",
        steps: [
          "Gå till borttagningssidan på Hitta.se",
          "Logga in med BankID",
          "Välj att ta bort dina uppgifter",
          "Bekräfta borttagningen"
        ]
      }}
      importantInfo={{
        points: [
          "Du måste ha BankID för att verifiera din identitet",
          "Borttagningen gäller alla dina personuppgifter på Hitta.se",
          "Du får bekräftelse när dina uppgifter har tagits bort",
          "Det kan ta några dagar innan ändringarna syns i sökmotorer"
        ]
      }}
    />
  );
}