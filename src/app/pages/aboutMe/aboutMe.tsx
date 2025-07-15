import AwardsSection from '../../components/awardsSection/awardsSection';
import PresentationCard from '../../components/presentationCard/presentationCard';
import ResumeSection from '../../components/resumeSection/resumeSection';
import SkillsSection from '../../components/skillsSection/skillsSection';
import './aboutMe.css';

function AboutMe() {
  return (
    <div className="container pb-2">
      <div className="row my-3">
        <div className="col-md-3">
          <PresentationCard></PresentationCard>
        </div>
        <div className="col-md-9">
          <div className="d-flex align-items-end my-3">
            <img src="/src/assets/icons/favicon.ico" className="cst-h-3" />
            <h1 className="m-0">Introduce</h1>
          </div>
          <div>
            <h5 className="fw-bolder">
              Nice to meet you! I'm Dani Sánchez, a Software Developer with over
              2 years of experience.
            </h5>
            <p>
              Born and raised in Molina de Segura, Murcia, I spent my teenage
              years playing basketball, enjoying the sun and my loved ones, but
              primarily trying to figure out what I would like to do after
              finishing high school. By a twist of fate, I ended up studying
              Computer Science at the University of Murcia, where I discovered
              my passion for the field.
            </p>
            <p>
              Even though I'm currently working as a Software Developer, I love
              learning about all kinds of programming areas, like AI,
              cybersecurity, data science, etc. Sometimes programming can be
              frustrating, but I love the challenge that it brings and the
              feeling of accomplishment is always worth it.
            </p>
            <p>
              My years working in a big company taught me to value the clean
              code practices, always trying to deepen my knowledge of core
              concepts such as DDD, SOLID principles, Hexagonal Architecture,
              Design Patterns, etc. I consider myself a backend programmer, but
              I also enjoy delivering in the frontend and helping in the full
              process of development. This, along with my interest in learning
              React, was the reason why that led me to create this website!
            </p>
          </div>
          <div className="row mt-auto">
            <div className="col-4">
              <p className="cst-about-me-subtitle">Date of Birth</p>
              <h6 className="fw-bolder">March 2nd, 2001</h6>
            </div>
            <div className="col-4">
              <p className="cst-about-me-subtitle">Experience</p>
              <h6 className="fw-bolder">2+ Years</h6>
            </div>
            <div className="col-4">
              <p className="cst-about-me-subtitle">Working on</p>
              <h6 className="fw-bolder">Fever</h6>
            </div>
          </div>
        </div>
      </div>
      <AwardsSection></AwardsSection>
      <ResumeSection></ResumeSection>
      <SkillsSection></SkillsSection>
    </div>
  );
}

export default AboutMe;
