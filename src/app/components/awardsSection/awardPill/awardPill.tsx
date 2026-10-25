import './awardPill.css';

export interface Props {
  index: number;
  title: string;
  description: string;
  year: number;
  organization: string;
  link: string;
}

const AwardPill = ({
  index,
  title,
  description,
  year,
  organization,
  link,
}: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cst-award-pill"
    >
      <span className="cst-award-pill-index">{index}</span>
      <span className="cst-award-pill-title">{title}</span>
      <span className="cst-award-pill-description">{description}</span>
      <span className="cst-award-pill-meta">
        {organization} - {year}
      </span>
    </a>
  );
};

export default AwardPill;
