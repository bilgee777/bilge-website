/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything the site says about Bilge Korkmaz lives in this file.
 *
 *  Rules:
 *   • Only confirmed facts. Missing information is marked with todo("…").
 *   • Do not add metrics, dates, user counts or achievements that are not real.
 *   • FrameLab is in development — keep its status as "in-development" until it ships.
 *
 *  Run `npm run content:todos` to list every open item.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { todo, type Maybe } from "./todo";
import type {
  Certification,
  Education,
  Experience,
  Localized,
  Project,
  SkillGroup,
} from "./types";

export const person = {
  name: "Bilge Korkmaz",
  title: { tr: "Yazılım Mühendisi", en: "Software Engineer" } satisfies Localized,

  location: todo("Location to display, e.g. 'İstanbul, Türkiye' — confirm") as Maybe<Localized>,

  // CONFIRM: taken from the previous version of the site. Replace if it has changed.
  email: "korkmazbilge814@gmail.com",

  github: todo("GitHub profile URL, e.g. https://github.com/<username>") as Maybe<string>,
  linkedin: todo("LinkedIn profile URL, e.g. https://www.linkedin.com/in/<handle>") as Maybe<string>,

  /**
   * CV files. Place PDFs at these paths inside /public. The download button only
   * renders when the file actually exists at build time.
   * TODO: add public/cv/bilge-korkmaz-cv-tr.pdf and public/cv/bilge-korkmaz-cv-en.pdf
   */
  cv: {
    tr: "/cv/bilge-korkmaz-cv-tr.pdf",
    en: "/cv/bilge-korkmaz-cv-en.pdf",
  } satisfies Localized,
};

/* ── Hero & About ─────────────────────────────────────────────────────────── */

export const hero = {
  // DRAFT — written only from the facts provided. Review wording before launch.
  headline: {
    tr: "Mobil ürünler ve yapay zekâ entegrasyonu üzerine çalışan yazılım mühendisi.",
    en: "Software engineer focused on mobile products and AI integration.",
  } satisfies Localized,
  intro: {
    tr: "Swift ve SwiftUI ile native iOS, React Native ve Expo ile çapraz platform mobil uygulamalar geliştiriyorum. C#, .NET ve SQL Server ile backend tarafında da çalışıyorum.",
    en: "I build native iOS apps with Swift and SwiftUI, and cross-platform mobile apps with React Native and Expo. I also work on the backend with C#, .NET and SQL Server.",
  } satisfies Localized,
};

export const about = {
  // DRAFT — review and personalise. Avoid adding claims that cannot be backed up.
  paragraphs: [
    {
      tr: "İstanbul Gelişim Üniversitesi Bilgisayar Mühendisliği bölümünde eğitim aldım. Çalışmalarımın merkezinde mobil uygulama geliştirme, özellikle iOS ekosistemi yer alıyor.",
      en: "I studied Computer Engineering at Istanbul Gelişim University. My work centres on mobile application development, particularly the iOS ecosystem.",
    },
    {
      tr: "Yazılım geliştirme ve test rollerinde farklı ekiplerle çalıştım. Lojistik, navigasyon ve simülasyon gibi alanlarda projeler geliştirdim. Yapay zekâ özelliklerini gerçek ürünlere entegre etmek ilgi alanlarımın başında geliyor.",
      en: "I have worked with different teams in software development and testing roles, and built projects in areas such as logistics, navigation and simulation. Integrating AI features into real products is one of my main interests.",
    },
  ] satisfies Localized[],
  focusAreas: [
    { tr: "Mobil Geliştirme", en: "Mobile Development" },
    { tr: "iOS Geliştirme", en: "iOS Development" },
    { tr: "Yapay Zekâ Entegrasyonu", en: "AI Integration" },
    { tr: "Yazılım Mühendisliği", en: "Software Engineering" },
  ] satisfies Localized[],
};

/* ── Skills ───────────────────────────────────────────────────────────────── */
// No proficiency percentages or bars on purpose — they are not measurable.

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: { tr: "Mobil & iOS", en: "Mobile & iOS" },
    items: ["Swift", "SwiftUI", "UIKit", "React Native", "Expo"],
  },
  {
    id: "backend",
    title: { tr: "Backend & Veri", en: "Backend & Data" },
    items: ["C#", ".NET", "SQL Server", "REST API"],
  },
  {
    id: "game",
    title: { tr: "Oyun & Simülasyon", en: "Games & Simulation" },
    items: ["Unity"],
  },
  {
    id: "tools",
    title: { tr: "Araçlar & Süreç", en: "Tools & Workflow" },
    items: ["Git"],
  },
];

