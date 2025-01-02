import { PageMetadata } from './types';

export const merinfo: PageMetadata = {
  title: "Ta bort dig från Merinfo | Guide & instruktioner | Frökenkoll",
  description: "Lär dig hur du tar bort dina personuppgifter från Merinfo. Använd vår guide för att skydda din integritet och dölja dina uppgifter.",
  keywords: [
    "ta bort merinfo",
    "radera merinfo uppgifter",
    "dölja information merinfo",
    // ... resten av nyckelorden
  ],
  structuredData: {
    "@type": "HowTo",
    name: "Ta bort personuppgifter från Merinfo",
    step: [
      {
        "@type": "HowToStep",
        name: "Gå till borttagningssidan",
        text: "Besök Merinfos borttagningssida"
      },
      {
        "@type": "HowToStep",
        name: "Verifiera med BankID",
        text: "Använd BankID för att verifiera din identitet"
      }
    ]
  }
};