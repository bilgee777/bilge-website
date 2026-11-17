import Link from "next/link";
import { person } from "@/content/person";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { NAV, href } from "@/i18n/routes";
import { LinkedIn, Mail } from "./Icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <div className="container-page grid gap-8 py-10 text-sm sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="font-display text-base font-medium">{person.name}</p>
          <p className="mt-1 text-fg-subtle">
            {person.title[locale]} · {person.location[locale]}
          </p>
          <div className="mt-4 flex gap-1">
            <a href={`mailto:${person.email}`} aria-label={dict.common.email} className="inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-accent-soft hover:text-fg">
              <Mail />
            </a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`LinkedIn ${dict.a11y.external}`} className="inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-accent-soft hover:text-fg">
              <LinkedIn />
            </a>
          </div>
        </div>
        <nav aria-label={dict.a11y.footerNav}>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {NAV.map((key) => (
              <li key={key}>
                <Link href={href(locale, key)} className="text-fg-muted hover:text-fg">
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page border-t border-border py-6 text-xs text-fg-subtle">
        © {new Date().getFullYear()} {person.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
