import AwardsSection from '../../components/awardsSection/awardsSection';
import PresentationCard from '../../components/presentationCard/presentationCard';
import './aboutMe.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-3">
          <PresentationCard></PresentationCard>
        </div>
        <div className="col-md-9">
          <div className="d-flex align-items-end my-3">
            <img
              src="/src/assets/icons/favicon.ico"
              alt="Logo Personal"
              className="cst-h-4"
            />
            <h1 className="m-0">Introduce</h1>
          </div>
          <div>
            <h5 className="fw-bolder">
              Nice to meet you! I'm Dani Sánchez, a Software Developer with more
              than 2 years of experience.
            </h5>
            <p>
              Born and raised in Molina de Segura, Murcia, I spent my teenage
              years playing basketball, enjoying the sun and my close ones, but
              primarily trying to figure out what I would like to do after
              finishing high school. By a twist of fate, I ended up studying
              Computer Science at the University of Murcia, where I discovered
              my passion for software development.
            </p>
            <p>
              My years on the degree, including a full academic year in English
              at Babeș-Bolyai University (UBB) in Romania as part of a study
              exchange, played a key role in developing a critical and
              analytical thinking, as well as learning many core programming
              skills.
            </p>
            <p>
              I started my first work while developing my final degree project,
              as a researcher on The Cybersecurity & Data Science Lab of my
              university. After finishing my degree (and a couple months
              enjoying the summer), I moved to Madrid, where I started working
              as a Software Developer at Fever. Since then, I've been working on
              a variety of projects, learning from the talent within the
              company. And I moved to Murcia again, working fully remote.
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
      <div className="cst-section-separator">
        <span>Resume</span>
      </div>
    </div>
  );
}

export default AboutMe;
