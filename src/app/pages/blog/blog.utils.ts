import { BlogPost } from './blog.types';

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

/** '2026-10-02' -> 'Oct 02, 2026' */
export const formatPostDate = (isoDate: string): string =>
  DATE_FORMATTER.format(new Date(isoDate));

export const sortByNewest = (posts: BlogPost[]): BlogPost[] =>
  [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

/** Chronological neighbours: `previous` is the older post, `next` the newer. */
export const getAdjacentPosts = (
  posts: BlogPost[],
  slug: string,
): { previous?: BlogPost; next?: BlogPost } => {
  const sorted = sortByNewest(posts);
  const index = sorted.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { previous: sorted[index + 1], next: sorted[index - 1] };
};
