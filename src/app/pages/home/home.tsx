import { Link } from 'react-router-dom';
import PillsContainer from '../../components/pill/pills-container.component';
import { NAVIGATION_PILLS } from './home-sections.fixture';
import ContactSection from '../../components/contactSection/contactSection.component.tsx';
import profilePicture from '../../../assets/images/profilePicture.jpg';
import './home.css';

function Home() {
  return (
    <>
      <section className="cst-container cst-hero">
        <div className="cst-hero-text">
          <p className="cst-hero-greeting">Hello, I'm</p>
          <h1 className="cst-hero-name">
            Dani
            <br />
            <em className="cst-accent-word">Sánchez</em>
          </h1>
          <p className="cst-hero-role">Software Engineer</p>
          <p className="cst-hero-intro">
            Welcome to my personal website! Here you can explore my professional
            journey, technical skills, and get to know me better.
          </p>
          <p className="cst-hero-description">
            Feel free to navigate through the different sections to discover
            more about my experience and interests in software development.
          </p>
          <Link to="/about" className="cst-read-more-btn cst-hero-cta">
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="cst-hero-visual">
          <div className="cst-hero-circle"></div>
          <img
            src={profilePicture}
            alt="Personal Picture"
            className="cst-hero-photo"
          />
        </div>
      </section>
      <section className="cst-container cst-home-section">
        <PillsContainer items={NAVIGATION_PILLS} />
      </section>
      <section className="cst-container">
        <ContactSection />
      </section>
    </>
  );
}

export default Home;
