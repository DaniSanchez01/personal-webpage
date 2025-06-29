import AwardPill from './awardPill/awardPill';
import { AwardPillProps, AWARDS_PILLS_CONTENT } from './awardsSection.config';

const AwardsSection = () => {
  return (
    <>
      <div className="cst-section-separator">
        <span>
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
          Awards & Achievements
          <img src="/src/assets/icons/favicon.ico" className="cst-h-2" />
        </span>
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
