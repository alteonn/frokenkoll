import { metadata } from './metadata';

export const isValidPageType = (page: string): page is keyof typeof metadata => {
  return page in metadata;
};

export const getPagePath = (page: keyof typeof metadata): string => {
  switch (page) {
    case 'home':
      return '/';
    case 'ratsit':
      return '/ratsit-borttagning';
    case 'mrkoll':
      return '/mrkoll-borttagning';
    case 'hitta':
      return '/hitta-borttagning';
    case 'eniro':
      return '/eniro-borttagning';
    case 'birthday':
      return '/birthday-borttagning';
    case 'upplysning':
      return '/upplysning-borttagning';
    case 'merinfo':
      return '/merinfo-borttagning';
    case 'google':
      return '/google-borttagning';
    case 'addressBlock':
      return '/sparra-adressandring';
    case 'addressLock':
      return '/adresslaset';
    default:
      return '/';
  }
};