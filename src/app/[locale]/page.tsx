import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { person } from "@/content/profile";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getCvHref } from "@/lib/cv";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const cvHref = getCvHref(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-primary px-4 py-2 text-sm text-primary-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        {dict.a11y.skip}
      </a>
      <Header locale={locale} dict={dict} name={person.name} />
      <main id="main">
        <Hero locale={locale} dict={dict} cvHref={cvHref} />
        <About locale={locale} dict={dict} />
        <Skills locale={locale} dict={dict} />
        <Experience locale={locale} dict={dict} />
        <Projects locale={locale} dict={dict} />
        <Education locale={locale} dict={dict} />
        <Contact locale={locale} dict={dict} cvHref={cvHref} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
