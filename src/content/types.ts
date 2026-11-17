import type { Maybe } from "./todo";
import type { Locale } from "@/i18n/config";

/** A string translated into every supported locale. */
export type Localized = Record<Locale, string>;

export type ExternalLink = {
  label: Localized;
  href: string;
};

export type Experience = {
  id: string;
  company: string;
  role: Localized;
  /** e.g. "2024-03" … "present". Kept as free text so the owner controls the format. */
  period: Maybe<Localized>;
  employmentType: Maybe<Localized>;
  summary: Maybe<Localized>;
  /** Concrete responsibilities. Leave empty until confirmed — do not invent achievements. */
  highlights: Localized[];
  stack: string[];
};

export type ProjectStatus = "in-development" | "completed" | "published";

export type Project = {
  id: string;
  name: Localized;
  tagline: Localized;
  description: Maybe<Localized>;
  status: Maybe<ProjectStatus>;
  stack: Maybe<string[]>;
  links: Maybe<ExternalLink[]>;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  items: string[];
};

export type Education = {
  institution: string;
  program: Localized;
  degree: Maybe<Localized>;
  period: Maybe<Localized>;
};

export type Certification = {
  name: string;
  issuer: string;
  year: Maybe<string>;
  href?: string;
};
