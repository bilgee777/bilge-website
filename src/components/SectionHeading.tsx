import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  title,
  lead,
  action,
}: {
  id: string;
  title: string;
  lead?: string;
  action?: { href: string; label: string };
}) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
      <div>
        <h2 id={id} className="text-3xl font-semibold text-balance sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-2xl text-fg-muted text-pretty">{lead}</p>}
      </div>
      {action && (
        <Link href={action.href} className="inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:underline">
          {action.label}
          <ArrowUpRight width={15} height={15} />
        </Link>
      )}
    </Reveal>
  );
}
