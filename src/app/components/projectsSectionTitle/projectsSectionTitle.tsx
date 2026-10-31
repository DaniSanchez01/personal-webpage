import { ReactNode } from 'react';
import './projectsSectionTitle.css';

interface ProjectsSectionTitleProps {
  children: ReactNode;
  /** Short note aligned to the right, e.g. a counter. */
  aside?: string;
}

function ProjectsSectionTitle({ children, aside }: ProjectsSectionTitleProps) {
  return (
    <div className="cst-projects-section-title">
      <h2 className="cst-projects-section-title-text">{children}</h2>
      {aside && (
        <span className="cst-projects-section-title-aside">{aside}</span>
      )}
    </div>
  );
}

export default ProjectsSectionTitle;
