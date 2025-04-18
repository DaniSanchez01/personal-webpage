import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-light cst-navbar">
      <Link className="navbar-brand cst-fit-height" to="/">
        <img
          src="/src/assets/images/expandedLogo.png"
          alt="Logo Personal"
          className="cst-fit-height"
        />
      </Link>

      <div className="cst-internal-links">
        <Link to="/" className="nav-link cst-nav-link">
          Home
        </Link>
        <Link to="/blog" className="nav-link cst-nav-link">
          Blog
        </Link>
      </div>

      <div className="cst-external-links">
        <a
          href="https://www.linkedin.com/in/daniel-sánchez-rodríguez-629626255/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link cst-nav-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/DaniSanchez01"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link cst-nav-link"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
