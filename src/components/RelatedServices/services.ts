import { Shield, Search, Lock, UserX } from 'lucide-react';

export const services = [
  {
    title: 'Spärra adressändring',
    description: 'Skydda dig mot bedrägerier genom att spärra obehöriga adressändringar.',
    path: '/sparra-adressandring',
    icon: Shield
  },
  {
    title: 'Adresslåset',
    description: 'Lås din adress för att förhindra oönskade ändringar och eftersändningar.',
    path: '/adresslaset',
    icon: Lock
  },
  {
    title: 'Google-borttagning',
    description: 'Ta bort personuppgifter från Googles sökresultat.',
    path: '/google-borttagning',
    icon: Search
  },
  {
    title: 'Ratsit-borttagning',
    description: 'Dölj dina uppgifter från Ratsits öppna sök.',
    path: '/ratsit-borttagning',
    icon: UserX
  },
  {
    title: 'MrKoll-borttagning',
    description: 'Ta bort dina personuppgifter från MrKoll.',
    path: '/mrkoll-borttagning',
    icon: UserX
  },
  {
    title: 'Hitta.se-borttagning',
    description: 'Dölj dina uppgifter från Hitta.se.',
    path: '/hitta-borttagning',
    icon: UserX
  },
  {
    title: 'Upplysning-borttagning',
    description: 'Ta bort personuppgifter från Upplysning.se.',
    path: '/upplysning-borttagning',
    icon: UserX
  },
  {
    title: 'Birthday-borttagning',
    description: 'Dölj dina uppgifter från Birthday.se.',
    path: '/birthday-borttagning',
    icon: UserX
  },
  {
    title: 'Merinfo-borttagning',
    description: 'Ta bort dina personuppgifter från Merinfo.se.',
    path: '/merinfo-borttagning',
    icon: UserX
  }
];