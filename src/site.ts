/** Canonical site origin — relative asset/credential paths resolve against it. */
export const SITE_URL = 'https://antonigg.dev';

/**
 * Resolve a possibly site-relative path (e.g. `/university/titol.pdf`,
 * `/institutions/Logo_UPC.png`) to an absolute URL, so consumers outside
 * antonigg.dev (like Forest Walk) can link/display the same assets.
 */
export function absoluteUrl(path: string): string {
  if (/^[a-z]+:/i.test(path)) return path; // already absolute (https:, mailto:)
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
