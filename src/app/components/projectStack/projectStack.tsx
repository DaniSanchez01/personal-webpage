import './projectStack.css';

interface ProjectStackProps {
  stack: string[];
}

function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <ul className="cst-project-stack" aria-label="Technologies">
      {stack.map((technology) => (
        <li key={technology} className="cst-project-stack-item">
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default ProjectStack;
