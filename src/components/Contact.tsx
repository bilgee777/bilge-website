import { person } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { btnSecondary } from "@/lib/ui";
import { CopyButton } from "./CopyButton";
import { Download, GitHub, LinkedIn } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TodoMark } from "./TodoMark";
import { showTodos } from "@/content/todo";

export function Contact({ locale, dict, cvHref }: { locale: Locale; dict: Dictionary; cvHref?: string }) {
  const t = dict.sections.contact;
  const github = known(person.github);
  const linkedin = known(person.linkedin);
  const hasLinks = Boolean(github || linkedin || cvHref) || showTodos;
  return (
    <Section id="contact" labelledBy="contact-title" className="hero-backdrop">
      <SectionHeading id="contact-title" index={t.index} title={t.title} lead={t.lead} />
      <Reveal className="card p-6 sm:p-10">
        <p className="eyebrow">{t.email}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={`mailto:${person.email}`}
            className="text-[clamp(1.25rem,4vw,2.25rem)] font-semibold tracking-tight break-all decoration-accent decoration-2 underline-offset-8 hover:underline"
          >
            {person.email}
          </a>
          <CopyButton value={person.email} label={t.copy} doneLabel={t.copied} />
        </div>

        {hasLinks && (
        <>
        <div className="hairline my-8" />

        <ul className="flex flex-wrap gap-3">
          {github && (
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer me" className={btnSecondary}>
                <GitHub /> GitHub <span className="sr-only">{dict.a11y.external}</span>
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer me" className={btnSecondary}>
                <LinkedIn /> LinkedIn <span className="sr-only">{dict.a11y.external}</span>
              </a>
            </li>
          )}
          {cvHref && (
            <li>
              <a href={cvHref} download className={btnSecondary}>
                <Download /> {dict.hero.downloadCv}
              </a>
            </li>
          )}
          <li className="flex flex-wrap items-center gap-2">
            <TodoMark value={person.github} />
            <TodoMark value={person.linkedin} />
          </li>
        </ul>
        </>
        )}
      </Reveal>
    </Section>
  );
}
