/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAL CONTENT — personal details, hero, about, contact
 * ─────────────────────────────────────────────────────────────────────────────
 *  Rules for every file in src/content:
 *   • Only confirmed facts. Unknown values use todo("…") and are hidden in production.
 *   • No invented metrics, dates, links or achievements.
 *   • Never publish the phone number.
 *  `npm run content:todos` lists every open item.
 */
import { todo, type Maybe } from "./todo";
import type { Localized } from "./types";

export const person = {
  name: "Bilge Korkmaz",
  firstName: "Bilge",
  lastName: "Korkmaz",
  title: { tr: "Yazılım Mühendisi", en: "Software Engineer" } satisfies Localized,
  location: { tr: "İstanbul, Türkiye", en: "Istanbul, Türkiye" } satisfies Localized,
  email: "korkmazbilge777@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilge-korkmaz-b79534300/",
  // No verified GitHub profile yet — do not add a guessed URL.
  github: todo("Verified GitHub profile URL") as Maybe<string>,
  /**
   * CV files are not ready yet. Put PDFs at these paths in /public when they are.
   * The download buttons only render when the file exists at build time.
   */
  cv: {
    tr: "/cv/bilge-korkmaz-cv-tr.pdf",
    en: "/cv/bilge-korkmaz-cv-en.pdf",
  } satisfies Localized,
};

export const hero = {
  tagline: {
    tr: "Fikirleri Dijital Deneyimlere Dönüştürüyorum.",
    en: "Engineering Ideas Into Digital Experiences.",
  } satisfies Localized,
  description: {
    tr: "Mobil uygulamalar, yapay zekâ destekli çözümler ve kullanıcı odaklı dijital deneyimler geliştiren bir bilgisayar mühendisiyim. Yazılım geliştirmeyi ürün bakış açısı ve kullanıcı deneyimiyle birleştiriyorum.",
    en: "Software Engineer focused on building mobile applications, AI-powered solutions, and thoughtful digital experiences. I combine technical engineering with a strong product and user experience mindset.",
  } satisfies Localized,
  focusAreas: [
    { tr: "Yazılım Mühendisliği", en: "Software Engineering" },
    { tr: "Mobil Geliştirme", en: "Mobile Development" },
    { tr: "Yapay Zekâ Destekli Ürünler", en: "AI-Powered Products" },
  ] satisfies Localized[],
};

// DRAFT — composed only from the confirmed facts in this folder. Review wording before launch.
export const about = {
  paragraphs: [
    {
      tr: "İstanbul Gelişim Üniversitesi Bilgisayar Mühendisliği bölümünden 2026 yılında mezun olan bir yazılım mühendisiyim. Mobil uygulamalar, yapay zekâ destekli özellikler ve etkileşimli simülasyonlar üzerinde çalışıyorum.",
      en: "I'm a software engineer and a 2026 Computer Engineering graduate of Istanbul Gelisim University. My work spans mobile applications, AI-powered features and interactive simulations.",
    },
    {
      tr: "En son YÜKSİ'de Junior Mobile Developer olarak KargoIO lojistik platformunun React Native ve Expo ile geliştirilen mobil uygulamasında ve OpenAI API'si üzerine kurulu yapay zekâ destekli yol asistanında çalıştım. Öncesinde IQB Solutions'ta kurumsal enerji dağıtım yazılımlarının fonksiyonel testlerinde görev aldım; Solon Yazılım'da ise Unity ve C# ile 3D liman operasyon simülasyonu geliştirdim.",
      en: "Most recently I worked as a Junior Mobile Developer at YÜKSİ, contributing to the React Native and Expo app of the KargoIO logistics platform and to an AI-powered road assistant built on the OpenAI API. Before that, I took part in functional testing of enterprise energy-distribution software at IQB Solutions, and built a 3D port operations simulation with Unity and C# at Solon Yazılım.",
    },
    {
      tr: "Yazılım geliştirmeyi ürün bakış açısı ve kullanıcı deneyimiyle birleştirmeyi önemsiyorum. Şu anda kişisel projem FrameLab üzerinden Swift ve SwiftUI ile native iOS geliştirme becerilerimi derinleştiriyorum.",
      en: "I care about combining engineering with a product and user-experience mindset. I'm currently deepening my native iOS skills with Swift and SwiftUI through FrameLab, a personal project.",
    },
  ] satisfies Localized[],
};

export const contact = {
  heading: {
    tr: "Birlikte değerli bir şey geliştirelim.",
    en: "Let's build something meaningful.",
  } satisfies Localized,
};
