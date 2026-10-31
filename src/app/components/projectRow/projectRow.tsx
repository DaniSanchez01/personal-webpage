import { Project } from '../../pages/projects/projects.types';
import ProjectLinks from '../projectLinks/projectLinks';
import ProjectStack from '../projectStack/projectStack';
import ProjectStatusTag from '../projectStatusTag/projectStatusTag';
import './projectRow.css';

interface ProjectRowProps {
  project: Project;
}

/** Not a link itself: only its project links are interactive. */
function ProjectRow({ project }: ProjectRowProps) {
  const { title, description, year, status, stack, links } = project;

  return (
    <article className="cst-project-row">
      <span className="cst-project-row-year">{year}</span>
      <div className="cst-project-row-main">
        <h3 className="cst-project-row-title">{title}</h3>
        <p className="cst-project-row-description">{description}</p>
      </div>
      <div className="cst-project-row-stack">
        <ProjectStack stack={stack} />
      </div>
      <div className="cst-project-row-status">
        <ProjectStatusTag status={status} />
      </div>
      <div className="cst-project-row-links">
        <ProjectLinks links={links} inline />
      </div>
    </article>
  );
}

export default ProjectRow;
