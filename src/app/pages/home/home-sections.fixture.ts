import { PillProps } from '../../components/pill/pill.component';

export const BLOG_PILL: PillProps = {
  title: 'Blog',
  description:
    'Explore my articles on software development, tech trends, and coding insights.',
  path: '/blog',
};

export const PROJECTS_PILL: PillProps = {
  title: 'Projects',
  description: 'Discover some of my personal projects.',
  path: '/projects',
};

export const CONTACT_PILL: PillProps = {
  title: 'Contact',
  description:
    'Get in touch for collaborations, opportunities, or just to meet ourselves!',
  path: '/contact',
};

export const NAVIGATION_PILLS: PillProps[] = [
  PROJECTS_PILL,
  BLOG_PILL,
  CONTACT_PILL,
];
