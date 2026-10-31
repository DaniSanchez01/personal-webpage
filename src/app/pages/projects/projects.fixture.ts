import instagramPaper from '../../../assets/documents/instagramPaper.pdf';
import { Project, ProjectLinkType, ProjectStatus } from './projects.types';

// Placeholder until each project has its real URL
const PENDING_URL = '#';

export const PROJECTS: Project[] = [
  {
    slug: 'this-website',
    title: 'This website',
    description:
      'My personal site: design system, blog and projects, built from scratch.',
    year: 2026,
    status: ProjectStatus.InProgress,
    stack: ['React', 'Vite', 'Fraunces'],
    links: [
      { type: ProjectLinkType.Live, href: PENDING_URL },
      {
        type: ProjectLinkType.Code,
        href: 'https://github.com/DaniSanchez01/personal-webpage',
      },
    ],
    featured: true,
  },
  {
    slug: 'instagram-photographers-classifier',
    title: 'Instagram photographers classifier',
    description:
      'Thesis project: collecting and classifying professional photographers with machine learning.',
    year: 2023,
    status: ProjectStatus.Completed,
    stack: ['Python', 'ML', 'scikit-learn'],
    links: [
      { type: ProjectLinkType.Paper, href: instagramPaper },
      { type: ProjectLinkType.Code, href: PENDING_URL },
    ],
    featured: true,
  },
  {
    slug: 'padel-court-booking',
    title: 'Padel court booking',
    description:
      'A small app to organise matches and book courts with friends.',
    year: 2026,
    status: ProjectStatus.InProgress,
    stack: ['Angular', 'TypeScript', 'PostgreSQL'],
    links: [{ type: ProjectLinkType.Code, href: PENDING_URL }],
  },
  {
    slug: 'clean-django-starter',
    title: 'Clean Django starter',
    description:
      'A project template applying DDD and hexagonal architecture from day one.',
    year: 2024,
    status: ProjectStatus.Completed,
    stack: ['Python', 'Django', 'DDD'],
    links: [{ type: ProjectLinkType.Code, href: PENDING_URL }],
  },
  {
    slug: 'reading-list-tracker',
    title: 'Reading list tracker',
    description: 'Keep track of books, notes and what to read next.',
    year: 2025,
    status: ProjectStatus.Completed,
    stack: ['React', 'Supabase'],
    links: [
      { type: ProjectLinkType.Live, href: PENDING_URL },
      { type: ProjectLinkType.Code, href: PENDING_URL },
    ],
  },
  {
    slug: 'hexagonal-architecture-kata',
    title: 'Hexagonal architecture kata',
    description: 'Practice exercises to learn ports and adapters, with tests.',
    year: 2025,
    status: ProjectStatus.Completed,
    stack: ['Python', 'Testing'],
    links: [{ type: ProjectLinkType.Code, href: PENDING_URL }],
  },
  {
    slug: 'trip-map',
    title: 'Trip map',
    description: 'An interactive map of the places I have traveled to.',
    year: 2022,
    status: ProjectStatus.Completed,
    stack: ['JavaScript', 'Leaflet'],
    links: [
      { type: ProjectLinkType.Live, href: PENDING_URL },
      { type: ProjectLinkType.Code, href: PENDING_URL },
    ],
  },
];
