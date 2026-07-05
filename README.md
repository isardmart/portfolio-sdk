# @antonigg/portfolio-sdk

**One source of truth for Antoni Galí's professional data** — experience,
studies, projects, skills, services and hobbies — consumed by both:

- [antonigg.dev](https://antonigg.dev) — the classic portfolio (Next.js)
- [Forest Walk](https://antonigg.xyz) — the creative portfolio (Three.js)

Edit the data here, push, and both sites pick it up on their next deploy.
Pure typed data, zero runtime dependencies, framework-agnostic.

## Install (from GitHub — no npm publish needed)

```bash
npm install github:isardmart/portfolio-sdk
```

The `prepare` script compiles TypeScript on install, so this works locally
and on Vercel. Pin a commit for reproducible builds:

```bash
npm install github:isardmart/portfolio-sdk#<commit-or-tag>
```

## Use

```ts
import {
  PERSONAL, SOCIAL,          // identity + links
  EXPERIENCE,                // 5 roles with full descriptions
  CERTIFICATES,              // 12 credentials with descriptions + hours
  PROJECTS,                  // client work & side projects
  SKILLS, skillsByCategory,  // the skill matrix
  SERVICES, PROCESS, ENGAGEMENT, WHY_ME, FAQ, SERVICES_INTRO,
  HOBBIES,
  PORTFOLIO,                 // everything bundled (same shape as the site's hook)
  absoluteUrl,               // resolve site-relative asset paths
} from '@antonigg/portfolio-sdk';

// e.g. certificate PDFs / images live on antonigg.dev:
absoluteUrl(CERTIFICATES[0].url); // → https://antonigg.dev/university/titol.pdf
```

## Edit

All content lives in `src/*.ts` — one file per topic, typed by `src/types.ts`.
Change the data, commit, push; consumers update when they reinstall/redeploy.

```
src/personal.ts      identity + social links
src/experience.ts    work history (newest first)
src/certificates.ts  studies & credentials
src/projects.ts      client work & side projects
src/skills.ts        skill matrix
src/services.ts      freelance offering, process, FAQ
src/hobbies.ts       life beyond the keyboard
```

Build locally with `npm run build` (runs `tsc` → `dist/`).

## Notes

- Field names match `portfolio.types.ts` in antonigg.dev, plus `description`
  fields, so adoption there is near drop-in.
- Image/PDF paths starting with `/` are antonigg.dev-relative — use
  `absoluteUrl()` outside that site.
- i18n: this SDK carries the **English** source copy. The site's translations
  (7 locales) stay in the site; they key off the same stable `id`s.
