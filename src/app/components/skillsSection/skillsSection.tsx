import SectionSeparator from '../sectionSeparator/sectionSeparator';
import SkillPill from './skillPill';
import {
  SkillProps,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
} from './skillsSection.config';
import './skillsSection.css';

const SkillsSection = () => {
  return (
    <>
      <SectionSeparator>Skills</SectionSeparator>
      <p className="cst-skills-intro">
        Here are some of the key skills I've developed throughout my career,
        representing the technologies and competencies I'm most passionate about
        and experienced with.
      </p>
      <div className="cst-skills-columns">
        <div>
          <h3 className="cst-skills-title">
            Technical <em className="cst-accent-word">Skills</em>
          </h3>
          {TECHNICAL_SKILLS.map((skill: SkillProps) => (
            <SkillPill
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
        <div>
          <h3 className="cst-skills-title">
            Soft <em className="cst-accent-word">Skills</em>
          </h3>
          {SOFT_SKILLS.map((skill: SkillProps) => (
            <SkillPill
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
