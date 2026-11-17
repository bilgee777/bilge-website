import type { Locale } from "./config";

/** Page keys → path (same slugs in both languages: /tr/projects, /en/projects). */
export const pages = {
  home: "",
  about: "/about",
  experience: "/experience",
  projects: "/projects",
  skills: "/skills",
  education: "/education",
  contact: "/contact",
} as const;

export type PageKey = keyof typeof pages;

export const NAV: Exclude<PageKey, "home">[] = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export const href = (locale: Locale, page: PageKey) => `/${locale}${pages[page]}`;
export const projectHref = (locale: Locale, slug: string) => `/${locale}/projects/${slug}`;

/** The same page in another language (used by the language switcher). */
export const switchLocalePath = (pathname: string, target: Locale) => {
  const [, , ...rest] = pathname.split("/");
  return `/${target}${rest.length ? `/${rest.join("/")}` : ""}`;
};
