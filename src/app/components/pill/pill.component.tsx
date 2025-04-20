import { Link } from 'react-router-dom';

export interface PillProps {
  title: string;
  description: string;
  path: string;
}

function Pill({ title, description, path }: PillProps) {
  return (
    <Link to={path} className="text-decoration-none text-reset">
      <div className="cst-pill">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Pill;
