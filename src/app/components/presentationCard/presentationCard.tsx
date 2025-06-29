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
          className="cst-fit mb-3 rounded"
          style={{ border: '2px solid var(--cst-palette2-2)' }}
        />
        <h4
          style={{
            margin: '0 0 0.25rem 0',
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#000',
            textAlign: 'center',
          }}
        >
          {name}
        </h4>
        <p
          style={{
            margin: '0 0 1rem 0',
            fontSize: '0.9rem',
            color: 'var(--cst-palette2-6)',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {profession}
        </p>
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
