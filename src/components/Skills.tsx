import { skillGroups } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sections.skills;
  return (
    <Section id="skills" labelledBy="skills-title" className="bg-bg-elevated/40">
      <SectionHeading id="skills-title" index={t.index} title={t.title} lead={t.lead} />
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 70} className="card p-6 sm:p-7">
            <h3 className="eyebrow">{group.title[locale]}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
