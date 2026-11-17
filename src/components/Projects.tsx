import { projects } from "@/content/profile";
import type { ProjectStatus } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { known } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TodoMark } from "./TodoMark";

function StatusBadge({ status, dict }: { status: ProjectStatus; dict: Dictionary }) {
  const inProgress = status === "in-development";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wider uppercase ${
        inProgress ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-fg-muted"
      }`}
    >
      <span
        aria-hidden
        className={`size-1.5 rounded-full ${inProgress ? "bg-accent" : "bg-fg-subtle"}`}
      />
      {dict.status[status]}
    </span>
  );
}

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sections.projects;
  return (
    <Section id="projects" labelledBy="projects-title" className="bg-bg-elevated/40">
      <SectionHeading id="projects-title" index={t.index} title={t.title} lead={t.lead} />
      <ul className="grid gap-4 md:grid-cols-2 md:[&>li:last-child:nth-child(odd)]:col-span-2">
        {projects.map((project, i) => {
          const status = known(project.status);
          const stack = known(project.stack);
          const links = known(project.links);
          const description = known(project.description);
          return (
            <Reveal
              as="li"
              key={project.id}
              delay={(i % 2) * 80}
              className="card card-interactive flex flex-col p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-fg-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {status && <StatusBadge status={status} dict={dict} />}
                <TodoMark value={project.status} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{project.name[locale]}</h3>
              <p className="mt-2 text-fg-muted">{project.tagline[locale]}</p>

              {description && (
                <p className="mt-4 leading-relaxed text-fg-muted text-pretty">{description[locale]}</p>
              )}
              <TodoMark value={project.description} className="mt-4 self-start" />

              <div className="mt-auto pt-8">
                {stack && stack.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="Stack">
                    {stack.map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>
                )}
                <TodoMark value={project.stack} />

                {links && links.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                        >
                          {link.label[locale]}
                          <ArrowUpRight width={15} height={15} />
                          <span className="sr-only">{dict.a11y.external}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <TodoMark value={project.links} className="mt-3" />
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
