export enum ProjectStatus {
  InProgress = 'in-progress',
  Completed = 'completed',
}

export enum ProjectLinkType {
  Live = 'live',
  Code = 'code',
  Paper = 'paper',
}

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  /** Stable identifier, used as React key. */
  slug: string;
  title: string;
  description: string;
  /** Year the project started. Used for display and ordering. */
  year: number;
  status: ProjectStatus;
  /** Technologies, shown as chips. */
  stack: string[];
  links: ProjectLink[];
  /** Featured projects get the large layout at the top of the page. */
  featured?: boolean;
  /** Only used by featured projects. Without it, a default cover is shown. */
  screenshot?: ProjectScreenshot;
}
