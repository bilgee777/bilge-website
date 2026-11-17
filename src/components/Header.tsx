"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { NAV, href } from "@/i18n/routes";
import { Close, Menu } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, dict, name }: { locale: Locale; dict: Dictionary; name: string }) {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isActive = (key: (typeof NAV)[number]) => {
    const target = href(locale, key);
    return pathname === target || pathname.startsWith(`${target}/`);
  };
  const solid = scrolled || open;

  const links = (mobile: boolean) =>
    NAV.map((key) => {
      const active = isActive(key);
      return (
        <li key={key}>
          <Link
            href={href(locale, key)}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `block rounded-lg px-2 py-3 transition-colors hover:bg-accent-soft ${active ? "text-fg" : "text-fg-muted"}`
                : `relative rounded-full px-3 py-2 text-sm transition-colors hover:text-fg ${active ? "text-fg" : "text-fg-muted"}`
            }
          >
            {dict.nav[key]}
            {active && !mobile && (
              <span aria-hidden className="absolute bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 bg-primary" />
            )}
          </Link>
        </li>
      );
    });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={href(locale, "home")} className="flex items-center gap-2.5 font-display font-medium">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg border border-border-strong bg-accent-soft font-mono text-xs text-accent-text"
          >
            BK
          </span>
          <span className="text-sm sm:text-[0.9375rem]">{name}</span>
        </Link>

        <nav aria-label={dict.a11y.mainNav} className="hidden min-[900px]:block">
          <ul className="flex items-center gap-0.5">{links(false)}</ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher locale={locale} label={dict.a11y.switchLang} />
          <ThemeToggle labels={dict.a11y} />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-accent-soft hover:text-fg min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label={dict.a11y.mainNav} hidden={!open} className="border-t border-border min-[900px]:hidden">
        <ul className="container-page flex flex-col py-3">{links(true)}</ul>
      </nav>
    </header>
  );
}
