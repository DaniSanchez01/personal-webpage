import './presentationCard.css';
import presentationImage from '../../../assets/images/presentationCard.jpeg';
import cv from '../../../assets/documents/cv.pdf';

const name = 'Daniel Sánchez';
const profession = 'Software Engineer';
const email = 'danisanchezr2001@gmail.com';
const location = 'Murcia, Spain';

const PresentationCard = () => {
  return (
    <div className="cst-presentation-card">
      <img
        src={presentationImage}
        alt="Personal Picture"
        className="cst-presentation-image"
      />
      <h2 className="cst-presentation-name">{name}</h2>
      <p className="cst-presentation-subtitle">{profession}</p>
      <p className="cst-presentation-contact">{email}</p>
      <p className="cst-presentation-contact">{location}</p>
      {/* Opens the browser PDF viewer, which lets visitors read it and download it */}
      <a
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        className="cst-read-more-btn cst-presentation-cv"
      >
        Download CV <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
};

export default PresentationCard;
