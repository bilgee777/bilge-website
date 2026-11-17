import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { getCvHref } from "@/lib/cv";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, "/contact", dict.meta.pages.contact);
}

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <div className="hero-backdrop">
      <div className="container-page pt-32 pb-24 sm:pt-40">
        <p className="eyebrow mb-4">{dict.contact.title}</p>
        <ContactPanel locale={locale} dict={dict} cvHref={getCvHref(locale)} headingLevel="h1" lead={dict.contact.lead} />
      </div>
    </div>
  );
}
