import React from 'react';
import { InstructionsSection } from '../../../components/shared/InstructionsSection';

export function Instructions() {
  return (
    <InstructionsSection
      temporaryRemoval={{
        title: "Hitta din information",
        steps: [
          "Gå till Upplysning.se",
          "Sök efter ditt namn",
          "Klicka dig in på din sida",
          "Kopiera webbadressen till din sida"
        ]
      }}
      permanentRemoval={{
        title: "Kontakta kundservice",
        email: "info@upplysning.se",
        description: "och begär att bli borttagen. Inkludera länken till din profilsida."
      }}
      importantInfo={{
        points: [
          "Inkludera ditt fullständiga namn i mejlet",
          "Ange din hemadress för verifiering",
          "Var tydlig med att du vill bli borttagen från sajten",
          "Det kan ta upp till en vecka innan ändringarna syns"
        ]
      }}
    />
  );
}