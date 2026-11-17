import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export type LocaleParams = Promise<{ locale: string }>;

/** Resolves and validates the locale segment for a page. */
export async function resolveLocale(params: LocaleParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale: locale as Locale, dict: getDictionary(locale) };
}
