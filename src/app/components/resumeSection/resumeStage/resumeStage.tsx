import './resumeStage.css';

export interface Props {
  date: string;
  title: string;
  organization: string;
  organizationLogo: string;
  description?: string;
  stages?: Array<SubstageProps>;
}

export interface SubstageProps {
  title: string;
  description: string;
  date: string;
}

const ResumeStage = ({
  date,
  title,
  organization,
  organizationLogo,
  description,
  stages,
}: Props) => {
  return (
    <div className="cst-timeline-item">
      <div className="cst-timeline-dot"></div>
      <div className="cst-timeline-header">
        <img
          src={organizationLogo}
          alt={organization}
          className="cst-organization-logo"
        />
        <div>
          <h3 className="cst-timeline-title">{title}</h3>
          <p className="cst-timeline-meta">
            <span className="cst-timeline-organization">{organization}</span>
            <span className="cst-timeline-date">{date}</span>
          </p>
        </div>
      </div>
      {description && <p className="cst-timeline-description">{description}</p>}
      {stages?.map((stage) => (
        <div key={stage.title} className="cst-timeline-substage">
          <span className="cst-timeline-substage-title">{stage.title}</span>
          <span className="cst-timeline-substage-date">{stage.date}</span>
          <p className="cst-timeline-substage-description">
            {stage.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResumeStage;
