import { ImageResponse } from "next/og";
import { person } from "@/content/profile";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bilge Korkmaz — Software Engineer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "tr";
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(900px 500px at 10% -10%, rgba(124,92,255,0.35), transparent 60%), #080b1a",
          color: "#eceaf7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a3a6c4" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#c4b5fd" }} />
          {person.title[locale]}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{person.name}</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#a3a6c4", maxWidth: 950 }}>
            {dict.meta.description}
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#c4b5fd" }}>
          {["Swift", "SwiftUI", "React Native", ".NET", "AI"].map((t) => (
            <div key={t} style={{ border: "1px solid rgba(196,181,253,0.3)", borderRadius: 999, padding: "8px 20px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
