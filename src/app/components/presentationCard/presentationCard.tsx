import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMap,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import './presentationCard.css';
import presentationImage from '../../../assets/images/presentationCard.jpeg';

const name = 'Daniel Sánchez';
const profession = 'Software Engineer';
const email = 'danielsanchez01@gmail.com';
const location = 'Murcia, Spain';

const PresentationCard = () => {
  return (
    <div className="cst-presentation-card">
      <div className="d-block d-md-none">
        <div className="cst-mobile-content">
          <div className="cst-mobile-image">
            <img src={presentationImage} alt={name} />
          </div>

          <div className="cst-mobile-info">
            <div className="cst-mobile-header">
              <h4>Daniel Sánchez</h4>
              <p className="subtitle">{profession}</p>
            </div>

            <div className="cst-contact-info">
              <div className="cst-contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{email}</span>
              </div>
              <div className="cst-contact-item">
                <FontAwesomeIcon icon={faMap} />
                <span>Murcia, Spain</span>
              </div>
            </div>

            <div className="cst-mobile-cta">
              <button type="button">
                <FontAwesomeIcon icon={faPaperPlane} />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block">
        <img
          src={presentationImage}
          alt="Personal Picture"
          className="cst-fit mb-3 rounded cst-desktop-image"
        />
        <h4 className="cst-desktop-name">{name}</h4>
        <p className="cst-desktop-subtitle">{profession}</p>
        <p className="cst-email">
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </p>
        <p>
          <FontAwesomeIcon icon={faMap} />
          {location}
        </p>
        <button type="button" className="w-100">
          <FontAwesomeIcon icon={faPaperPlane} /> Download CV
        </button>
      </div>
    </div>
  );
};

export default PresentationCard;
