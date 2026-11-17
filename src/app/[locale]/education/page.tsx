import type { Metadata } from "next";
import { EducationBlock } from "@/components/EducationBlock";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/education", dict.meta.pages.education);
}

export default async function EducationPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <>
      <PageHeader eyebrow={dict.about.graduate} title={dict.education.title} />
      <div className="container-page pb-24">
        <EducationBlock locale={locale} dict={dict} />
      </div>
    </>
  );
}
