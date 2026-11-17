import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { education } from "@/content/education";
import { hero, person } from "@/content/person";
import { skillGroups } from "@/content/skills";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fontVariables } from "@/lib/fonts";
import { known, siteUrl } from "@/lib/site";

type Params = Promise<{ locale: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#080d1b",
  colorScheme: "dark light",
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.siteTitle, template: `%s — ${person.name}` },
    description: dict.meta.description,
    applicationName: person.name,
    authors: [{ name: person.name, url: person.linkedin }],
    creator: person.name,
    keywords: [
      person.name,
      "Software Engineer",
      "Mobile Developer",
      "iOS Developer",
      "React Native Developer",
      "AI Integration",
      ...new Set(skillGroups.flatMap((g) => g.items.map((i) => i.name))),
    ],
    robots: { index: true, follow: true },
  };
}

const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light')d.dataset.theme='light'}catch(e){}})();`;

function personJsonLd(locale: Locale) {
  const sameAs = [person.linkedin, known(person.github)].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title[locale],
    description: hero.description[locale],
    url: `${siteUrl}/${locale}`,
    email: `mailto:${person.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution[locale] })),
    knowsAbout: [...new Set(skillGroups.flatMap((g) => g.items.map((i) => i.name)))],
    sameAs,
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-primary px-4 py-2 text-sm text-primary-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          {dict.a11y.skip}
        </a>
        <Header locale={locale} dict={dict} name={person.name} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
