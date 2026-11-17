import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <header className="hero-backdrop pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="container-page">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}
