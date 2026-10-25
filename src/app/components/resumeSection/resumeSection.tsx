import './resumeSection.css';
import SectionSeparator from '../sectionSeparator/sectionSeparator';
import { RESUME_STAGES_DATA } from './resumeSection.config';
import ResumeStage, {
  Props as ResumeStageProps,
} from './resumeStage/resumeStage';

const ResumeSection = () => {
  return (
    <>
      <SectionSeparator>
        <em className="cst-accent-word">Resume</em>
      </SectionSeparator>
      <div className="cst-timeline">
        {RESUME_STAGES_DATA.map((resumeStage: ResumeStageProps) => (
          <ResumeStage key={resumeStage.title} {...resumeStage} />
        ))}
      </div>
    </>
  );
};

export default ResumeSection;
