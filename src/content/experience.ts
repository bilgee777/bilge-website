/** Work experience — newest first. Only confirmed roles, dates and technologies. */
import { todo } from "./todo";
import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "yuksi",
    company: "YÜKSİ",
    positions: [
      {
        title: { tr: "Junior Mobile Developer", en: "Junior Mobile Developer" },
        employmentType: { tr: "Tam zamanlı", en: "Full-time" },
      },
    ],
    // Ended November 2026 — never show as "present".
    period: { start: "2026-09", end: "2026-11" },
    description: [
      {
        tr: "React Native ve Expo kullanılarak geliştirilen KargoIO lojistik platformunun mobil uygulama süreçlerinde çalıştım. Kurye görev yönetimi, vardiya işlemleri, barkod doğrulama, zimmet yönetimi, teslimat süreçleri, harita ve navigasyon deneyimleri üzerinde geliştirmeler gerçekleştirdim.",
        en: "Worked on the mobile app of KargoIO, a logistics platform built with React Native and Expo. Developed features for courier task management, shift operations, barcode verification, package custody management, delivery flows, and map and navigation experiences.",
      },
      {
        tr: "REST API entegrasyonları, kullanıcı arayüzleri, operasyonel iş akışları ve yapay zekâ destekli yol asistanı geliştirme çalışmalarında aktif rol aldım.",
        en: "Took an active role in REST API integrations, user interfaces, operational workflows and the development of an AI-powered road assistant.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "JavaScript / TypeScript",
      "REST API",
      "JWT",
      "Git",
      "Android Studio",
      "AI Integration",
    ],
  },
  {
    id: "iqb",
    company: "IQB Solutions",
    positions: [
      {
        title: { tr: "Yazılım Test Stajyeri", en: "Software Test Intern" },
        employmentType: { tr: "Staj", en: "Internship" },
      },
    ],
    period: { start: "2026-07", end: "2026-08" },
    description: [
      {
        tr: "Enerji dağıtım yazılımlarının fonksiyonel test süreçlerinde görev aldım. E-imza ve mobil imza işlemleri ile SAP, MBS, ABYS ve CBS gibi sistemler arasındaki entegrasyon süreçlerinin incelenmesi ve test edilmesi üzerinde çalıştım.",
        en: "Took part in functional testing of energy-distribution software. Analysed and tested e-signature and mobile signature processes, as well as integrations between systems such as SAP, MBS, ABYS and CBS.",
      },
    ],
    // No verified automation tools or test frameworks — focus areas only.
    focus: [
      { tr: "Fonksiyonel Test", en: "Functional Testing" },
      { tr: "Yazılım Kalite Güvencesi", en: "Software Quality Assurance" },
      { tr: "Kurumsal Sistem Entegrasyonları", en: "Enterprise System Integrations" },
      { tr: "Test Senaryoları", en: "Test Scenarios" },
    ],
    technologies: [],
  },
  {
    id: "solon",
    company: "Solon Yazılım",
    positions: [
      {
        title: { tr: "Yarı Zamanlı Yazılım Geliştirici", en: "Part-time Software Developer" },
        employmentType: { tr: "Yarı zamanlı", en: "Part-time" },
        period: todo("Date the part-time role started (optional)"),
      },
      {
        title: { tr: "Yazılım Geliştirici Stajyeri", en: "Software Developer Intern" },
        employmentType: { tr: "Staj", en: "Internship" },
        period: todo("Date the internship ended (optional)"),
      },
    ],
    period: { start: "2025-07", end: "2026-03" },
    description: [
      {
        tr: "Unity ve C# kullanarak 3D liman operasyon simülasyonu geliştirdim. Liman sahasının modellenmesi, kamera kontrol sistemleri, etkileşimli kullanıcı arayüzleri ve operasyon akışlarının görselleştirilmesi üzerinde çalıştım.",
        en: "Developed a 3D port operations simulation using Unity and C#. Worked on modelling the port site, camera control systems, interactive user interfaces and the visualisation of operational flows.",
      },
      {
        tr: "Araç giriş-çıkış süreçleri, terminal etkileşimleri, animasyon sistemleri ve simülasyon içi kullanıcı kontrollerini geliştirdim.",
        en: "Built vehicle entry and exit processes, terminal interactions, animation systems and in-simulation user controls.",
      },
    ],
    technologies: ["Unity", "C#", "ProBuilder", "Terrain", "Animator", "VideoPlayer", "Git", "GitHub"],
  },
];