/* ── Experience ───────────────────────────────────────────────────────────── */
// TODO: order is as provided. Re-order newest-first once dates are confirmed.

export const experience: Experience[] = [
  {
    id: "ihlas",
    company: "İhlas Holding",
    role: { tr: "Yazılım Geliştirme ve Test", en: "Software Development & Testing" },
    period: todo("Start – end date"),
    employmentType: todo("Full-time / part-time / internship"),
    summary: todo("1–2 sentences on what you worked on — confirmed facts only"),
    highlights: [],
    stack: [], // TODO
  },
  {
    id: "solon",
    company: "Solon Yazılım",
    role: { tr: "Yazılım Geliştirme", en: "Software Development" },
    period: todo("Start – end date"),
    employmentType: todo("Full-time / part-time / internship"),
    summary: todo("1–2 sentences on what you worked on — confirmed facts only"),
    highlights: [],
    stack: [], // TODO
  },
  {
    id: "iqb",
    company: "IQB Solutions",
    role: { tr: "Yazılım Testi", en: "Software Testing" },
    period: todo("Start – end date"),
    employmentType: todo("Full-time / part-time / internship"),
    summary: todo("1–2 sentences on what you worked on — confirmed facts only"),
    highlights: [],
    stack: [], // TODO
  },
  {
    id: "yuksi",
    company: "YÜKSİ",
    role: { tr: "Mobil Uygulama Geliştirme", en: "Mobile Application Development" },
    period: todo("Start – end date (or 'Present')"),
    employmentType: todo("Full-time / part-time / internship"),
    summary: todo("1–2 sentences on what you worked on — confirmed facts only"),
    highlights: [],
    stack: [], // TODO: technologies actually used in this role
  },
];

/* ── Projects ─────────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    id: "kargoio",
    name: { tr: "KargoIO", en: "KargoIO" },
    tagline: { tr: "Kurye ve lojistik mobil uygulaması", en: "Courier and logistics mobile app" },
    description: todo("What the app does, your role, platform (iOS / React Native?)"),
    status: todo("in-development / completed / published"),
    stack: todo("Technologies used — confirm"),
    links: todo("App Store / repo / case-study link, if public"),
  },
  {
    id: "ai-road-assistant",
    name: { tr: "AI Yol Asistanı", en: "AI Road Assistant" },
    tagline: {
      tr: "Yapay zekâ destekli navigasyon asistanı",
      en: "AI-powered navigation assistant",
    },
    description: todo("What it does, which AI service/model, your role"),
    status: todo("in-development / completed / published"),
    stack: todo("Technologies used — confirm"),
    links: todo("Repo / demo link, if public"),
  },
  {
    id: "port-simulation",
    name: { tr: "Unity Liman Simülasyonu", en: "Unity Port Simulation" },
    tagline: { tr: "Unity ile geliştirilmiş liman simülasyonu", en: "Port simulation built with Unity" },
    description: todo("What is simulated, context (course / team / personal)"),
    status: todo("in-development / completed"),
    stack: ["Unity"], // TODO: add C# if confirmed
    links: todo("Repo / video link, if public"),
  },
  {
    id: "truck-parking",
    name: { tr: "Tır Park Etme Oyunu", en: "Truck Parking Game" },
    tagline: { tr: "Tır park etme oyunu", en: "Truck parking game" },
    description: todo("Gameplay, platform, context"),
    status: todo("in-development / completed / published"),
    stack: todo("Engine and language — confirm"),
    links: todo("Store / repo / video link, if public"),
  },
  {
    id: "framelab",
    name: { tr: "FrameLab", en: "FrameLab" },
    tagline: {
      tr: "Native iOS fotoğraf düzenleme projesi",
      en: "Native iOS photo editing project",
    },
    description: todo("Planned scope / features being built — describe as work in progress"),
    status: "in-development", // Keep until it actually ships.
    stack: ["iOS"], // TODO: confirm, e.g. Swift, SwiftUI, Core Image
    links: [], // Not published yet.
  },
];

/* ── Education & Certifications ───────────────────────────────────────────── */

export const education: Education[] = [
  {
    institution: "İstanbul Gelişim Üniversitesi",
    program: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
    degree: todo("Degree, e.g. 'Lisans / B.Sc.' — and whether graduated or ongoing"),
    period: todo("Start – graduation year"),
  },
];

// TODO: add certifications (name, issuer, year, verification link). Section hides when empty.
export const certifications: Certification[] = [];
export const certificationsNote = todo("Add certifications or confirm there are none");
