import Link from "next/link";
import { hero, person } from "@/content/person";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href } from "@/i18n/routes";
import { btnGhost, btnPrimary, btnSecondary } from "@/lib/ui";
import { Download, LinkedIn } from "./Icons";
import { Reveal } from "./Reveal";

export function Hero({ locale, dict, cvHref }: { locale: Locale; dict: Dictionary; cvHref?: string }) {
  return (
    <section aria-labelledby="hero-title" className="hero-backdrop relative">
      <div className="container-page flex min-h-[88svh] flex-col justify-center pt-28 pb-16 sm:pt-32">
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-3">
            <span className="inline-block size-1.5 rounded-full bg-primary" aria-hidden />
            {person.title[locale]}
            <span aria-hidden className="text-border-strong">/</span>
            {person.location[locale]}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 id="hero-title" className="mt-6 text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            {person.firstName} <span className="text-accent-text">{person.lastName}</span>
            <span className="sr-only"> — {person.title[locale]}</span>
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 max-w-3xl font-display text-2xl leading-tight font-medium tracking-tight text-balance sm:text-[2rem]">
            {hero.tagline[locale]}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-fg-muted text-pretty sm:text-lg">{hero.description[locale]}</p>
        </Reveal>

        <Reveal delay={210}>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label={dict.about.focus}>
            {hero.focusAreas.map((area) => (
              <li key={area.en} className="chip border-border-strong text-fg">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {area[locale]}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={270} className="mt-10 flex flex-wrap items-center gap-3">
          <Link href={href(locale, "projects")} className={btnPrimary}>
            {dict.home.ctaProjects}
          </Link>
          <Link href={href(locale, "contact")} className={btnSecondary}>
            {dict.home.ctaContact}
          </Link>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" className={btnGhost}>
            <LinkedIn /> LinkedIn <span className="sr-only">{dict.a11y.external}</span>
          </a>
          {cvHref && (
            <a href={cvHref} download className={btnGhost}>
              <Download /> {dict.common.downloadCv}
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
