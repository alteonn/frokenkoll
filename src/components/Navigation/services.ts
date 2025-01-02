import { Search, Lock, UserX, HelpingHand } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { routes } from '../../routes';

interface ServiceLink {
  name: string;
  url: string;
  internal?: boolean;
}

interface ServiceGroup {
  title: string;
  links?: ServiceLink[];
  icon?: LucideIcon;
  url?: string;
  internal?: boolean;
  path?: string;
}

export const services: ServiceGroup[] = [
  {
    title: 'Upplysningssajter',
    links: [
      { name: 'Ratsit', url: routes.ratsitRemoval.path, internal: true },
      { name: 'MrKoll', url: routes.mrkollRemoval.path, internal: true },
      { name: 'Hitta.se', url: routes.hittaRemoval.path, internal: true },
      { name: 'Eniro', url: routes.eniroRemoval.path, internal: true },
      { name: 'Birthday', url: routes.birthdayRemoval.path, internal: true },
      { name: 'Upplysning', url: routes.upplysningRemoval.path, internal: true },
      { name: 'Merinfo', url: routes.merinfoRemoval.path, internal: true }
    ]
  },
  {
    title: 'Google',
    icon: Search,
    internal: true,
    path: routes.googleRemoval.path
  },
  {
    title: 'Adresslåset',
    icon: Lock,
    internal: true,
    path: routes.addressLock.path
  },
  {
    title: 'Spärra adressändring',
    icon: UserX,
    internal: true,
    path: routes.addressBlock.path
  },
  {
    title: 'Få hjälp',
    icon: HelpingHand,
    internal: true,
    path: routes.getHelp.path
  }
];