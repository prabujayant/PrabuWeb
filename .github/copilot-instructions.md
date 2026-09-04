# PrabuWeb Copilot Instructions

## Project

- This is a Next.js 16 portfolio using React 19, TypeScript, the App Router, and MDX.
- Keep the existing structure: application routes and layouts live in `src/app`, reusable UI lives in `src/components`, shared helpers live in `src/lib`, and page content lives in the root `content/` directory.
- Use the `@/*` path alias for imports from `src/*`.
- Preserve the existing visual language and responsive behavior when changing the UI. Prefer the established components and CSS variables over introducing a new styling system.

## Code

- Keep TypeScript strict and avoid `any` unless there is no practical typed alternative.
- Follow the existing React and Next.js conventions. Add `"use client"` only to components that require client-side state, effects, event handlers, or browser APIs.
- Use semantic HTML, accessible names, keyboard support, visible focus states, and appropriate image alt text.
- Use `lucide-react` for interface icons when an existing icon is suitable. Do not add hand-drawn inline SVG icons for ordinary controls.
- Keep changes focused. Do not rewrite unrelated files, generated output, `build/`, or `node_modules.cra-backup/`.
- Avoid adding comments unless they explain a non-obvious decision.

## Content

- Prefer editing the relevant MDX file in `content/` for copy, project details, resume text, and page content.
- Preserve MDX syntax and existing frontmatter or component usage when editing content.
- Keep user-facing copy concise, accurate, and consistent with the portfolio voice.

## Context and Cache Efficiency

- Maximize cache reads and writes when available: reuse already-loaded context, search results, and validation output instead of repeating equivalent work.
- Batch independent file reads and checks where practical, and make incremental edits that preserve useful intermediate results.
- Avoid rereading unchanged files or regenerating unchanged artifacts. Preserve `.next/` and other tool caches unless they are stale, corrupted, or explicitly part of the requested cleanup.
- When a cache must be invalidated, invalidate only the smallest affected scope and rerun the narrowest relevant check.

## Validation

- After code changes, run the narrowest relevant check first, then run the full checks when practical:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Use `npm run format` only when formatting changes are intended; do not reformat unrelated files.
- Do not commit changes unless explicitly requested.