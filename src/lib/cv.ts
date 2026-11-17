import "server-only";
import fs from "node:fs";
import path from "node:path";
import { person } from "@/content/person";
import type { Locale } from "@/i18n/config";

/**
 * Resolves the CV for a locale, falling back to the other language.
 * Runs at build time, so the button only appears when a PDF is really in /public.
 */
export function getCvHref(locale: Locale): string | undefined {
  const candidates = [person.cv[locale], ...Object.values(person.cv)];
  return candidates.find((href) =>
    fs.existsSync(path.join(process.cwd(), "public", href.replace(/^\//, ""))),
  );
}
