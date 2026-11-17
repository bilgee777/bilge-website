import { skillGroups } from "@/content/skills";
import type { SkillEvidence } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

const ORDER: SkillEvidence[] = ["professional", "projects", "training"];

/** Small markers instead of percentage bars: ● professional · ◐ projects · ○ training */
function EvidenceDot({ kind }: { kind: SkillEvidence }) {
  const cls =
    kind === "professional"
      ? "bg-primary"
      : kind === "projects"
        ? "border border-primary bg-[linear-gradient(90deg,var(--primary)_50%,transparent_50%)]"
        : "border border-primary";
  return <span aria-hidden className={`inline-block size-2 rounded-full ${cls}`} />;
}

export function SkillsLegend({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
      <span className="eyebrow">{dict.skills.legendTitle}</span>
      {ORDER.map((k) => (
        <span key={k} className="inline-flex items-center gap-2">
          <EvidenceDot kind={k} />
          {dict.skills.evidence[k]}
        </span>
      ))}
    </div>
  );
}

export function SkillsGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.id} delay={(i % 3) * 70} className="card p-6">
          <h2 className="text-lg font-semibold">{group.title[locale]}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((skill) => {
              const evidence = ORDER.filter((k) => skill.evidence?.includes(k));
              const label = evidence.map((k) => dict.skills.evidence[k]).join(", ");
              return (
                <li key={skill.name} className="chip text-fg" title={label || undefined}>
                  {skill.name}
                  {evidence.length > 0 && (
                    <span className="inline-flex items-center gap-1">
                      {evidence.map((k) => (
                        <EvidenceDot key={k} kind={k} />
                      ))}
                      <span className="sr-only">({label})</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
