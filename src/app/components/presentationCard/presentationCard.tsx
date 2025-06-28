import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMap,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import './presentationCard.css';

const PresentationCard = () => {
  return (
    <div className="cst-presentation-card">
      {/* <p>Software Engineer</p> */}
      <img
        src="/src/assets/images/presentationCard.jpeg"
        alt="Personal Picture"
        className="cst-fit mb-2 rounded border border-shadow"
      ></img>

      <p className="font-weight-bold">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{' '}
        danielsanchez01@gmail.com
      </p>
      <p className="font-weight-bold">
        <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> Murcia, Spain
      </p>
      <button
        type="button"
        className="cst-read-more-btn btn-primary px-1 w-100 "
      >
        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Download CV
      </button>
      {/* <p>Based on Murcia, Spain</p> */}
    </div>
  );
};

export default PresentationCard;
