import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import { TodoMark } from "@/components/TodoMark";
import { isTodo, showTodos } from "@/content/todo";
import type { Project } from "@/content/types";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { href, projectHref } from "@/i18n/routes";
import { pageMetadata } from "@/lib/metadata";
import { known } from "@/lib/site";
import { findProject, visibleProjects } from "@/lib/visible";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => visibleProjects().map((p) => ({ locale, slug: p.slug })));
}

async function load(params: Params) {
  const { locale, slug } = await params;
  const project = findProject(slug);
  if (!isLocale(locale) || !project) notFound();
  return { locale, project, dict: getDictionary(locale) };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, project } = await load(params);
  return pageMetadata(locale, `/projects/${project.slug}`, {
    title: project.name[locale],
    description: project.summary[locale],
    type: "article",
  });
}

/** One case-study section. Renders nothing in production when its content is missing. */
function Block({ id, title, missing, children }: { id: string; title: string; missing?: unknown; children?: ReactNode }) {
  const isMissing = missing !== undefined && isTodo(missing);
  if (isMissing && !showTodos) return null;
  return (
    <Reveal as="section" aria-labelledby={id} className="grid gap-4 border-t border-border py-10 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <h2 id={id} className="text-lg font-semibold">
        {title}
      </h2>
      <div className="min-w-0 text-fg-muted">{isMissing ? <TodoMark value={missing} /> : children}</div>
    </Reveal>
  );
}

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed">
        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((t) => (
      <li key={t} className="chip text-fg">{t}</li>
    ))}
  </ul>
);

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, project, dict } = await load(params);
  const cs = project.caseStudy;
  const t = dict.caseStudy;
  const status = known(project.status);
  const contributions = known(cs.contributions);
  const technologies = known(cs.technologies);
  const decisions = known(cs.engineeringDecisions);
  const learnings = known(cs.keyLearnings);
  const screenshots = known(cs.screenshots) ?? [];
  const problem = known(cs.problem);
  const solution = known(cs.solution);

  const all = visibleProjects();
  const index = all.findIndex((p) => p.slug === project.slug);
  const next: Project | undefined = all[(index + 1) % all.length];

  const facts: [string, string | undefined][] = [
    [t.category, project.category[locale]],
    [t.role, project.role[locale]],
    [t.context, project.context?.[locale]],
    [t.team, project.team?.[locale]],
    [t.platform, project.platform],
  ];

  return (
    <article>
      <header className="hero-backdrop pt-28 pb-10 sm:pt-36">
        <div className="container-page">
          <nav aria-label={dict.a11y.breadcrumb} className="text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-fg-subtle">
              <li>
                <Link href={href(locale, "projects")} className="hover:text-fg">
                  {dict.nav.projects}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-fg-muted">{project.name[locale]}</li>
            </ol>
          </nav>

          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center gap-2">
              {status && <StatusBadge status={status} dict={dict} />}
              {project.confidential && (
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6875rem] text-fg-subtle">
                  {dict.projects.confidential}
                </span>
              )}
              <TodoMark value={project.status} />
            </div>
            <h1 className="mt-5 text-4xl font-semibold text-balance sm:text-6xl">{project.name[locale]}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-fg-muted text-pretty sm:text-xl">
              {project.summary[locale]}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 text-sm sm:grid-cols-3 lg:grid-cols-5">
              {facts
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow !text-[0.6875rem]">{k}</dt>
                    <dd className="mt-1.5 text-fg">{v}</dd>
                  </div>
                ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="container-page pb-24">
        <Reveal>
          <figure>
            <ProjectCover kind={project.cover} label={project.category[locale]} className="aspect-[16/9] sm:aspect-[21/9]" />
            <figcaption className="mt-2 text-xs text-fg-subtle">{t.coverNote}</figcaption>
          </figure>
        </Reveal>

        {project.confidential && (
          <Reveal as="aside" className="mt-8 rounded-xl border border-border-strong bg-accent-soft p-5 sm:p-6">
            <p className="font-display font-medium text-fg">{t.confidentialTitle}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{t.confidentialBody}</p>
          </Reveal>
        )}

        <div className="mt-12">
          <Block id="overview" title={t.overview}>
            <div className="space-y-4 text-lg leading-relaxed">
              {cs.overview.map((p, i) => (
                <p key={i} className="text-pretty">{p[locale]}</p>
              ))}
            </div>
          </Block>

          <Block id="problem" title={t.problem} missing={cs.problem}>
            {problem && <p className="leading-relaxed text-pretty">{problem[locale]}</p>}
          </Block>

          <Block id="solution" title={t.solution} missing={cs.solution}>
            {solution && <p className="leading-relaxed text-pretty">{solution[locale]}</p>}
          </Block>

          <Block id="contributions" title={t.contributions} missing={cs.contributions}>
            {contributions && <Bullets items={contributions.map((c) => c[locale])} />}
          </Block>

          {cs.plannedFeatures && (
            <Block id="planned" title={t.plannedFeatures}>
              <p className="mb-4 text-sm text-fg-subtle">{t.plannedNote}</p>
              <Bullets items={cs.plannedFeatures.map((f) => f[locale])} />
            </Block>
          )}

          <Block id="technologies" title={t.technologies}>
            <div className="space-y-5">
              {(technologies?.length || (isTodo(cs.technologies) && showTodos)) && (
                <div>
                  {cs.plannedTechnologies && <p className="eyebrow mb-2.5">{t.usedTech}</p>}
                  {technologies && <Chips items={technologies} />}
                  <TodoMark value={cs.technologies} />
                </div>
              )}
              {cs.plannedTechnologies && (
                <div>
                  <p className="eyebrow mb-2.5">{t.plannedTech}</p>
                  <ul className="flex flex-wrap gap-2">
                    {cs.plannedTechnologies.map((tech) => (
                      <li key={tech} className="chip border-dashed">{tech}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Block>

          <Block id="decisions" title={t.decisions} missing={cs.engineeringDecisions}>
            {decisions && <Bullets items={decisions.map((d) => d[locale])} />}
          </Block>

          <Block id="status" title={t.status} missing={project.status}>
            {status && (
              <div className="space-y-2">
                <StatusBadge status={status} dict={dict} />
                {status.note && <p className="text-sm">{status.note[locale]}</p>}
              </div>
            )}
          </Block>

          {project.confidential ? (
            <Block id="screenshots" title={t.screenshots}>
              <p className="text-sm">{t.noScreenshots}</p>
            </Block>
          ) : (
            <Block id="screenshots" title={t.screenshots} missing={screenshots.length ? undefined : cs.screenshots}>
              {screenshots.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {screenshots.map((s) => (
                    <Image
                      key={s.src}
                      src={s.src}
                      alt={s.alt[locale]}
                      width={s.width}
                      height={s.height}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="rounded-xl border border-border"
                    />
                  ))}
                </div>
              )}
            </Block>
          )}

          <Block id="learnings" title={t.learnings} missing={cs.keyLearnings}>
            {learnings && <Bullets items={learnings.map((l) => l[locale])} />}
          </Block>
        </div>

        <nav className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link href={href(locale, "projects")} className="text-sm text-fg-muted hover:text-fg">
            ← {dict.common.backToProjects}
          </Link>
          {next && next.slug !== project.slug && (
            <Link href={projectHref(locale, next.slug)} className="group text-right">
              <span className="eyebrow block">→</span>
              <span className="font-display text-lg font-medium group-hover:text-accent-text">{next.name[locale]}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
