import { Link } from 'react-router-dom';

export interface PillProps {
  title: string;
  description: string;
  path: string;
}

interface Props extends PillProps {
  index: number;
}

function Pill({ index, title, description, path }: Props) {
  return (
    <Link to={path} className="cst-pill">
      <span className="pill-index">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="pill-title">{title}</h3>
      <p className="pill-description">{description}</p>
      <span className="pill-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default Pill;
