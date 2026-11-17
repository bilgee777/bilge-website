import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { education } from "@/content/education";
import { about, hero, person } from "@/content/person";
import { href } from "@/i18n/routes";
import { formatYears } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/about", dict.meta.pages.about);
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  const edu = education[0];
  const facts: [string, React.ReactNode][] = [
    [dict.common.location, person.location[locale]],
    [dict.about.education, `${dict.about.graduate} · ${edu.institution[locale]} (${formatYears(edu.period)})`],
    [dict.common.email, <a key="e" href={`mailto:${person.email}`} className="break-all hover:text-accent-text">{person.email}</a>],
    [
      "LinkedIn",
      <a key="l" href={person.linkedin} target="_blank" rel="noopener noreferrer me" className="hover:text-accent-text">
        linkedin.com/in/bilge-korkmaz<span className="sr-only"> {dict.a11y.external}</span>
      </a>,
    ],
  ];

  return (
    <>
      <PageHeader eyebrow={person.title[locale]} title={dict.about.title} lead={hero.tagline[locale]} />
      <div className="container-page grid gap-12 pb-24 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-fg-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">{p[locale]}</p>
          ))}
          <p className="pt-2 text-base">
            <Link href={href(locale, "experience")} className="font-medium text-accent-text hover:underline">
              {dict.nav.experience} →
            </Link>
            <span className="mx-3 text-fg-subtle" aria-hidden>·</span>
            <Link href={href(locale, "projects")} className="font-medium text-accent-text hover:underline">
              {dict.nav.projects} →
            </Link>
          </p>
        </Reveal>
        <div className="space-y-10">
          <Reveal delay={80}>
            <h2 className="eyebrow">{dict.about.focus}</h2>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {hero.focusAreas.map((area, i) => (
                <li key={area.en} className="flex items-baseline gap-4 py-4">
                  <span className="font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display font-medium">{area[locale]}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="eyebrow">{dict.about.facts}</h2>
            <dl className="mt-4 space-y-4 text-sm">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-fg-subtle">{k}</dt>
                  <dd className="mt-0.5 text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </>
  );
}
