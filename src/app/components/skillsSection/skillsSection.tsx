import SkillPill from './skillPill';
import {
  SkillProps,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
} from './skillsSection.config';

const SkillsSection = () => {
  return (
    <>
      <div className="cst-section-separator">
        <span>
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
          Skills
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <p className="lead">
              Here are some of the key skills I've developed throughout my
              career, representing the technologies and competencies I'm most
              passionate about and experienced with.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h3 className="text-center mb-4">Technical Skills</h3>
            {TECHNICAL_SKILLS.map((skill: SkillProps) => (
              <SkillPill
                key={skill.title}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
          <div className="col-md-6 mb-3">
            <h3 className="text-center mb-4">Soft Skills</h3>
            {SOFT_SKILLS.map((skill: SkillProps) => (
              <SkillPill
                key={skill.title}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
