import type { PersonalInfo, SocialLinks } from './types.js';

export const PERSONAL: PersonalInfo = {
  name: 'Antoni Galí Gimeno',
  role: 'Full Stack Engineer',
  location: 'Barcelona',
  email: 'antonigaligimeno@gmail.com',
  description:
    '"All we have to decide is what to do with the time that is given to us." - Gandalf.',
};

export const SOCIAL: SocialLinks = {
  // TODO: set the real LinkedIn profile URL (kept in env on antonigg.dev).
  linkedin: '',
  github: 'https://github.com/isardmart',
  website: 'https://antonigg.dev',
};
