import { ImageResponse } from "next/og";
import { hero, person } from "@/content/person";
import { isLocale, locales } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bilge Korkmaz — Software Engineer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";

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
          background: "radial-gradient(900px 520px at 85% -10%, rgba(108,99,255,0.35), transparent 60%), #080D1B",
          color: "#E8EAF4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#A4A9C3" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#A78BFA" }} />
          {person.title[locale]} · {person.location[locale]}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 116, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {person.firstName}&nbsp;<span style={{ color: "#A78BFA" }}>{person.lastName}</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#E8EAF4" }}>{hero.tagline[locale]}</div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#A78BFA" }}>
          {hero.focusAreas.map((a) => (
            <div key={a.en} style={{ border: "1px solid rgba(167,139,250,0.35)", borderRadius: 999, padding: "8px 22px" }}>
              {a[locale]}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
