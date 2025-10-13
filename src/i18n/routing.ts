import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  // Always include the locale prefix, including for the default locale
  localePrefix: 'always',
});


