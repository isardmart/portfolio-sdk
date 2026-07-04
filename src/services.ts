import type {
  ServiceLine,
  ProcessStep,
  EngagementModel,
  WhyMePoint,
  FaqItem,
} from './types.js';

/** The freelance offering, verbatim from the services page (English). */

export const SERVICES_INTRO = {
  title: 'Full-stack development: websites, platforms and apps',
  subtitle:
    'I design, build and ship digital products: marketing sites, SaaS platforms and mobile apps. You work directly with a senior full-stack engineer, without agency overhead.',
  techLine: 'Next.js · React · TypeScript · Node.js · PostgreSQL · Supabase · React Native',
  availability: 'Available for freelance projects',
};

export const SERVICES: ServiceLine[] = [
  {
    id: 'websites',
    title: 'Websites & e-commerce',
    description:
      'Marketing sites, portfolios and online stores with performance and SEO built in.',
    deliverables: [
      'Next.js + Tailwind implementation',
      'Technical SEO, structured data & analytics',
      'Multi-language support (i18n)',
      'Excellent Core Web Vitals scores',
    ],
    ideal:
      'Ideal for: businesses and professionals who need a fast, findable web presence.',
  },
  {
    id: 'platforms',
    title: 'Platforms & SaaS',
    description:
      'Full-stack web applications: dashboards, internal tools and customer-facing products with authentication, databases and integrations.',
    deliverables: [
      'Product-oriented architecture',
      'APIs, PostgreSQL/Supabase, auth & payments',
      'Integrations (Holded, Factorial, Cal.com, Slack…)',
      'CI/CD and Vercel/AWS deployment',
    ],
    ideal: 'Ideal for: startups and SMEs that need a reliable product partner.',
  },
  {
    id: 'apps',
    title: 'Mobile & web apps',
    description:
      'Cross-platform apps with React Native and modern web apps, from first prototype to production release.',
    deliverables: [
      'React Native / PWA development',
      'SDK & API integrations',
      'Offline-ready, responsive UX',
      'Store-ready builds and release support',
    ],
    ideal: "Ideal for: products that need to live in your users' pocket.",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Intro call',
    description:
      'We start with a short video call: you explain what you need, I ask the right questions. Within 48 hours you get a clear proposal with scope, timeline and price.',
    timeframe: 'Today',
  },
  {
    id: 'design',
    title: 'Kickoff & plan',
    description:
      'A kickoff meeting to review wireframes and the technical plan together. You give feedback on something concrete before anything is built.',
    timeframe: 'Week 1',
  },
  {
    id: 'build',
    title: 'Build in the open',
    description:
      'Short sprints, a weekly check-in call and a live staging link from day one. You see progress and can change direction at any moment.',
    timeframe: 'Weekly',
  },
  {
    id: 'launch',
    title: 'Launch together',
    description:
      'We deploy together on a call, with analytics and SEO checks and a handover you actually understand. I stay reachable afterwards.',
    timeframe: 'Ship day',
  },
];

export const ENGAGEMENT: EngagementModel[] = [
  {
    id: 'project',
    title: 'Fixed-scope project',
    description:
      'A defined deliverable with a clear price and deadline. Best for websites and MVPs.',
  },
  {
    id: 'retainer',
    title: 'Monthly retainer',
    description:
      'Reserved hours each month for continuous product work, maintenance and improvements.',
  },
  {
    id: 'hourly',
    title: 'Hourly consulting',
    description:
      'Audits, performance/SEO reviews, architecture advice or pairing with your team.',
  },
];

export const WHY_ME: WhyMePoint[] = [
  {
    id: 'product',
    title: 'Product-minded engineer',
    description:
      'Industrial engineer turned developer: I optimize for business outcomes, not just code.',
  },
  {
    id: 'performance',
    title: 'Performance & SEO by default',
    description:
      'Every project ships with Core Web Vitals, structured data and analytics.',
  },
  {
    id: 'languages',
    title: 'Clear communication',
    description:
      'Fluent in English, Spanish and Catalan; weekly demos and honest estimates.',
  },
  {
    id: 'ownership',
    title: 'End-to-end ownership',
    description:
      'One person accountable from first sketch to production monitoring. No hand-offs, no agency markup.',
  },
];

export const FAQ: FaqItem[] = [
  {
    id: 'stack',
    question: 'What technologies do you work with?',
    answer:
      'TypeScript end to end: Next.js and React on the front, Node.js APIs on the back, PostgreSQL/Supabase for data, React Native for mobile, deployed on Vercel or AWS.',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'A marketing website typically ships in 2 to 4 weeks; an MVP platform in 6 to 10 weeks. You get a concrete timeline with the proposal.',
  },
  {
    id: 'price',
    question: 'How do you price projects?',
    answer:
      'Fixed price for defined scopes, monthly retainer for ongoing work. Every proposal itemizes what is included, with no surprises.',
  },
  {
    id: 'maintenance',
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Every project includes a warranty period, and you can keep a retainer for maintenance, monitoring and new features.',
  },
];
