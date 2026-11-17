/**
 * Technical skills by category. No percentages.
 * `evidence` marks where a skill was actually used (confirmed by the owner):
 *   professional — used in a job · projects — academic/personal projects · training — formal training
 * Leave it out when there is no confirmed context.
 */
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: { tr: "Mobil Geliştirme", en: "Mobile Development" },
    items: [
      { name: "React Native", evidence: ["professional"] },
      { name: "Expo", evidence: ["professional"] },
      { name: "Swift", evidence: ["projects", "training"] },
      { name: "SwiftUI", evidence: ["training"] },
      { name: "UIKit", evidence: ["training"] },
    ],
  },
  {
    id: "software",
    title: { tr: "Yazılım Mühendisliği", en: "Software Engineering" },
    items: [
      { name: "C#", evidence: ["professional", "projects"] },
      { name: ".NET" },
      { name: "ASP.NET MVC" },
      { name: "REST APIs", evidence: ["professional"] },
      { name: "SQL Server" },
    ],
  },
  {
    id: "architecture",
    title: { tr: "Mimari", en: "Architecture" },
    items: [
      { name: "OOP" },
      { name: "SOLID" },
      { name: "MVVM", evidence: ["training"] },
      { name: "VIPER", evidence: ["training"] },
      { name: "Clean Swift", evidence: ["training"] },
    ],
  },
  {
    id: "game",
    title: { tr: "Oyun & Simülasyon", en: "Game & Simulation" },
    items: [
      { name: "Unity", evidence: ["professional", "projects"] },
      { name: "C#", evidence: ["professional", "projects"] },
      { name: "3D Simulation", evidence: ["professional", "projects"] },
      { name: "Interactive Systems", evidence: ["professional", "projects"] },
    ],
  },
  {
    id: "ai",
    title: { tr: "Yapay Zekâ Geliştirme", en: "AI Development" },
    items: [
      { name: "OpenAI API Integration", evidence: ["professional"] },
      { name: "Conversational AI", evidence: ["professional"] },
      { name: "AI-assisted Development" },
      { name: "Claude Code" },
    ],
  },
  {
    id: "tools",
    title: { tr: "Araçlar", en: "Tools" },
    items: [
      { name: "Git", evidence: ["professional"] },
      { name: "GitHub", evidence: ["professional"] },
      { name: "Android Studio", evidence: ["professional"] },
      { name: "Visual Studio" },
      { name: "VS Code" },
      { name: "Figma" },
    ],
  },
];
