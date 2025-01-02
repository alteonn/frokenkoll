import { Newspaper, MessageCircle, Image, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProcessItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processItems: ProcessItem[] = [
  {
    icon: Newspaper,
    title: 'Nyhetsartiklar',
    description: 'Vi förklarar hur du kan identifiera och begära borttagning av nyhetsartiklar som innehåller din personliga information.'
  },
  {
    icon: MessageCircle,
    title: 'Internettrådar',
    description: 'Steg-för-steg guide för att hitta och hantera foruminlägg och kommentarer som kan kopplas till dig.'
  },
  {
    icon: Image,
    title: 'Bilder',
    description: 'Tydliga instruktioner för hur du kan begära borttagning av oönskade bilder från sökmotorer och webbplatser.'
  },
  {
    icon: FileText,
    title: 'Offentliga Register',
    description: 'Information om hur du kan hantera din synlighet i offentliga register och skydda din integritet.'
  }
];