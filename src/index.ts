/**
 * @antonigg/portfolio-sdk — the single source of truth for Antoni Galí's
 * professional data. Consumed by antonigg.dev (the classic portfolio) and
 * Forest Walk (the creative portfolio): edit here, both update.
 */

export * from './types.js';
export { SITE_URL, absoluteUrl } from './site.js';
export { PERSONAL, SOCIAL } from './personal.js';
export { EXPERIENCE } from './experience.js';
export { CERTIFICATES } from './certificates.js';
export { PROJECTS } from './projects.js';
export { SKILLS, skillsByCategory } from './skills.js';
export {
  SERVICES_INTRO,
  SERVICES,
  PROCESS,
  ENGAGEMENT,
  WHY_ME,
  FAQ,
} from './services.js';
export { HOBBIES } from './hobbies.js';

import type { PortfolioData } from './types.js';
import { PERSONAL, SOCIAL } from './personal.js';
import { EXPERIENCE } from './experience.js';
import { CERTIFICATES } from './certificates.js';
import { PROJECTS } from './projects.js';
import { SKILLS } from './skills.js';

/** Everything bundled in the shape antonigg.dev's data hook already returns. */
export const PORTFOLIO: PortfolioData = {
  personal: PERSONAL,
  social: SOCIAL,
  experience: EXPERIENCE,
  certificates: CERTIFICATES,
  projects: PROJECTS,
  skills: SKILLS,
};
