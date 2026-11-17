export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const ogLocale: Record<Locale, string> = { tr: "tr_TR", en: "en_US" };
