import { experience } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TodoMark } from "./TodoMark";

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sections.experience;
  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeading id="experience-title" index={t.index} title={t.title} />
      <ol className="relative border-l border-border">
        {experience.map((job, i) => {
          const period = known(job.period);
          const type = known(job.employmentType);
          const summary = known(job.summary);
          return (
            <Reveal as="li" key={job.id} delay={i * 60} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden
                className="absolute top-2 -left-[5px] size-2.5 rounded-full border-2 border-bg bg-accent"
              />
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                  <p className="mt-1 text-fg-muted">
                    {job.role[locale]}
                    {type && <span className="text-fg-subtle"> · {type[locale]}</span>}
                  </p>
                </div>
                <div className="flex flex-wrap items-start gap-2 sm:justify-end">
                  {period && <p className="font-mono text-sm text-fg-subtle">{period[locale]}</p>}
                  <TodoMark value={job.period} />
                  <TodoMark value={job.employmentType} />
                </div>
              </div>

              {summary && <p className="mt-4 max-w-3xl leading-relaxed text-fg-muted">{summary[locale]}</p>}
              <TodoMark value={job.summary} className="mt-3" />

              {job.highlights.length > 0 && (
                <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 text-fg-muted marker:text-accent">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h[locale]}</li>
                  ))}
                </ul>
              )}

              {job.stack.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
