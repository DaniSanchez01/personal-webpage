import { ProjectLinkType, ProjectStatus } from './projects.types';

export const PROJECT_STATUSES: Record<ProjectStatus, { label: string }> = {
  [ProjectStatus.InProgress]: { label: 'In progress' },
  [ProjectStatus.Completed]: { label: 'Completed' },
};

export const PROJECT_LINKS: Record<ProjectLinkType, { label: string }> = {
  [ProjectLinkType.Live]: { label: 'Live' },
  [ProjectLinkType.Code]: { label: 'Code' },
  [ProjectLinkType.Paper]: { label: 'Paper' },
};
