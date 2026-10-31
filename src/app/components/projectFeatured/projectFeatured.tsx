import { Project } from '../../pages/projects/projects.types';
import ProjectLinks from '../projectLinks/projectLinks';
import ProjectStack from '../projectStack/projectStack';
import ProjectStatusTag from '../projectStatusTag/projectStatusTag';
import './projectFeatured.css';

interface ProjectFeaturedProps {
  project: Project;
  index: number;
}

function ProjectFeatured({ project, index }: ProjectFeaturedProps) {
  const { title, description, year, status, stack, links, screenshot } =
    project;
  // Every other project swaps sides (desktop) and shadow color
  const reversed = index % 2 === 1;

  return (
    <article
      className={`cst-project-featured${reversed ? ' cst-project-featured-reversed' : ''}`}
    >
      <div className="cst-project-featured-media">
        {screenshot ? (
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="cst-project-featured-screenshot"
          />
        ) : (
          <div
            className="cst-project-featured-screenshot cst-project-featured-screenshot-default"
            role="img"
            aria-label="Default screenshot"
          >
            {title.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="cst-project-featured-body">
        <span className="cst-project-featured-label">
          Featured {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="cst-project-featured-title">{title}</h3>
        <div className="cst-project-featured-meta">
          <ProjectStatusTag status={status} />
          <span className="cst-project-featured-year">{year}</span>
        </div>
        <p className="cst-project-featured-description">{description}</p>
        <div className="cst-project-featured-stack">
          <ProjectStack stack={stack} />
        </div>
        <div className="cst-project-featured-links">
          <ProjectLinks links={links} />
        </div>
      </div>
    </article>
  );
}

export default ProjectFeatured;
