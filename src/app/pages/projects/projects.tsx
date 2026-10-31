import ProjectFeatured from '../../components/projectFeatured/projectFeatured';
import ProjectRow from '../../components/projectRow/projectRow';
import ProjectsSectionTitle from '../../components/projectsSectionTitle/projectsSectionTitle';
import { PROJECTS } from './projects.fixture';
import { sortByNewest } from './projects.utils';
import './projects.css';

function Projects() {
  const projects = sortByNewest(PROJECTS);
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="cst-container cst-projects">
      <section className="cst-projects-hero">
        <h1 className="cst-projects-title">
          Things I've <em className="cst-accent-word">built.</em>
        </h1>
        <p className="cst-projects-intro">
          Projects I finished in the past and ones I am working on right now.
          Most of them have code or a live version you can open.
        </p>
      </section>

      <section className="cst-projects-featured">
        <ProjectsSectionTitle
          aside={`${featuredProjects.length} of ${projects.length}`}
        >
          Featured <em className="cst-accent-word">projects</em>
        </ProjectsSectionTitle>
        <div className="cst-projects-featured-list">
          {featuredProjects.map((project, index) => (
            <ProjectFeatured
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="cst-projects-more">
          <ProjectsSectionTitle>
            More <em className="cst-accent-word">projects</em>
          </ProjectsSectionTitle>
          <div className="cst-projects-more-list">
            {otherProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Projects;
