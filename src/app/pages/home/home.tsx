import PillsContainer from '../../components/pill/pills-container.component';
import ContactForm from '../../components/contactForm';
import { NAVIGATION_PILLS } from './home-sections.fixture';

function Home() {
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
            <button type="button" className="cst-read-more-btn">
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
      <div style={{ backgroundColor: 'var(--cst-palette2-4)' }}>
        <div className="container pb-4">
          <div className="row cst-pills-container">
            <PillsContainer items={NAVIGATION_PILLS} />
          </div>
          <div className="row">
            <div className="col-auto col-md-8">
              <ContactForm />
            </div>
            <div className="col-auto col-md-4">
              <h1>Let's talk!</h1>
              <p>
                Whether it's a quick hello, a question, or a potential
                collaboration, I'd love to hear from you.
              </p>
              <p>
                I'm always open to connecting with curious minds and exploring
                new opportunities together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
