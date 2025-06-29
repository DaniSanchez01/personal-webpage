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
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="cst-award-pill clickable" onClick={handleClick}>
      <div className="cst-award-pill-content">
        <div className="cst-award-pill-main">
          <div className="cst-award-pill-index">{index}</div>
          <div className="cst-award-pill-text">
            <span className="fw-bold cst-award-pill-title">{title}</span>
            <span className="cst-award-pill-description">{description}</span>
          </div>
        </div>
        <div className="cst-award-pill-meta">
          <span>
            {organization} - {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AwardPill;
