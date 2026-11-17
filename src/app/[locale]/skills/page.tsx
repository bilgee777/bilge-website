import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillsGrid, SkillsLegend } from "@/components/SkillsGrid";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/skills", dict.meta.pages.skills);
}

export default async function SkillsPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <>
      <PageHeader title={dict.skills.title} lead={dict.skills.lead} />
      <div className="container-page pb-24">
        <div className="mb-8">
          <SkillsLegend dict={dict} />
        </div>
        <SkillsGrid locale={locale} dict={dict} />
      </div>
    </>
  );
}
