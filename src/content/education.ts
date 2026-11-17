/** Education and training. Unverified training is hidden in production (verified: false). */
import { todo } from "./todo";
import type { Education, Training } from "./types";

export const education: Education[] = [
  {
    institution: { tr: "İstanbul Gelişim Üniversitesi", en: "Istanbul Gelisim University" },
    degree: { tr: "Lisans", en: "Bachelor's Degree (B.Sc.)" },
    field: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
    period: { start: "2022-09", end: "2026-06" }, // Displayed as years only (2022–2026).
    status: { tr: "Mezun · Diploma alındı", en: "Graduated" },
  },
];

export const training: Training[] = [
  {
    id: "ios",
    name: { tr: "iOS Geliştirme Eğitimi", en: "iOS Development Training" },
    kind: { tr: "Eğitim", en: "Training" },
    issuer: todo("Training provider"),
    topics: ["Swift", "UIKit", "SwiftUI", "MVVM", "VIPER", "Clean Swift"],
    year: todo("Year"),
    verified: true,
  },
  {
    id: "sql",
    name: { tr: "Temel SQL Eğitimi", en: "SQL Fundamentals Training" },
    kind: { tr: "Eğitim", en: "Training" },
    issuer: "Karadeniz Teknik Üniversitesi Kariyer Merkezi",
    year: todo("Year"),
    verifyUrl: todo("Certificate / verification link"),
    verified: false, // TODO: set true once details are confirmed.
  },
  {
    id: "techcamp2",
    name: { tr: "TechCamp2", en: "TechCamp2" },
    kind: { tr: "Katılım", en: "Participation" },
    issuer: todo("Organiser"),
    year: todo("Year"),
    verifyUrl: todo("Certificate / verification link"),
    verified: false, // TODO: set true once details are confirmed.
  },
];
