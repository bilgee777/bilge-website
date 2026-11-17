import type { ProjectStatus } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function StatusBadge({ status, dict, short }: { status: ProjectStatus; dict: Dictionary; short?: boolean }) {
  const active = status.kind === "in-development";
  const label = short ? dict.statusShort[status.kind] : dict.status[status.kind];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide ${
        active ? "border-primary/40 bg-accent-soft text-accent-text" : "border-border text-fg-muted"
      }`}
    >
      <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${active ? "bg-primary" : "bg-fg-subtle"}`} />
      {label}
    </span>
  );
}
