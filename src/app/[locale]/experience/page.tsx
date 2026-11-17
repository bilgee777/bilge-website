import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/experience", dict.meta.pages.experience);
}

export default async function ExperiencePage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <>
      <PageHeader title={dict.experience.title} lead={dict.experience.lead} />
      <div className="container-page pb-24">
        <ExperienceTimeline locale={locale} dict={dict} headingLevel="h2" />
      </div>
    </>
  );
}
