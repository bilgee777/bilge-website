import Link from "next/link";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { projectHref } from "@/i18n/routes";
import { known } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import { ProjectCover } from "./ProjectCover";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({
  project,
  locale,
  dict,
  headingLevel = "h3",
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  headingLevel?: "h2" | "h3";
}) {
  const H = headingLevel;
  const status = known(project.status);
  const used = known(project.caseStudy.technologies) ?? [];
  // Fall back to planned technologies only when nothing is confirmed yet — and label them as planned.
  const planned = used.length ? [] : (project.caseStudy.plannedTechnologies ?? []);
  const tech = used.length ? used : planned;
  return (
    <article className="card card-interactive group relative flex h-full flex-col p-4 sm:p-5">
      <ProjectCover kind={project.cover} label={project.category[locale]} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col px-1 pt-5 pb-1">
        <div className="flex flex-wrap items-center gap-2">
          {status && <StatusBadge status={status} dict={dict} short />}
          {project.confidential && (
            <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6875rem] text-fg-subtle">
              {dict.projects.confidential}
            </span>
          )}
        </div>
        <H className="mt-4 text-xl font-semibold">
          <Link href={projectHref(locale, project.slug)} className="after:absolute after:inset-0 after:rounded-2xl">
            {project.name[locale]}
          </Link>
        </H>
        <p className="mt-1 text-sm text-fg-subtle">
          {project.role[locale]}
          {project.context && <> · {project.context[locale]}</>}
        </p>
        <p className="mt-3 leading-relaxed text-fg-muted text-pretty">{project.summary[locale]}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {planned.length > 0 && (
              <span className="font-mono text-[0.6875rem] text-fg-subtle">{dict.caseStudy.plannedTech}:</span>
            )}
            <ul
              className="flex flex-wrap gap-1.5"
              aria-label={planned.length ? `${dict.caseStudy.technologies} (${dict.caseStudy.plannedTech})` : dict.caseStudy.technologies}
            >
              {tech.slice(0, 4).map((t) => (
                <li key={t} className={`chip !py-0.5 !text-xs ${planned.length ? "border-dashed" : ""}`}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text">
            {dict.common.readCaseStudy}
            <ArrowUpRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
