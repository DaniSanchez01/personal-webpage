import { PROJECT_STATUSES } from '../../pages/projects/projects.config';
import { ProjectStatus } from '../../pages/projects/projects.types';
import './projectStatusTag.css';

interface ProjectStatusTagProps {
  status: ProjectStatus;
}

function ProjectStatusTag({ status }: ProjectStatusTagProps) {
  return (
    <span className={`cst-project-status cst-project-status-${status}`}>
      {PROJECT_STATUSES[status].label}
    </span>
  );
}

export default ProjectStatusTag;
