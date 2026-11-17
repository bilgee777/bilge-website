import { person } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowUp } from "./Icons";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 text-sm text-fg-subtle sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {person.name}. {dict.footer.rights}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-fg">
          <ArrowUp width={15} height={15} /> {dict.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
