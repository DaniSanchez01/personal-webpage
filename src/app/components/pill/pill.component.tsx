import { Link } from 'react-router-dom';

export interface PillProps {
  title: string;
  description: string;
  path: string;
}

function Pill({ title, description, path }: PillProps) {
  return (
    <Link to={path} className="text-decoration-none text-reset">
      <div className="cst-pill enhanced-pill">
        <h3 className="pill-title">{title}</h3>
        <p className="pill-description">{description}</p>
        <div className="pill-accent"></div>
      </div>
    </Link>
  );
}

export default Pill;
