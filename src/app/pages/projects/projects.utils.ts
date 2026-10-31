import { Project } from './projects.types';

export const sortByNewest = (projects: Project[]): Project[] =>
  [...projects].sort((a, b) => b.year - a.year);
