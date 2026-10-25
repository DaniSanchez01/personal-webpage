import { BlogCategory } from './blog.types';

export const POSTS_PER_PAGE = 7;

export const CATEGORY_PARAM = 'category';
export const PAGE_PARAM = 'page';

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { tag: string; filter: string }
> = {
  [BlogCategory.Story]: { tag: 'Story', filter: 'Stories' },
  [BlogCategory.Tech]: { tag: 'Tech', filter: 'Tech' },
  [BlogCategory.Project]: { tag: 'Project', filter: 'Projects' },
};
