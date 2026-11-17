import { certifications, certificationsNote, education } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TodoMark } from "./TodoMark";

export function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sections.education;
  const hasCerts = certifications.length > 0;
  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeading id="education-title" index={t.index} title={t.title} />
      <div className={`grid gap-4 ${hasCerts ? "lg:grid-cols-2" : ""}`}>
        <Reveal className="card p-6 sm:p-8">
          <h3 className="eyebrow">{t.education}</h3>
          <ul className="mt-6 space-y-6">
            {education.map((item) => {
              const degree = known(item.degree);
              const period = known(item.period);
              return (
                <li key={item.institution}>
                  <p className="text-xl font-semibold tracking-tight">{item.institution}</p>
                  <p className="mt-1 text-fg-muted">
                    {item.program[locale]}
                    {degree && <span className="text-fg-subtle"> · {degree[locale]}</span>}
                  </p>
                  {period && <p className="mt-2 font-mono text-sm text-fg-subtle">{period[locale]}</p>}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <TodoMark value={item.degree} />
                    <TodoMark value={item.period} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {hasCerts && (
          <Reveal delay={80} className="card p-6 sm:p-8">
            <h3 className="eyebrow">{t.certifications}</h3>
            <ul className="mt-6 divide-y divide-border">
              {certifications.map((cert) => {
                const year = known(cert.year);
                return (
                  <li key={cert.name} className="flex items-baseline justify-between gap-4 py-4 first:pt-0">
                    <div>
                      <p className="font-medium">
                        {cert.href ? (
                          <a href={cert.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                            {cert.name}
                            <ArrowUpRight width={14} height={14} />
                            <span className="sr-only">{dict.a11y.external}</span>
                          </a>
                        ) : (
                          cert.name
                        )}
                      </p>
                      <p className="text-sm text-fg-muted">{cert.issuer}</p>
                    </div>
                    {year && <span className="font-mono text-sm text-fg-subtle">{year}</span>}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        )}
      </div>
      {!hasCerts && <TodoMark value={certificationsNote} className="mt-4" />}
    </Section>
  );
}
