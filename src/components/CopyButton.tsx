"use client";

import { useState } from "react";
import { Check, Copy } from "./Icons";

export function CopyButton({ value, label, doneLabel }: { value: string; label: string; doneLabel: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          /* clipboard unavailable — the mailto link still works */
        }
      }}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg"
    >
      {done ? <Check width={15} height={15} /> : <Copy width={15} height={15} />}
      <span aria-live="polite">{done ? doneLabel : label}</span>
    </button>
  );
}
