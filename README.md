# @antonigg/portfolio-sdk

**One source of truth for Antoni Galí's professional data** — experience,
studies, projects, skills, services, hobbies **and their translations** —
consumed by both:

- [antonigg.dev](https://antonigg.dev) — the classic portfolio (Next.js)
- [Creative Portfolio](https://antonigg.xyz) — formerly Forest Walk (Three.js)

Edit the data here, release, bump the pinned tag in each consumer.
Pure typed data, zero runtime dependencies, framework-agnostic.

## Install (from GitHub — no npm publish needed)

Always pin a release tag — never install from a moving branch:

```bash
npm install github:isardmart/portfolio-sdk#v0.2.1
```

The `prepare` script compiles TypeScript on install, so this works locally
and on Vercel. Lockfiles resolve git deps to a fixed commit, so an unpinned
install only updates when the lockfile is regenerated — pinning tags makes
upgrades explicit and deploys deterministic.

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
  TRANSLATIONS,              // per-locale data translations, keyed by entry id
  dataTranslations,          // TRANSLATIONS[locale] with English fallback
  absoluteUrl,               // resolve site-relative asset paths
} from '@antonigg/portfolio-sdk';

// e.g. certificate PDFs / images live on antonigg.dev:
absoluteUrl(CERTIFICATES[0].url); // → https://antonigg.dev/university/titol.pdf

// e.g. the Spanish copy for a project card:
dataTranslations('es').projects.filmix.description;
```

## Edit

All content lives in `src/*.ts` — one file per topic, typed by `src/types.ts`.

```
src/personal.ts               identity + social links
src/experience.ts             work history (newest first)
src/certificates.ts           studies & credentials
src/projects.ts               client work & side projects
src/skills.ts                 skill matrix
src/services.ts               freelance offering, process, FAQ
src/hobbies.ts                life beyond the keyboard
src/translations/*.ts         authored ca/de/es/fr/it/pt copy, keyed by entry id
```

English is the source copy on the entries themselves — `translations/index.ts`
derives the `en` locale from them (never authored twice) and falls back to
English per entry for any missing translation. When you change an entry's
description, update its six translations to match.

Build locally with `npm run build` (runs `tsc` → `dist/`).

## Release

1. Edit data/translations and bump `version` in `package.json`
   (patch for copy tweaks, minor for new entries or exports).
2. Commit and push to `main`.
3. CI (`.github/workflows/release-tag.yml`) builds the SDK and auto-creates
   the `v<version>` tag — never tag by hand.
4. Bump the pinned `#v<version>` ref in each consumer and reinstall so its
   lockfile re-resolves, then commit and push the consumer.

Order matters: the SDK push (which creates the tag) must land **before** any
consumer pinned to that tag deploys.

## Notes

- Field names match `portfolio.types.ts` in antonigg.dev, plus `description`
  fields, so adoption there is near drop-in.
- Image/PDF paths starting with `/` are antonigg.dev-relative — use
  `absoluteUrl()` outside that site.
- antonigg.dev serves its `data.*` i18n namespace straight from
  `dataTranslations()` — `public/locales/data/` no longer exists there.
