import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  // Always include the locale prefix, including for the default locale
  localePrefix: 'always',
});


