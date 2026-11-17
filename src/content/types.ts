import type { Maybe } from "./todo";
import type { Locale } from "@/i18n/config";

/** A string translated into every supported locale. */
export type Localized = Record<Locale, string>;

/** Year-month in ISO form, e.g. "2026-09". Formatted per locale at render time. */
export type YearMonth = `${number}-${number}`;

export type DateRange = { start: YearMonth; end: YearMonth | "present" };

/* ── Experience ───────────────────────────────────────────────────────────── */

export type Position = {
  title: Localized;
  employmentType: Localized;
  /** Optional dates for a single position when one company had several. */
  period?: Maybe<DateRange>;
};

export type Experience = {
  id: string;
  company: string;
  /** Newest position first. */
  positions: Position[];
  period: DateRange;
  description: Localized[];
  /** Areas of focus (used for roles without a verified tool list). */
  focus?: Localized[];
  /** Only technologies confirmed for this role. */
  technologies: string[];
};

/* ── Projects / case studies ──────────────────────────────────────────────── */

export type ProjectStatusKind = "completed" | "in-development" | "employment";

export type ProjectStatus = {
  kind: ProjectStatusKind;
  /** Optional detail, e.g. "Public release unconfirmed". */
  note?: Localized;
};

/** Abstract cover artwork used until real, approved screenshots exist. */
export type CoverKind = "logistics" | "ai" | "simulation" | "game" | "ios";

export type Screenshot = { src: string; alt: Localized; width: number; height: number };

export type Project = {
  slug: string;
  name: Localized;
  category: Localized;
  role: Localized;
  /** Employer or context (company name, "Graduation project", …). */
  context?: Localized;
  team?: Localized;
  platform?: string;
  summary: Localized;
  status: Maybe<ProjectStatus>;
  /**
   * Company-owned work. When true: no screenshots, links, source or internal details,
   * and a confidentiality note is shown on the case study.
   */
  confidential: boolean;
  /**
   * "public": card + case study are published.
   * "draft": shown only in development / preview (NEXT_PUBLIC_SHOW_TODOS=true).
   */
  visibility: "public" | "draft";
  cover: CoverKind;

  caseStudy: {
    overview: Localized[];
    problem: Maybe<Localized>;
    solution: Maybe<Localized>;
    contributions: Maybe<Localized[]>;
    /** Features that are planned but not yet built (never listed as contributions). */
    plannedFeatures?: Localized[];
    /** Technologies actually used. */
    technologies: Maybe<string[]>;
    /** Technologies planned but not yet confirmed in the codebase. */
    plannedTechnologies?: string[];
    engineeringDecisions: Maybe<Localized[]>;
    keyLearnings: Maybe<Localized[]>;
    /** Real screenshots, only when publication is allowed. */
    screenshots: Maybe<Screenshot[]>;
  };
  links: Maybe<{ label: Localized; href: string }[]>;
};

/* ── Skills ───────────────────────────────────────────────────────────────── */

/**
 * Where a skill was used. Shown as a small marker instead of fake percentages.
 * Leave undefined when there is no confirmed context.
 */
export type SkillEvidence = "professional" | "projects" | "training";

export type Skill = { name: string; evidence?: SkillEvidence[] };

export type SkillGroup = {
  id: string;
  title: Localized;
  note?: Localized;
  items: Skill[];
};

/* ── Education & training ─────────────────────────────────────────────────── */

export type Education = {
  institution: Localized;
  degree: Localized;
  field: Localized;
  period: DateRange;
  status: Localized;
};

export type Training = {
  id: string;
  name: Localized;
  issuer: Maybe<string>;
  kind: Localized;
  topics?: string[];
  year: Maybe<string>;
  verifyUrl?: Maybe<string>;
  /** Unverified entries are hidden in production. */
  verified: boolean;
};
