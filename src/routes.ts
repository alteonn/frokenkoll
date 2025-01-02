import { AddressBlock } from './pages/AddressBlock/AddressBlock';
import { AddressLock } from './pages/AddressLock/AddressLock';
import { GoogleRemoval } from './pages/GoogleRemoval/GoogleRemoval';
import { RatsitRemoval } from './pages/RatsitRemoval/RatsitRemoval';
import { MrkollRemoval } from './pages/MrkollRemoval/MrkollRemoval';
import { HittaRemoval } from './pages/HittaRemoval/HittaRemoval';
import { UpplysningRemoval } from './pages/UpplysningRemoval/UpplysningRemoval';
import { BirthdayRemoval } from './pages/BirthdayRemoval/BirthdayRemoval';
import { EniroRemoval } from './pages/EniroRemoval/EniroRemoval';
import { MerinfoRemoval } from './pages/MerinfoRemoval/MerinfoRemoval';
import { GetHelp } from './pages/GetHelp/GetHelp';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService/TermsOfService';
import { CookiesPolicy } from './pages/CookiesPolicy/CookiesPolicy';
import { GDPRPolicy } from './pages/GDPRPolicy/GDPRPolicy';

export const routes = {
  addressBlock: {
    path: '/sparra-adressandring',
    component: AddressBlock
  },
  addressLock: {
    path: '/adresslaset',
    component: AddressLock
  },
  googleRemoval: {
    path: '/google-borttagning',
    component: GoogleRemoval
  },
  ratsitRemoval: {
    path: '/ratsit-borttagning',
    component: RatsitRemoval
  },
  mrkollRemoval: {
    path: '/mrkoll-borttagning',
    component: MrkollRemoval
  },
  hittaRemoval: {
    path: '/hitta-borttagning',
    component: HittaRemoval
  },
  upplysningRemoval: {
    path: '/upplysning-borttagning',
    component: UpplysningRemoval
  },
  birthdayRemoval: {
    path: '/birthday-borttagning',
    component: BirthdayRemoval
  },
  eniroRemoval: {
    path: '/eniro-borttagning',
    component: EniroRemoval
  },
  merinfoRemoval: {
    path: '/merinfo-borttagning',
    component: MerinfoRemoval
  },
  getHelp: {
    path: '/fa-hjalp',
    component: GetHelp
  },
  privacyPolicy: {
    path: '/integritetspolicy',
    component: PrivacyPolicy
  },
  termsOfService: {
    path: '/anvandarvillkor',
    component: TermsOfService
  },
  cookiesPolicy: {
    path: '/cookies',
    component: CookiesPolicy
  },
  gdprPolicy: {
    path: '/gdpr',
    component: GDPRPolicy
  }
} as const;