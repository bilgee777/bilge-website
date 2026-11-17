import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { about, person, skillGroups, education } from "@/content/profile";
import { isLocale, locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fontVariables } from "@/lib/fonts";
import { known, siteUrl } from "@/lib/site";

type Params = Promise<{ locale: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#080b1a",
  colorScheme: "dark light",
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const other = locales.find((l) => l !== locale)!;

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: `${person.name} — Portfolio`,
    authors: [{ name: person.name }],
    creator: person.name,
    keywords: [
      person.name,
      "Software Engineer",
      "Yazılım Mühendisi",
      "iOS Developer",
      "Mobile Developer",
      ...skillGroups.flatMap((g) => g.items),
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en", "x-default": "/tr" },
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: person.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      firstName: "Bilge",
      lastName: "Korkmaz",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light')d.dataset.theme='light'}catch(e){}})();`;

function personJsonLd(locale: Locale) {
  const sameAs = [known(person.github), known(person.linkedin)].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title[locale],
    url: `${siteUrl}/${locale}`,
    email: `mailto:${person.email}`,
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
    knowsAbout: [...about.focusAreas.map((a) => a[locale]), ...skillGroups.flatMap((g) => g.items)],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
