import { PROJECT_LINKS } from '../../pages/projects/projects.config';
import { ProjectLink } from '../../pages/projects/projects.types';
import './projectLinks.css';

interface ProjectLinksProps {
  links: ProjectLink[];
  /** Inline: plain text links (list rows). Default: bordered buttons. */
  inline?: boolean;
}

function ProjectLinks({ links, inline = false }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div
      className={`cst-project-links${inline ? ' cst-project-links-inline' : ''}`}
    >
      {links.map(({ type, href }) => (
        <a
          key={type}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cst-project-link"
        >
          {PROJECT_LINKS[type].label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

export default ProjectLinks;
