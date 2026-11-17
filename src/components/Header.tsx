"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Close, Menu } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const NAV_KEYS = ["about", "skills", "experience", "projects", "education", "contact"] as const;

export function Header({ locale, dict, name }: { locale: Locale; dict: Dictionary; name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5 font-medium tracking-tight">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg border border-border-strong bg-accent-soft font-mono text-xs text-accent"
          >
            BK
          </span>
          <span className="text-sm sm:text-[0.9375rem]">{name}</span>
        </a>

        <nav aria-label={dict.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="rounded-full px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {dict.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher locale={locale} label={dict.a11y.switchLang} />
          <ThemeToggle labels={dict.a11y} />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-accent-soft hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label={dict.a11y.mainNav}
        hidden={!open}
        className="border-t border-border md:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {NAV_KEYS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg"
              >
                {dict.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
