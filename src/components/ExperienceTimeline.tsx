import { experience } from "@/content/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatMonth, formatRange, isoMonth } from "@/lib/format";
import { known } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TodoMark } from "./TodoMark";

/** Work history, newest first. `compact` shows company, titles and dates only (home page). */
export function ExperienceTimeline({
  locale,
  dict,
  compact,
  headingLevel = "h3",
}: {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
  /** "h2" when the timeline sits directly under the page h1. */
  headingLevel?: "h2" | "h3";
}) {
  const H = headingLevel;
  const Sub = headingLevel === "h2" ? "h3" : "h4";
  return (
    <ol className="relative border-l border-border">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.id} delay={i * 60} className="relative pb-12 pl-7 last:pb-0 sm:pl-10">
          <span aria-hidden className="absolute top-2 -left-[5px] size-2.5 rounded-full border-2 border-bg bg-primary" />
          <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-8">
            <div>
              <H className="text-xl font-semibold">{job.company}</H>
              <ul className="mt-1.5 space-y-0.5">
                {job.positions.map((pos) => {
                  const period = pos.period ? known(pos.period) : undefined;
                  return (
                    <li key={pos.title.en} className="text-fg-muted">
                      <span className="text-fg">{pos.title[locale]}</span>
                      <span className="text-fg-subtle"> · {pos.employmentType[locale]}</span>
                      {period && (
                        <span className="text-fg-subtle"> · {formatRange(period, locale, dict.common.present)}</span>
                      )}
                      {!compact && <TodoMark value={pos.period} className="ml-2" />}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="font-mono text-sm whitespace-nowrap text-fg-subtle sm:pt-1.5">
              <time dateTime={job.period.start}>{formatMonth(job.period.start, locale)}</time>
              {" – "}
              {job.period.end === "present" ? (
                dict.common.present
              ) : (
                <time dateTime={isoMonth(job.period.end)}>{formatMonth(job.period.end, locale)}</time>
              )}
            </p>
          </div>

          {!compact && (
            <>
              <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-fg-muted">
                {job.description.map((d, j) => (
                  <p key={j} className="text-pretty">{d[locale]}</p>
                ))}
              </div>
              {job.focus && job.focus.length > 0 && (
                <div className="mt-5">
                  <Sub className="eyebrow">{dict.experience.focus}</Sub>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {job.focus.map((f) => (
                      <li key={f.en} className="chip">{f[locale]}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.technologies.length > 0 && (
                <div className="mt-5">
                  <Sub className="eyebrow">{dict.experience.technologies}</Sub>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {job.technologies.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
