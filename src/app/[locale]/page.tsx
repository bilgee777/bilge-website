import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { href } from "@/i18n/routes";
import { getCvHref } from "@/lib/cv";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { visibleProjects } from "@/lib/visible";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  return pageMetadata(locale, "", { type: "profile" });
}

export default async function HomePage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  const cvHref = getCvHref(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} cvHref={cvHref} />

      <Section id="projects" labelledBy="projects-title" className="border-t border-border">
        <SectionHeading
          id="projects-title"
          title={dict.home.selectedWork}
          lead={dict.home.selectedWorkLead}
          action={{ href: href(locale, "projects"), label: dict.common.viewAll }}
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {visibleProjects().map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 2) * 80}>
              <ProjectCard project={project} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="experience" labelledBy="experience-title" className="bg-bg-elevated/40">
        <SectionHeading
          id="experience-title"
          title={dict.home.experienceTitle}
          action={{ href: href(locale, "experience"), label: dict.common.viewAll }}
        />
        <ExperienceTimeline locale={locale} dict={dict} compact />
      </Section>

      <Section id="contact" labelledBy="contact-title">
        <ContactPanel locale={locale} dict={dict} cvHref={cvHref} lead={dict.home.contactLead} />
      </Section>
    </>
  );
}
