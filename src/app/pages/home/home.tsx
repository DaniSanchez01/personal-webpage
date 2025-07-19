import { useNavigate } from 'react-router-dom';
import PillsContainer from '../../components/pill/pills-container.component';
import { NAVIGATION_PILLS } from './home-sections.fixture';
import ContactSection from '../../components/contactSection/contactSection.component.tsx';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-auto col-md-6 mb-3">
            <h2 className="fw-light text-muted">Hello, I'm</h2>
            <h1 className="display-4 fw-bold mb-1">Dani Sánchez</h1>
            <h3
              className="fw-normal mb-4"
              style={{ color: 'var(--cst-palette2-7)' }}
            >
              Software Engineer
            </h3>
            <h5 className="fw-bolder lh-base mt-3 mb-3">
              Welcome to my personal website! Here you can explore my
              professional journey, technical skills, and get to know me better.
            </h5>
            <p className="lead">
              Feel free to navigate through the different sections to discover
              more about my experience and interests in software development.
            </p>
            <button
              type="button"
              className="cst-read-more-btn"
              onClick={() => navigate('/about')}
            >
              Read more
            </button>
          </div>
          <div className="col-auto col-md-6">
            <img
              src="/src/assets/images/profilePicture.png"
              alt="Personal Picture"
              className="cst-fit"
            ></img>
          </div>
        </div>
      </div>
      <div className="cst-home-content">
        <div className="container pb-4">
          <div className="mb-5">
            <div className="row cst-pills-container">
              <PillsContainer items={NAVIGATION_PILLS} />
            </div>
          </div>
          <ContactSection></ContactSection>
        </div>
      </div>
    </>
  );
}

export default Home;
