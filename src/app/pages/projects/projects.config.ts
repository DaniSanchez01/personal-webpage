import { ProjectLinkType, ProjectStatus } from './projects.types';

export const PROJECT_STATUSES: Record<
  ProjectStatus,
  { label: string; tagVariant: 'accent' | 'ink' }
> = {
  [ProjectStatus.InProgress]: { label: 'In progress', tagVariant: 'accent' },
  [ProjectStatus.Completed]: { label: 'Completed', tagVariant: 'ink' },
};

export const PROJECT_LINKS: Record<ProjectLinkType, { label: string }> = {
  [ProjectLinkType.Live]: { label: 'Live' },
  [ProjectLinkType.Code]: { label: 'Code' },
  [ProjectLinkType.Paper]: { label: 'Paper' },
};
