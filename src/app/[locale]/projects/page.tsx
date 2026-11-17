import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { visibleProjects } from "@/lib/visible";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/projects", dict.meta.pages.projects);
}

export default async function ProjectsPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <>
      <PageHeader title={dict.projects.title} lead={dict.projects.lead} />
      <div className="container-page pb-24">
        <ul className="grid gap-5 md:grid-cols-2">
          {visibleProjects().map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 2) * 80}>
              <ProjectCard project={project} locale={locale} dict={dict} headingLevel="h2" />
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  );
}
