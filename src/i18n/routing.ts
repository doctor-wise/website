import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  // Always include the locale prefix, including for the default locale
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/ambassadors': {
      pt: '/ambassadors',
      en: '/ambassadors',
      es: '/ambassadors'
    },
    '/privacy-policy': {
      pt: '/privacy-policy',
      en: '/privacy-policy',
      es: '/privacy-policy'
    },
    '/terms-of-use': {
      pt: '/terms-of-use',
      en: '/terms-of-use',
      es: '/terms-of-use'
    },
    '/giveaway-terms': {
      pt: '/giveaway-terms',
      en: '/giveaway-terms',
      es: '/giveaway-terms'
    }
  }
});

export const {Link, usePathname, useRouter, redirect, getPathname} =
  createNavigation(routing);


