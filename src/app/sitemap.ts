import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { pages } from "@/i18n/routes";
import { siteUrl } from "@/lib/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only published case studies — drafts never enter the sitemap.
  const paths = [
    ...Object.values(pages),
    ...projects.filter((p) => p.visibility === "public").map((p) => `/projects/${p.slug}`),
  ];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.7 : 0.8,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])) },
    })),
  );
}
