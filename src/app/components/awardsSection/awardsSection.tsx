import SectionSeparator from '../sectionSeparator/sectionSeparator';
import AwardPill from './awardPill/awardPill';
import { AwardPillProps, AWARDS_PILLS_CONTENT } from './awardsSection.config';

const AwardsSection = () => {
  return (
    <>
      <SectionSeparator>
        Awards & <em className="cst-accent-word">Achievements</em>
      </SectionSeparator>
      <div className="cst-awards">
        {AWARDS_PILLS_CONTENT.map(
          (awardPillInfo: AwardPillProps, index: number) => (
            <AwardPill
              key={awardPillInfo.title}
              index={index + 1}
              {...awardPillInfo}
            ></AwardPill>
          ),
        )}
      </div>
    </>
  );
};

export default AwardsSection;
