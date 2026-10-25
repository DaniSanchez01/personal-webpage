import './presentationCard.css';
import presentationImage from '../../../assets/images/presentationCard.jpeg';

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
      <button type="button" className="cst-read-more-btn cst-presentation-cv">
        Download CV <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
};

export default PresentationCard;
