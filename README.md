# Prabu Jayant — Portfolio

Personal site for Prabu Jayant: software engineer and ML researcher building AI-assisted products at Baker Hughes.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first config — no `tailwind.config.js`; theme tokens live in `src/app/globals.css`)
- shadcn/ui (`new-york`, CSS variables) — components are copied into `src/components/ui`, not installed as a dependency
- `@next/mdx` + `remark-gfm` — long-form content lives in `content/*.mdx`
- `next-themes` for light/dark theming · `lucide-react` for icons
- Biome replaces ESLint **and** Prettier (see Validation below)
- SEO via the Metadata API: `sitemap.ts`, `robots.ts`, OpenGraph/Twitter cards, JSON-LD `Person` schema
- Deployed on Vercel: https://prabujayant.vercel.app

## Tooling

Biome is the only linter/formatter (`biome.json`) — there is no ESLint or Prettier config in this repo. `npm run lint` and `npm run format` both invoke it.

## Getting started

```bash
npm install
npm run dev        # dev server (Turbopack) → http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Validation

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # biome check .
npm run format     # biome format --write .
```

## Project structure

```
src/app/           # routes & layouts (App Router)
src/components/    # reusable UI (site/, ui/)
src/content/       # structured data (profile.ts)
src/lib/           # shared helpers
content/*.mdx      # page narratives (home, about, projects, resume)
public/            # static assets (resume.pdf, og.png, icons)
```

## Editing content

Content lives in two places — pick based on the shape of the data:

- **Structured/typed data** (experience, education, projects, publications, skills, metrics, nav, social links): `src/content/profile.ts` — exported as typed objects (`ProjectItem`, `ExperienceItem`, …) that pages map over to render cards and lists.
- **Long-form page copy** (home, about, projects narrative, resume): `content/*.mdx` — prose rendered through the styled components in `mdx-components.tsx`.

Downloadable/embedded resume: replace `public/resume.pdf`.

## Notes

- Dev and build run on Turbopack (Next 16 default). If you switch bundlers or ever hit stale build state, delete `.next/` and rebuild.


