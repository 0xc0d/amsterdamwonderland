import { en } from "./en";
import { nl } from "./nl";
import type { Dict } from "./en";

export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dicts: Record<Locale, Dict> = { en, nl };

export function t(locale: Locale): Dict {
  return dicts[locale] ?? dicts[defaultLocale];
}

/** Prefix a root-relative path with the locale, except for the default locale. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}/` : `/${locale}${clean}`;
}

/** The same page in the other language, for the language switcher and hreflang. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "nl" : "en";
}

export type { Dict };
