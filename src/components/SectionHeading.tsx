import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  index,
  title,
  lead,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-border-strong" aria-hidden />
      </p>
      <h2 id={id} className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-2xl text-fg-muted text-pretty">{lead}</p>}
    </Reveal>
  );
}
