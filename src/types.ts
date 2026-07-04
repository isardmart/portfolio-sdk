/**
 * Shared types for Antoni's professional data. Field names intentionally match
 * `src/shared/content/portfolio.types.ts` in the antonigg.dev codebase so the
 * site can adopt the SDK as a near drop-in; `description` fields are added so
 * consumers never need a second source for the full copy.
 */

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  /** A line worth living by. */
  description: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  website: string;
}

export interface WorkExperience {
  /** Stable id used by i18n keys on the site. */
  id: string;
  company: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  technologies: string[];
  /** Full role description (English source copy). */
  description: string;
}

export type CertificateType = 'career' | 'bootcamp' | 'certificate' | 'language';

export interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  /** Credential link. Relative paths resolve against `SITE_URL`. */
  url: string;
  courseUrl?: string;
  /** Site-relative image paths (resolve with `absoluteUrl`). */
  institution_logo?: string;
  courseImage?: string;
  institutionUrl?: string;
  type?: CertificateType;
  hours?: number;
  /** Full description (English source copy). */
  description: string;
}

export type CollaborationType = 'entirely done by me' | 'in a team' | 'helped a little';

export interface ClientProject {
  id: string;
  name: string;
  url: string;
  technologies: string[];
  category: string;
  /** Site-relative image path (resolve with `absoluteUrl`). */
  image?: string;
  collaborationType: CollaborationType;
  year?: string;
  projectType?: 'side' | 'work';
  /** Full description (English source copy). */
  description: string;
}

export interface Skill {
  name: string;
  category: string;
  subcategory: string;
}

export interface ServiceLine {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  ideal: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
}

export interface WhyMePoint {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
}

/** Everything at once, shaped like the site's existing `PortfolioData`. */
export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  experience: WorkExperience[];
  certificates: Certificate[];
  projects: ClientProject[];
  skills: Skill[];
}
