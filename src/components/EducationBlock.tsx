import { education } from "@/content/education";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatYears } from "@/lib/format";
import { known } from "@/lib/site";
import { visibleTraining } from "@/lib/visible";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { TodoMark } from "./TodoMark";

export function EducationBlock({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const trainings = visibleTraining();
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Reveal className="card p-6 sm:p-8">
        <h2 className="eyebrow">{dict.education.education}</h2>
        <ul className="mt-6 space-y-6">
          {education.map((item) => (
            <li key={item.institution.en}>
              <p className="font-display text-xl font-semibold">{item.institution[locale]}</p>
              <p className="mt-1 text-fg-muted">
                {item.degree[locale]} — {item.field[locale]}
              </p>
              <p className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-mono text-fg-subtle">{formatYears(item.period)}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-accent-soft px-2.5 py-0.5 text-accent-text">
                  {item.status[locale]}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      {trainings.length > 0 && (
        <Reveal delay={80} className="card p-6 sm:p-8">
          <h2 className="eyebrow">{dict.education.training}</h2>
          <ul className="mt-6 divide-y divide-border">
            {trainings.map((t) => {
              const issuer = known(t.issuer);
              const year = known(t.year);
              const verifyUrl = t.verifyUrl ? known(t.verifyUrl) : undefined;
              return (
                <li key={t.id} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-medium">{t.name[locale]}</p>
                    {year && <span className="font-mono text-sm text-fg-subtle">{year}</span>}
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">
                    {t.kind[locale]}
                    {issuer && <> · {issuer}</>}
                  </p>
                  {t.topics && (
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={dict.education.topics}>
                      {t.topics.map((topic) => (
                        <li key={topic} className="chip !py-0.5 !text-xs">{topic}</li>
                      ))}
                    </ul>
                  )}
                  {verifyUrl && (
                    <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-accent-text hover:underline">
                      {dict.education.verify} <ArrowUpRight width={14} height={14} />
                      <span className="sr-only">{dict.a11y.external}</span>
                    </a>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {!t.verified && <TodoMark value={{ __todo: true, note: "Unverified — hidden in production" }} />}
                    <TodoMark value={t.issuer} />
                    <TodoMark value={t.year} />
                    <TodoMark value={t.verifyUrl} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      )}
    </div>
  );
}
