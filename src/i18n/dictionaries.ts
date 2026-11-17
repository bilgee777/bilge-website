import type { Locale } from "./config";

const tr = {
  meta: {
    title: "Bilge Korkmaz — Yazılım Mühendisi",
    description:
      "Bilge Korkmaz'ın portföyü: iOS ve mobil uygulama geliştirme, yapay zekâ entegrasyonu, Swift, SwiftUI, React Native ve .NET.",
  },
  a11y: {
    skip: "İçeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    mainNav: "Ana menü",
    toLight: "Açık temaya geç",
    toDark: "Koyu temaya geç",
    switchLang: "Switch to English",
    external: "(yeni sekmede açılır)",
  },
  nav: {
    about: "Hakkımda",
    skills: "Yetkinlikler",
    experience: "Deneyim",
    projects: "Projeler",
    education: "Eğitim",
    contact: "İletişim",
  },
  hero: {
    eyebrow: "Portföy",
    ctaProjects: "Projeleri incele",
    ctaContact: "İletişime geç",
    downloadCv: "CV indir",
  },
  sections: {
    about: { index: "01", title: "Hakkımda", focus: "Odak alanları" },
    skills: {
      index: "02",
      title: "Teknik Yetkinlikler",
      lead: "Günlük olarak kullandığım diller, framework'ler ve araçlar.",
    },
    experience: { index: "03", title: "İş Deneyimi" },
    projects: {
      index: "04",
      title: "Öne Çıkan Projeler",
      lead: "Mobil, yapay zekâ ve simülasyon alanlarında üzerinde çalıştığım projeler.",
    },
    education: {
      index: "05",
      title: "Eğitim & Sertifikalar",
      education: "Eğitim",
      certifications: "Sertifikalar",
    },
    contact: {
      index: "06",
      title: "İletişim",
      lead: "Yeni projeler, iş birlikleri veya sorular için bana e-posta ile ulaşabilirsiniz.",
      email: "E-posta",
      copy: "Kopyala",
      copied: "Kopyalandı",
    },
  },
  status: {
    "in-development": "Geliştirme aşamasında",
    completed: "Tamamlandı",
    published: "Yayında",
  },
  footer: { rights: "Tüm hakları saklıdır.", backToTop: "Başa dön" },
  notFound: { title: "Sayfa bulunamadı", back: "Ana sayfaya dön" },
};

export type Dictionary = typeof tr;

const en: Dictionary = {
  meta: {
    title: "Bilge Korkmaz — Software Engineer",
    description:
      "Portfolio of Bilge Korkmaz: iOS and mobile app development, AI integration, Swift, SwiftUI, React Native and .NET.",
  },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    switchLang: "Türkçe'ye geç",
    external: "(opens in a new tab)",
  },
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Portfolio",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    downloadCv: "Download CV",
  },
  sections: {
    about: { index: "01", title: "About Me", focus: "Focus areas" },
    skills: {
      index: "02",
      title: "Technical Skills",
      lead: "The languages, frameworks and tools I work with day to day.",
    },
    experience: { index: "03", title: "Work Experience" },
    projects: {
      index: "04",
      title: "Featured Projects",
      lead: "Projects I have worked on across mobile, AI and simulation.",
    },
    education: {
      index: "05",
      title: "Education & Certifications",
      education: "Education",
      certifications: "Certifications",
    },
    contact: {
      index: "06",
      title: "Contact",
      lead: "For new projects, collaborations or questions, feel free to reach out by email.",
      email: "Email",
      copy: "Copy",
      copied: "Copied",
    },
  },
  status: {
    "in-development": "In development",
    completed: "Completed",
    published: "Published",
  },
  footer: { rights: "All rights reserved.", backToTop: "Back to top" },
  notFound: { title: "Page not found", back: "Back to home" },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
