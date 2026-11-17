import type { CoverKind } from "@/content/types";

/**
 * Abstract, typographic-style cover art used until approved screenshots exist.
 * Pure line work in theme colours — it must never look like a real product UI.
 */
export function ProjectCover({ kind, label, className }: { kind: CoverKind; label: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-bg-elevated ${className ?? ""}`}
      aria-hidden
    >
      <div className="cover-glow absolute inset-0" />
      <svg viewBox="0 0 400 225" className="relative h-full w-full text-accent-text" fill="none">
        <defs>
          <pattern id={`dots-${kind}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill={`url(#dots-${kind})`} />
        {ART[kind]}
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[0.625rem] tracking-[0.18em] text-fg-subtle uppercase">
        {label}
      </span>
    </div>
  );
}

const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ART: Record<CoverKind, React.ReactNode> = {
  // Route with stops on a grid
  logistics: (
    <g {...stroke}>
      <path d="M60 170 C 110 170, 110 110, 160 110 S 220 60, 270 70 S 330 120, 350 80" opacity="0.9" strokeDasharray="4 6" />
      {[
        [60, 170],
        [160, 110],
        [270, 70],
        [350, 80],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="var(--bg-elevated)" />
          <circle cx={x} cy={y} r="3.5" fill="currentColor" stroke="none" />
        </g>
      ))}
      <rect x="250" y="135" width="90" height="46" rx="8" opacity="0.5" />
      <path d="M262 150h50M262 163h32" opacity="0.5" />
    </g>
  ),
  // Conversation + waveform
  ai: (
    <g {...stroke}>
      <rect x="70" y="58" width="150" height="44" rx="14" opacity="0.55" />
      <path d="M88 76h96M88 88h64" opacity="0.55" />
      <rect x="180" y="118" width="150" height="44" rx="14" opacity="0.9" />
      <path d="M198 136h104M198 148h70" opacity="0.9" />
      {Array.from({ length: 13 }).map((_, i) => {
        const h = [6, 14, 24, 12, 30, 18, 36, 18, 30, 12, 24, 14, 6][i];
        return <path key={i} d={`M${82 + i * 9} ${190 - h / 2}v${h}`} opacity="0.75" />;
      })}
    </g>
  ),
  // Isometric port blocks
  simulation: (
    <g {...stroke}>
      {[
        [120, 120],
        [170, 95],
        [220, 120],
        [170, 145],
        [270, 95],
      ].map(([x, y], i) => (
        <g key={i} opacity={0.45 + i * 0.1}>
          <path d={`M${x} ${y} l30 -15 l30 15 l-30 15 z`} />
          <path d={`M${x} ${y} v22 l30 15 v-22 M${x + 60} ${y} v22 l-30 15`} />
        </g>
      ))}
      <path d="M60 195 L 340 195" opacity="0.4" strokeDasharray="2 6" />
    </g>
  ),
  // Parking bays + truck outline
  game: (
    <g {...stroke}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${90 + i * 60} 60v100`} opacity="0.45" />
      ))}
      <path d="M90 160h240" opacity="0.45" />
      <g opacity="0.95">
        <rect x="160" y="74" width="40" height="70" rx="5" />
        <rect x="164" y="56" width="32" height="20" rx="4" />
      </g>
      <path d="M180 190 C 180 172, 200 168, 210 160" strokeDasharray="3 6" opacity="0.7" />
    </g>
  ),
  // Phone frame with crop marks and sliders
  ios: (
    <g {...stroke}>
      <rect x="150" y="28" width="100" height="172" rx="18" opacity="0.9" />
      <path d="M172 62v-10h10M228 62v-10h-10M172 128v10h10M228 128v10h-10" opacity="0.9" />
      <path d="M170 160h60M170 176h60" opacity="0.45" />
      <circle cx="196" cy="160" r="4" fill="currentColor" stroke="none" />
      <circle cx="214" cy="176" r="4" fill="currentColor" stroke="none" />
      <path d="M200 95 l18 -14 l12 10" opacity="0.55" />
    </g>
  ),
};
