import { about } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sections.about;
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading id="about-title" index={t.index} title={t.title} />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-fg-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p[locale]}
            </p>
          ))}
        </Reveal>
        <Reveal delay={100}>
          <h3 className="eyebrow">{t.focus}</h3>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {about.focusAreas.map((area, i) => (
              <li key={area.en} className="flex items-baseline gap-4 py-4">
                <span className="font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{area[locale]}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
