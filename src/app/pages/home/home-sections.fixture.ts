import { PillProps } from '../../components/pill/pill.component';

export const BLOG_PILL: PillProps = {
  title: 'Blog',
  description: 'Explora mi blog con artículos sobre desarrollo y tecnología',
  path: '/blog',
};

export const ABOUT_PILL: PillProps = {
  title: 'About Me',
  description: 'Conoce más sobre mi experiencia y habilidades',
  path: '/about',
};

export const HOME_PILL: PillProps = {
  title: 'Home',
  description: 'Vuelve a la página principal',
  path: '/',
};

export const NAVIGATION_PILLS: PillProps[] = [BLOG_PILL, ABOUT_PILL, HOME_PILL];
