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
      <div className="cst-timeline-content">
        <div className="d-flex flex-row mb-3 cst-timeline-header">
          <img
            src={organizationLogo}
            alt={organization}
            className="cst-organization-logo"
          />
          <div className="d-flex flex-column justify-content-center">
            <div className="cst-timeline-title">{title}</div>
            <div className="cst-timeline-organization">{organization}</div>
            <div className="cst-timeline-date">{date}</div>
          </div>
        </div>
        <div className="cst-timeline-description">{description}</div>
        {stages &&
          stages.map((stage, index) => (
            <div key={index} className="cst-timeline-substage">
              <div className="mb-1">
                <span className="cst-timeline-substage-title">
                  {stage.title}
                </span>
                <span className="cst-timeline-substage-date">{stage.date}</span>
              </div>
              <div className="cst-timeline-substage-description">
                {stage.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResumeStage;
