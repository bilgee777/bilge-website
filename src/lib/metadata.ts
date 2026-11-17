import type { Metadata } from "next";
import { person } from "@/content/person";
import { locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Per-page metadata: title, description, canonical, hreflang alternates, Open Graph, Twitter.
 * `path` is the locale-less path, e.g. "/projects/kargoio" ("" for home).
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  opts: { title?: string; description?: string; type?: "website" | "profile" | "article" } = {},
): Metadata {
  const dict = getDictionary(locale);
  const description = opts.description ?? dict.meta.description;
  const ogTitle = opts.title ? `${opts.title} — ${person.name}` : dict.meta.siteTitle;
  return {
    title: opts.title ?? { absolute: dict.meta.siteTitle },
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])), "x-default": `/en${path}` },
    },
    openGraph: {
      type: opts.type ?? "website",
      url: `/${locale}${path}`,
      siteName: person.name,
      title: ogTitle,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      // Explicit so child pages keep the generated image (src/app/[locale]/opengraph-image.tsx).
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: dict.meta.siteTitle }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: [`/${locale}/opengraph-image`] },
  };
}
