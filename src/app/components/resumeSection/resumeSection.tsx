import './resumeSection.css';
import { RESUME_STAGES_DATA } from './resumeSection.config';
import ResumeStage, {
  Props as ResumeStageProps,
} from './resumeStage/resumeStage';

const ResumeSection = () => {
  return (
    <>
      <div className="cst-section-separator">
        <span>
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
          Resume
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
        </span>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-8 cst-timeline cst-timeline-line">
            {RESUME_STAGES_DATA.map(
              (resumeStage: ResumeStageProps, index: number) => (
                <ResumeStage key={index} {...resumeStage} />
              ),
            )}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
