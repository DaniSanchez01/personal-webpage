import AwardsSection from '../../components/awardsSection/awardsSection';
import PersonalSection from '../../components/personalSection/personalSection';
import PresentationCard from '../../components/presentationCard/presentationCard';
import ResumeSection from '../../components/resumeSection/resumeSection';
import SkillsSection from '../../components/skillsSection/skillsSection';
import './aboutMe.css';

const ABOUT_ME_STATS = [
  { label: 'Date of Birth', value: 'March 2nd, 2001' },
  { label: 'Experience', value: '3+ Years' },
  { label: 'Working on', value: 'Fever' },
];

function AboutMe() {
  return (
    <div className="cst-container cst-about-me">
      <section className="cst-about-me-intro">
        <h1 className="cst-about-me-title">
          Intro<em className="cst-accent-word">duce</em>
        </h1>
        <div className="cst-about-me-card">
          <PresentationCard></PresentationCard>
        </div>
        <div className="cst-about-me-text">
          <p className="cst-about-me-lead">
            Nice to meet you! I'm Dani Sánchez, a Software Developer with over 3
            years of experience.
          </p>
          <p className="cst-paragraph">
            Born and raised in Molina de Segura, Murcia, I spent my teenage
            years playing basketball, enjoying the sun and my loved ones, but
            primarily trying to figure out what I would like to do after
            finishing high school. By a twist of fate, I ended up studying
            Computer Science at the University of Murcia, where I discovered my
            passion for the field.
          </p>
          <p className="cst-paragraph">
            Even though I'm currently working as a Software Developer, I love
            learning about all kinds of programming areas, like AI,
            cybersecurity, data science, etc. Sometimes programming can be
            frustrating, but I love the challenge that it brings and the feeling
            of accomplishment is always worth it.
          </p>
          <p className="cst-paragraph">
            My years working in a big company taught me to value the clean code
            practices, always trying to deepen my knowledge of core concepts
            such as DDD, SOLID principles, Hexagonal Architecture, Design
            Patterns, etc. I consider myself a backend programmer, but I also
            enjoy delivering in the frontend and helping in the full process of
            development. This, along with my interest in learning React, was the
            reason why I decided to create this website!
          </p>
          <dl className="cst-about-me-stats">
            {ABOUT_ME_STATS.map(({ label, value }) => (
              <div key={label}>
                <dt className="cst-about-me-subtitle">{label}</dt>
                <dd className="cst-about-me-value">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <AwardsSection></AwardsSection>
      <ResumeSection></ResumeSection>
      <SkillsSection></SkillsSection>
      <PersonalSection></PersonalSection>
    </div>
  );
}

export default AboutMe;
