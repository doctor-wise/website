/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'next-intl';

type Messages = typeof import('../../messages/en.json');

declare module 'next-intl' {
  // Augment IntlMessages for typed useTranslations
  interface IntlMessages extends Messages {}
}


