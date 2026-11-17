# Bilge Korkmaz — Portfolio

Personal software-engineer portfolio built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS 4**.
Bilingual (Türkçe / English), dark-mode first, statically generated and ready for Vercel.

```bash
npm install
npm run dev            # http://localhost:3000  (TODO markers visible)
npm run build && npm start
npm run content:todos  # list every missing piece of content
```

## Architecture

```
src/
├─ proxy.ts                  "/" → /tr or /en (cookie → Accept-Language → tr)
├─ app/
│  ├─ layout.tsx             pass-through root (imports globals.css)
│  ├─ [locale]/layout.tsx    <html lang>, fonts, metadata, OG/Twitter, hreflang, JSON-LD, theme script
│  ├─ [locale]/page.tsx      composes the seven sections
│  ├─ [locale]/opengraph-image.tsx   generated 1200×630 OG image per language
│  ├─ sitemap.ts · robots.ts · icon.svg · not-found.tsx
│  └─ globals.css            design tokens + Tailwind theme
├─ content/
│  ├─ profile.ts             ← ALL site content (single source of truth)
│  ├─ types.ts               content types
│  └─ todo.ts                todo() marker for missing content
├─ i18n/                     locales + UI dictionaries (tr, en)
├─ components/               Header, Hero, About, Skills, Experience, Projects, Education, Contact, Footer, …
└─ lib/                      site URL, CV lookup, fonts, button classes
```

- **Static by default.** `/tr` and `/en` are pre-rendered at build time; only the tiny proxy runs at the edge.
- **Content vs. UI.** Facts live in `src/content/profile.ts`; interface strings live in `src/i18n/dictionaries.ts`.
- **Missing content is explicit.** Unknown values use `todo("…")`. They render as dashed amber chips in
  development (or when `NEXT_PUBLIC_SHOW_TODOS=true`) and are omitted in production, so visitors never see placeholders.
- **No fabricated data.** No skill percentages, no invented metrics. FrameLab is fixed to `in-development`.

## Design system

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `bg` | `#080B1A` night blue | `#F7F6FC` | page |
| `surface` | `#121834` | `#FFFFFF` | cards |
| `fg` / `fg-muted` / `fg-subtle` | `#ECEAF7` / `#A3A6C4` / `#6F7398` | `#14142B` / `#4E5070` / `#7B7D9C` | text hierarchy |
| `primary` | `#8B6CF6` purple | `#6A45E8` | primary actions |
| `accent` | `#C4B5FD` lilac | `#6A45E8` | highlights, status, index numbers |

- **Type:** Geist (text), Geist Mono (labels/eyebrows), Instrument Serif italic used once — the surname in the hero.
- **Layout:** 72rem container, 8-pt spacing rhythm, `py-20 / sm:py-28` sections, numbered section eyebrows (01–06).
- **Motion:** one fade-and-rise on scroll (`Reveal`), runs once, disabled by `prefers-reduced-motion`. No parallax, no animated blobs.
- **Theme:** dark by default; toggle stores the choice in `localStorage`; an inline script prevents a flash on load.
- **Accessibility:** skip link, landmark/`aria-labelledby` sections, visible focus rings, keyboard-operable mobile menu
  (Escape closes), `aria-label`s on icon buttons, external-link hints for screen readers, AA-contrast colour pairs.

## Sections

1. Hero · 2. About · 3. Technical Skills · 4. Work Experience · 5. Featured Projects · 6. Education & Certifications · 7. Contact

## CV download

Put PDFs at `public/cv/bilge-korkmaz-cv-tr.pdf` and `public/cv/bilge-korkmaz-cv-en.pdf`.
The “Download CV” button appears automatically when a file exists (falls back to the other language).

## Deploy to Vercel

1. Push this folder to its own GitHub repository (or set **Root Directory** to `portfolio` if it stays in a monorepo).
2. Import it in Vercel — the framework is detected automatically, no extra config needed.
3. Set `NEXT_PUBLIC_SITE_URL` to the final domain (see `.env.example`) so canonical, OG and sitemap URLs are correct.

See **CONTENT_TODO.md** for everything that still needs real information.
