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

/**
 * Prefix a root-relative path with the locale, except for the default locale.
 *
 * The trailing slash is not cosmetic. The build is directory-format, so the
 * server's real URL for /workshops is /workshops/ and a request without the
 * slash gets a 301. Emitting the un-slashed form meant every canonical tag,
 * every hreflang and every internal link pointed at a redirect, and the
 * canonical then disagreed with the sitemap, which lists the slashed form.
 * astro.config.mjs sets trailingSlash: "always" so dev behaves the same way.
 */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const slashed = clean.endsWith("/") ? clean : `${clean}/`;
  return locale === defaultLocale ? slashed : `/${locale}${slashed}`;
}

/** The same page in the other language, for the language switcher and hreflang. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "nl" : "en";
}

export type { Dict };
