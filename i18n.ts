import deepmerge from 'deepmerge';
import type { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import ar from '@/locales/ar/index.json'
import en from '@/locales/en/index.json'
import { Locale } from './navigation';

const localeMessages: Partial<Record<Locale, any>> = {
    ar,
    en
};

export default getRequestConfig(({ locale }) => {
  const primaryMessages: AbstractIntlMessages =
    localeMessages[locale as Locale] || localeMessages['en'];

  const fallbackMessages: AbstractIntlMessages = localeMessages['en'];

  const messages = deepmerge(fallbackMessages, primaryMessages);
  return { messages };
});