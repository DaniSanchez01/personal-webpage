import { PillProps } from '../../components/pill/pill.component';

export const ABOUT_ME_PILL: PillProps = {
  title: 'About Me',
  description:
    'Read about my professional journey, my accomplishments and my personal interests.',
  path: '/about',
};

export const BLOG_PILL: PillProps = {
  title: 'Blog',
  description:
    'Take a look at my posts, where I write about my experiences and thoughts.',
  path: '/blog',
};

export const PROJECTS_PILL: PillProps = {
  title: 'Projects',
  description:
    'Discover some of my personal projects, contributions and future ideas.',
  path: '/projects',
};

export const NAVIGATION_PILLS: PillProps[] = [
  ABOUT_ME_PILL,
  BLOG_PILL,
  PROJECTS_PILL,
];
