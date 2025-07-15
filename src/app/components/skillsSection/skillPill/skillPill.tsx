import './skillPill.css';

export interface Props {
  title: string;
  description: string;
}

const SkillPill = ({ title, description }: Props) => {
  return (
    <div className="cst-skill-card">
      <div className="cst-skill-card-header">
        <h4 className="cst-skill-card-title">{title}</h4>
      </div>
      <p className="cst-skill-card-description">{description}</p>
    </div>
  );
};

export default SkillPill;
