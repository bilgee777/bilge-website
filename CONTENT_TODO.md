# Pre-launch checklist

Run `npm run content:todos` for exact file/line locations. Replace a `todo("…")` only with confirmed information.

## Links & documents
- [ ] **GitHub** — add the verified profile URL in `src/content/person.ts` (button appears automatically)
- [ ] **CV (TR / EN)** — add `public/cv/bilge-korkmaz-cv-tr.pdf` and `public/cv/bilge-korkmaz-cv-en.pdf`
- [ ] **Domain** — set `NEXT_PUBLIC_SITE_URL` on Vercel once a custom domain is used

## Confidentiality / permissions
- [ ] **KargoIO** — confirm with YÜKSİ that the general description and contribution list may be public
      (if not: set `visibility: "draft"` in `projects.ts`)
- [ ] **AI Road Assistant** — same confirmation as KargoIO
- [ ] **Port Operations Simulation** — screenshots only if Solon Yazılım approves

## Case-study content (not provided yet — hidden in production)
- [ ] Engineering decisions for every project
- [ ] Key learnings for every project
- [ ] Review DRAFT problem / solution texts (KargoIO, AI Road Assistant, Port Operations Simulation, Truck Parking Simulator)
- [ ] AI Road Assistant — development status
- [ ] Truck Parking Simulator — problem/goal, screenshots, optional video/repo link
- [ ] FrameLab — what is already implemented, which technologies are already used (move from "planned"), screenshots when ready

## Experience
- [ ] Solon Yazılım — optional: date the internship ended / part-time role started

## Training & certifications
- [ ] iOS Development Training — provider and year
- [ ] Temel SQL Eğitimi (KTÜ Kariyer Merkezi) — year + verification link, then set `verified: true`
- [ ] TechCamp2 — organiser, year, link, then set `verified: true`

## Copy review
- [ ] About page paragraphs (`person.ts`) — drafted from confirmed facts, review wording

## Done
- [x] Email `korkmazbilge777@gmail.com`, LinkedIn, location
- [x] Education: B.Sc. Computer Engineering, 2022–2026, graduated (no student wording anywhere)
- [x] Experience newest first; YÜKSİ ends Nov 2026 (not "present"); İhlas Holding removed
- [x] FrameLab shown as in development; planned features/technologies labelled as planned
- [x] Phone number not published
