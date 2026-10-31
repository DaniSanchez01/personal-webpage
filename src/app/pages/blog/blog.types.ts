export enum BlogCategory {
  Story = 'story',
  Tech = 'tech',
  Project = 'project',
}
export interface BlogCover {
  src: string;
  alt: string;
}

/**
 * Building blocks of the post body (detail view). The list view never reads
 * them, but they live in the same dictionary so each post is a single source
 * of truth.
 */
export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'code'; code: string; language?: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPost {
  /** URL identifier: the detail view will live at `/blog/:slug`. */
  slug: string;
  title: string;
  /** Short summary. Shown in the list and as the lead paragraph in the detail. */
  excerpt: string;
  /** ISO date (YYYY-MM-DD). Formatted when rendering, also used for ordering. */
  publishedAt: string;
  readTimeMinutes: number;
  categories: BlogCategory[];
  /** Optional. Without it, a default cover with the title's initial is shown. */
  cover?: BlogCover;
  /** Body of the post (detail view). */
  content: BlogContentBlock[];
}
