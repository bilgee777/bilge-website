import { hero, person } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { btnGhost, btnPrimary, btnSecondary } from "@/lib/ui";
import { ArrowDown, Download } from "./Icons";
import { Reveal } from "./Reveal";
import { TodoMark } from "./TodoMark";

export function Hero({
  locale,
  dict,
  cvHref,
}: {
  locale: Locale;
  dict: Dictionary;
  cvHref?: string;
}) {
  const location = known(person.location);
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-backdrop relative">
      <div className="container-page flex min-h-[92svh] flex-col justify-center pt-28 pb-16 sm:pt-32">
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-3">
            <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
            {person.title[locale]}
            {location && (
              <>
                <span aria-hidden className="text-border-strong">/</span>
                {location[locale]}
              </>
            )}
            <TodoMark value={person.location} />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] font-semibold tracking-[-0.035em]"
          >
            Bilge{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              Korkmaz
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-xl leading-snug font-medium tracking-tight text-balance sm:text-2xl">
            {hero.headline[locale]}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-fg-muted text-pretty">
            {hero.intro[locale]}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className={btnPrimary}>
            {dict.hero.ctaProjects}
          </a>
          <a href="#contact" className={btnSecondary}>
            {dict.hero.ctaContact}
          </a>
          {cvHref ? (
            <a href={cvHref} download className={btnGhost}>
              <Download />
              {dict.hero.downloadCv}
            </a>
          ) : (
            <TodoMark value={{ __todo: true, note: `Add CV PDF at public${person.cv[locale]}` }} />
          )}
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label={dict.nav.about}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-fg-subtle transition-colors hover:text-fg sm:block"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
