"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routes";

/** Switches to the same page in the other language. */
export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "tr" ? "en" : "tr";
  return (
    <Link
      href={switchLocalePath(pathname, target)}
      hrefLang={target}
      aria-label={label}
      title={label}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className="inline-flex h-9 items-center rounded-full px-3 font-mono text-xs tracking-wider text-fg-muted uppercase transition-colors hover:bg-accent-soft hover:text-fg"
    >
      <span className="text-fg">{locale}</span>
      <span className="mx-1 text-fg-subtle" aria-hidden>/</span>
      <span>{target}</span>
    </Link>
  );
}
