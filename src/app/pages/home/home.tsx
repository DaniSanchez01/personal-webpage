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
            <h2>Hello, I'm</h2>
            <h1>Dani Sánchez</h1>
            <h3>Software Engineer</h3>
            <p>
              I'm a passionate software engineer looking for new challenges.
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
          <div className="row cst-pills-container">
            <PillsContainer items={NAVIGATION_PILLS} />
          </div>
          <ContactSection></ContactSection>
        </div>
      </div>
    </>
  );
}

export default Home;
