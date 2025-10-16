import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  // Always include the locale prefix, including for the default locale
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/privacy-policy': {
      pt: '/politica-de-privacidade',
      en: '/privacy-policy',
      es: '/politica-de-privacidad'
    },
    '/terms-of-use': {
      pt: '/termos-de-uso',
      en: '/terms-of-use',
      es: '/terminos-de-uso'
    }
  }
});

export const {Link, usePathname, useRouter, redirect, getPathname} =
  createNavigation(routing);


