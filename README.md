# Bilge Korkmaz — Software Engineer Portfolio

Bilingual (Türkçe / English) engineering portfolio built with **Next.js 16 (App Router)**, **TypeScript (strict)**
and **Tailwind CSS 4**. Dark-first "Midnight Lavender" design, statically generated, deployed on Vercel.

```bash
npm install
npm run dev            # http://localhost:3000 — missing content shows as amber TODO chips
npm run build && npm start
npm run typecheck
npm run content:todos  # list every missing / unconfirmed piece of content
```

## Pages

| Route | Content |
|---|---|
| `/{tr,en}` | Hero, featured projects, experience summary, contact |
| `/{locale}/about` | About, focus areas, quick facts |
| `/{locale}/experience` | Full work history (newest first) |
| `/{locale}/projects` | All case studies |
| `/{locale}/projects/[slug]` | Case study: overview, problem, solution, contributions, technologies, decisions, status, screenshots, learnings |
| `/{locale}/skills` | Skills by category, with where each was used (no percentages) |
| `/{locale}/education` | Degree, training & certifications |
| `/{locale}/contact` | Email, LinkedIn (GitHub / CV appear automatically once available) |

`/` redirects to `/tr` or `/en` (cookie → `Accept-Language`). The language switcher keeps the current page.

## Architecture

```
src/
├─ proxy.ts                     locale redirect for "/"
├─ app/[locale]/…               pages (all statically generated) + opengraph-image.tsx
├─ app/sitemap.ts · robots.ts   only published case studies are listed
├─ content/                     ← ALL SITE CONTENT (edit here, not in components)
│  ├─ person.ts                 name, title, hero, about, contact, links, CV paths
│  ├─ experience.ts             jobs, newest first
│  ├─ projects.ts               case studies (confidentiality + visibility flags)
│  ├─ skills.ts                 skill groups + evidence (professional / projects / training)
│  ├─ education.ts              degree + training (verified flag)
│  ├─ types.ts · todo.ts        content types, todo() marker
├─ i18n/                        locales, routes, UI dictionaries (tr, en)
├─ components/                  Header, Hero, ProjectCard, ProjectCover, ExperienceTimeline, SkillsGrid, …
└─ lib/                         metadata, formatting, visibility, CV lookup, fonts
```

### Content rules built into the code
- `todo("…")` marks missing content: visible in development / previews, **omitted in production**.
- `project.confidential` → no screenshots or links, a confidentiality note on the case study.
- `project.visibility: "draft"` → the case study disappears from production and the sitemap.
- `training.verified: false` → hidden in production.
- CV buttons render only if the PDF exists in `public/cv/` at build time — no broken links.
- Planned technologies/features are listed separately from implemented ones (FrameLab).

### Adding real screenshots later
Put images in `public/projects/<slug>/` and fill `caseStudy.screenshots` in `projects.ts`
(`src`, `alt` in both languages, `width`, `height`). They render with `next/image`.
The abstract cover art stays as the card image.

## Design system — Midnight Lavender

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `bg` | `#080D1B` | `#F6F6FB` | page background |
| `surface` | `#121A30` | `#FFFFFF` | cards |
| `primary` | `#A78BFA` | `#5B4FE0` | buttons, markers, accent text |
| `accent` | `#6C63FF` | `#6C63FF` | glow, dots, decorative only (fails AA as small text on dark) |
| `fg` / `fg-muted` / `fg-subtle` | `#E8EAF4` / `#A4A9C3` / `#838AA8` | `#121629` / `#4A4F6A` / `#636884` | text hierarchy (all ≥ 4.5:1) |

Type: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (labels).
Motion: a single fade-in on scroll, disabled with `prefers-reduced-motion`.

## Deploy
Vercel imports the repo with no extra config. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`)
to the final domain so canonical URLs, Open Graph and the sitemap use it.

See **CONTENT_TODO.md** for the pre-launch checklist.
