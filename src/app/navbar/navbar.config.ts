import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface InternalLink {
  to: string;
  label: string;
  id: string;
}

export interface ExternalLink {
  href: string;
  icon: IconDefinition;
  label: string;
  id: string;
}

export const INTERNAL_LINKS: InternalLink[] = [
  { id: 'home', to: '/', label: 'Home' },
  { id: 'about', to: '/about', label: 'About Me' },
  { id: 'projects', to: '/projects', label: 'Projects' },
  { id: 'blog', to: '/blog', label: 'Blog' },
  { id: 'contact', to: '/contact', label: 'Contact' },
];

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/daniel-sánchez-rodríguez-629626255/',
    icon: faLinkedin,
    label: 'LinkedIn Profile',
  },
  {
    id: 'github',
    href: 'https://github.com/DaniSanchez01',
    icon: faGithub,
    label: 'GitHub Profile',
  },
];
