import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-light cst-navbar sticky-top">
      <Link className="navbar-brand cst-fit-height" to="/">
        <img
          src="/src/assets/images/expandedLogo.png"
          alt="Logo Personal"
          className="cst-fit-height"
        />
      </Link>

      <div className="cst-internal-links">
        <Link
          to="/"
          className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
        >
          <span>Home</span>
        </Link>
        <Link
          to="/about"
          className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
        >
          <span>About Me</span>
        </Link>
        <Link
          to="/projects"
          className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
        >
          <span>Projects</span>
        </Link>
        <Link
          to="/blog"
          className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
        >
          <span>Blog</span>
        </Link>
        <Link
          to="/contact"
          className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
        >
          <span>Contact</span>
        </Link>
      </div>

      <div className="cst-external-links">
        <a
          href="https://www.linkedin.com/in/daniel-sánchez-rodríguez-629626255/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link cst-nav-link cst-color-change-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/DaniSanchez01"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link cst-nav-link cst-color-change-link"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
