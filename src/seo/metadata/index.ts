import { home } from './home';
import { hitta } from './hitta';
import { merinfo } from './merinfo';
import { ratsit } from './ratsit';
import { mrkoll } from './mrkoll';
import { eniro } from './eniro';
import { birthday } from './birthday';
import { upplysning } from './upplysning';
import { google } from './google';
import { addressBlock } from './addressBlock';
import { addressLock } from './addressLock';

export const metadata = {
  home,
  hitta,
  merinfo,
  ratsit,
  mrkoll,
  eniro,
  birthday,
  upplysning,
  google,
  addressBlock,
  addressLock
} as const;

// Type guard to check if a page type exists in metadata
export const isValidPageType = (page: string): page is keyof typeof metadata => {
  return page in metadata;
};