import { contact, person } from "@/content/person";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { btnSecondary } from "@/lib/ui";
import { CopyButton } from "./CopyButton";
import { Download, GitHub, LinkedIn } from "./Icons";
import { Reveal } from "./Reveal";
import { TodoMark } from "./TodoMark";

export function ContactPanel({
  locale,
  dict,
  cvHref,
  headingLevel = "h2",
  lead,
}: {
  locale: Locale;
  dict: Dictionary;
  cvHref?: string;
  headingLevel?: "h1" | "h2";
  lead: string;
}) {
  const Heading = headingLevel;
  const github = known(person.github);
  return (
    <Reveal className="card relative overflow-hidden p-6 sm:p-10 lg:p-12">
      <div className="cover-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <Heading id="contact-title" className="max-w-3xl text-[clamp(1.875rem,5vw,3.25rem)] leading-[1.05] font-semibold text-balance">
          {contact.heading[locale]}
        </Heading>
        <p className="mt-5 max-w-2xl text-fg-muted text-pretty">{lead}</p>

        <div className="hairline my-8" />

        <p className="eyebrow">{dict.common.email}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={`mailto:${person.email}`}
            className="font-display text-[clamp(1.125rem,3.6vw,1.75rem)] font-medium break-all decoration-primary decoration-2 underline-offset-8 hover:underline"
          >
            {person.email}
          </a>
          <CopyButton value={person.email} label={dict.common.copy} doneLabel={dict.common.copied} />
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-3">
          <li>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" className={btnSecondary}>
              <LinkedIn /> LinkedIn <span className="sr-only">{dict.a11y.external}</span>
            </a>
          </li>
          {github && (
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer me" className={btnSecondary}>
                <GitHub /> GitHub <span className="sr-only">{dict.a11y.external}</span>
              </a>
            </li>
          )}
          {cvHref && (
            <li>
              <a href={cvHref} download className={btnSecondary}>
                <Download /> {dict.common.downloadCv}
              </a>
            </li>
          )}
          <li className="flex flex-wrap gap-2">
            <TodoMark value={person.github} />
            {!cvHref && <TodoMark value={{ __todo: true, note: `CV PDF pending (public${person.cv[locale]})` }} />}
          </li>
        </ul>
      </div>
    </Reveal>
  );
}
