import AwardPill from './awardPill/awardPill';
import { AwardPillProps, AWARDS_PILLS_CONTENT } from './awardsSection.config';

const AwardsSection = () => {
  return (
    <>
      <div className="cst-section-separator">
        <span>Awards & Achievements</span>
      </div>
      <div className="container">
        {AWARDS_PILLS_CONTENT.map(
          (awardPillInfo: AwardPillProps, index: number) => (
            <AwardPill
              key={index + 1}
              index={index + 1}
              title={awardPillInfo.title}
              description={awardPillInfo.description}
              year={awardPillInfo.year}
              organization={awardPillInfo.organization}
              link={awardPillInfo.link}
            ></AwardPill>
          ),
        )}
      </div>
    </>
  );
};

export default AwardsSection;
