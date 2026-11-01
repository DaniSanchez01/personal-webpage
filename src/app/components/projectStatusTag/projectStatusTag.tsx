import { PROJECT_STATUSES } from '../../pages/projects/projects.config';
import { ProjectStatus } from '../../pages/projects/projects.types';
import Tag from '../tag/tag';

interface ProjectStatusTagProps {
  status: ProjectStatus;
}

function ProjectStatusTag({ status }: ProjectStatusTagProps) {
  return (
    <Tag variant={PROJECT_STATUSES[status].tagVariant}>
      {PROJECT_STATUSES[status].label}
    </Tag>
  );
}

export default ProjectStatusTag;
