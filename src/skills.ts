import type { Skill } from './types.js';

/** The full skill matrix, grouped by category → subcategory. */
export const SKILLS: Skill[] = [
  // Software Development — Languages
  { name: 'TypeScript', category: 'software-development', subcategory: 'languages' },
  { name: 'JavaScript', category: 'software-development', subcategory: 'languages' },
  { name: 'Python', category: 'software-development', subcategory: 'languages' },
  { name: 'HTML/CSS', category: 'software-development', subcategory: 'languages' },

  // Software Development — Frameworks & Libraries
  { name: 'React', category: 'software-development', subcategory: 'frameworks' },
  { name: 'Next.js', category: 'software-development', subcategory: 'frameworks' },
  { name: 'Node.js', category: 'software-development', subcategory: 'frameworks' },
  { name: 'NestJS', category: 'software-development', subcategory: 'frameworks' },
  { name: 'Express', category: 'software-development', subcategory: 'frameworks' },
  { name: 'Astro', category: 'software-development', subcategory: 'frameworks' },
  { name: 'GraphQL', category: 'software-development', subcategory: 'frameworks' },

  // Software Development — SaaS & Tools
  { name: 'Docker', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'Git', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'AWS', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'PostgreSQL', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'Supabase', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'Memgraph', category: 'software-development', subcategory: 'saas-tools' },
  { name: 'MongoDB', category: 'software-development', subcategory: 'saas-tools' },

  // Product Development — Stakeholder Management
  { name: 'Stakeholder Communication', category: 'product-development', subcategory: 'stakeholder-management' },
  { name: 'Team Leadership', category: 'product-development', subcategory: 'stakeholder-management' },
  { name: 'Negotiation', category: 'product-development', subcategory: 'stakeholder-management' },
  { name: 'Cross-functional Collaboration', category: 'product-development', subcategory: 'stakeholder-management' },
  { name: 'Psychology & Empathy', category: 'product-development', subcategory: 'stakeholder-management' },

  // Product Development — Product Definition
  { name: 'Figma', category: 'product-development', subcategory: 'product-definition' },
  { name: 'Excalidraw', category: 'product-development', subcategory: 'product-definition' },
  { name: 'Microsoft Office', category: 'product-development', subcategory: 'product-definition' },
  { name: 'Google Drive/Workspace', category: 'product-development', subcategory: 'product-definition' },
  { name: 'Product Strategy', category: 'product-development', subcategory: 'product-definition' },

  // Product Development — Implementation
  { name: 'Innovation & Ideation', category: 'product-development', subcategory: 'implementation' },
  { name: 'Product Maintenance', category: 'product-development', subcategory: 'implementation' },
  { name: 'System Integration', category: 'product-development', subcategory: 'implementation' },

  // Financial & Investment Management
  { name: 'Portfolio Management', category: 'financial-management', subcategory: 'investment' },
  { name: 'Stock Picking & Strategy', category: 'financial-management', subcategory: 'investment' },
  { name: 'Financial Analysis', category: 'financial-management', subcategory: 'investment' },
  { name: 'Behavioral Finance Psychology', category: 'financial-management', subcategory: 'investment' },
  { name: 'Risk Management', category: 'financial-management', subcategory: 'investment' },

  // Education & Volunteering
  { name: 'Mountain Guide & Monitor', category: 'education-volunteering', subcategory: 'volunteering' },
  { name: 'Private Tutoring', category: 'education-volunteering', subcategory: 'mentoring' },
  { name: 'Technical Mentorship', category: 'education-volunteering', subcategory: 'mentoring' },
  { name: 'Team Teaching', category: 'education-volunteering', subcategory: 'mentoring' },
];

/** Skills grouped by category, then subcategory — handy for rendering. */
export function skillsByCategory(): Record<string, Record<string, string[]>> {
  const grouped: Record<string, Record<string, string[]>> = {};
  for (const skill of SKILLS) {
    grouped[skill.category] ??= {};
    grouped[skill.category][skill.subcategory] ??= [];
    grouped[skill.category][skill.subcategory].push(skill.name);
  }
  return grouped;
}
