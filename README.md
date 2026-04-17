# Prabu Jayant – Portfolio

A minimal, uniform personal site for a Software Developer and Cybersecurity Engineer. Built with React and tuned for clarity, speed, and consistency. The UI supports light/dark themes, a resume viewer, and clean project/research sections.

## Features
- Minimal UI with consistent cards and spacing
- Light/Dark theme toggle (persisted; respects system preference)
- Sections: Home, About, Projects, Research, Resume
- In‑page PDF resume viewer with download CTA
- SEO meta updated (Open Graph/Twitter tags)
- Route‑level code‑splitting for faster initial load

## Tech Stack
- React 17 + React Router 6
- react-pdf for resume viewing
- Typewriter effect on the hero role chips
- Vanilla CSS with theme variables

## Quick Start
```bash
# Install
npm install

# Dev (CRA dev server)
npm run dev

# Production build
npm run build

# Serve the built app locally
npm start   # serves /build with `serve -s build`
```

## Project Structure (key files)
```
src/
  App.js                     # Routing, theme provider, lazy routes
  style.css                  # Global styles + light/dark theme vars
  components/
    Navbar.js                # Sticky nav + theme toggle
    Footer.js                # Simple footer + social links
    Home/*                   # Hero, highlights, experience, socials
    About/About.js           # Education, experience, projects, research, skills
    Projects/Projects.js     # Projects + research cards
    Resume/ResumeNew.js      # PDF viewer + download/email/LinkedIn CTAs
  context/ThemeContext.js    # Theme context
  Assets/PrabuJayant_Resume.pdf
```

## Theming
- Theme is stored in `localStorage` and applied on `<html data-theme>`.
- Variables live in `src/style.css` under `:root` (light) and `html[data-theme="dark"]`.
- The toggle button sits in the navbar (`components/ThemeToggle.js`).

## Customization
- Resume PDF: replace `src/Assets/PrabuJayant_Resume.pdf` and the viewer updates.
- Socials: edit `SOCIAL_LINKS` in `components/Footer.js` and `components/Home/Home2.js`.
- Copy: update sections in `components/Home/*`, `components/About/About.js`, and `components/Projects/Projects.js`.

## Deployment
Any static host works. After `npm run build`, deploy the `build/` folder.
- Local preview: `npm start` (uses `serve -s build`).
- GitHub Pages/Netlify/Vercel: configure to serve the `build` output.

## Notes
- This project was refactored for a minimal, content‑first design with semantic HTML and accessible focus states. If you add new sections, follow the existing card and grid patterns to keep visual rhythm consistent.

