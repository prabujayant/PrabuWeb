# Prabu Jayant — Portfolio

Personal site for Prabu Jayant: software engineer and ML researcher building AI-assisted products at Baker Hughes.

## Stack

- Next.js 16 (App Router, MDX) · React 19 · TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `@next/mdx` — long-form content lives in `content/*.mdx`
- `next-themes` for light/dark theming
- Deployed on Vercel: https://prabujayant.vercel.app

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

- Structured data (experience, education, projects, publications, skills, metrics): `src/content/profile.ts`
- Long-form page copy: `content/*.mdx`
- Downloadable/embedded resume: replace `public/resume.pdf`

## Notes

- Dev and build run on Turbopack (Next 16 default). If you switch bundlers or ever hit stale build state, delete `.next/` and rebuild.


