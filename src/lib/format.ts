import type { DateRange, YearMonth } from "@/content/types";
import type { Locale } from "@/i18n/config";

const intlLocale: Record<Locale, string> = { tr: "tr-TR", en: "en-GB" };

export function formatMonth(value: YearMonth, locale: Locale) {
  const [y, m] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
}

export function formatRange(range: DateRange, locale: Locale, presentLabel: string) {
  const end = range.end === "present" ? presentLabel : formatMonth(range.end, locale);
  return `${formatMonth(range.start, locale)} – ${end}`;
}

export const formatYears = (range: DateRange) =>
  `${range.start.slice(0, 4)}–${range.end === "present" ? "" : range.end.slice(0, 4)}`;

/** ISO date for <time dateTime>. */
export const isoMonth = (value: YearMonth | "present") => (value === "present" ? undefined : value);
