import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const SUPPORTED_LOCALES = ['pt', 'en', 'es'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function parseAcceptLanguage(acceptLanguage: string | null): SupportedLocale | null {
  if (!acceptLanguage) return null;

  const preferences = acceptLanguage
    .split(',')
    .map((part) => {
      const [value, qValue] = part.trim().split(';q=');
      const locale = value.toLowerCase();
      const weight = qValue ? parseFloat(qValue) : 1;
      return { locale, weight };
    })
    .filter(({ weight }) => !Number.isNaN(weight))
    .sort((a, b) => b.weight - a.weight);

  for (const { locale } of preferences) {
    const main = locale.split('-')[0] as SupportedLocale;
    if (SUPPORTED_LOCALES.includes(main)) {
      return main;
    }
  }

  return null;
}

export default async function RootRedirectPage() {
  const headerList = await headers();
  const acceptLanguage = headerList.get('accept-language');
  const preferredLocale = parseAcceptLanguage(acceptLanguage) ?? 'en';

  redirect(`/${preferredLocale}`);
}

