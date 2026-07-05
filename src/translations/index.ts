import type { DataTranslations, Locale, TranslatedLocale } from '../types.js';
import { EXPERIENCE } from '../experience.js';
import { PROJECTS } from '../projects.js';
import { CERTIFICATES } from '../certificates.js';
import { EXPERIENCE_TRANSLATIONS } from './experience.js';
import { PROJECT_TRANSLATIONS } from './projects.js';
import { CERTIFICATE_TRANSLATIONS } from './certificates.js';

/** English copy is derived from the entries themselves — never authored twice. */
const english: DataTranslations = {
  experience: Object.fromEntries(
    EXPERIENCE.map((e) => [e.id, { position: e.position, description: e.description }])
  ),
  projects: Object.fromEntries(
    PROJECTS.map((p) => [p.id, { description: p.description }])
  ),
  certificates: Object.fromEntries(
    CERTIFICATES.map((c) => [c.id, { description: c.description }])
  ),
};

/** Entries missing an authored translation fall back to the English copy per id. */
const forLocale = (locale: TranslatedLocale): DataTranslations => ({
  experience: { ...english.experience, ...EXPERIENCE_TRANSLATIONS[locale] },
  projects: { ...english.projects, ...PROJECT_TRANSLATIONS[locale] },
  certificates: { ...english.certificates, ...CERTIFICATE_TRANSLATIONS[locale] },
});

/** Data-entry translations for every locale, keyed by entry `id` per topic. */
export const TRANSLATIONS: Record<Locale, DataTranslations> = {
  en: english,
  ca: forLocale('ca'),
  de: forLocale('de'),
  es: forLocale('es'),
  fr: forLocale('fr'),
  it: forLocale('it'),
  pt: forLocale('pt'),
};

/** Translations for `locale`, falling back to English for unknown locales. */
export function dataTranslations(locale: string): DataTranslations {
  return TRANSLATIONS[locale as Locale] ?? TRANSLATIONS.en;
}
