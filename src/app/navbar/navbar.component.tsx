import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import './navbar.css';

function Navbar() {
  const [menuIsClosed, setMenuIsClosed] = useState(true);

  return (
    <nav className="navbar navbar-light cst-navbar sticky-top">
      <Link className="navbar-brand cst-fit-height" to="/">
        <img
          src="/src/assets/images/expandedLogo.png"
          alt="Logo Personal"
          className="cst-fit-height"
        />
      </Link>

      <button
        className="btn d-md-none cst-hamburger-btn"
        type="button"
        onClick={() => setMenuIsClosed(!menuIsClosed)}
      >
        <FontAwesomeIcon icon={menuIsClosed ? faBars : faTimes} size="lg" />
      </button>

      <div className="cst-internal-links d-none d-md-flex">
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

      <div className="cst-external-links d-none d-md-flex">
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

      {!menuIsClosed && (
        <div className="cst-mobile-menu d-md-none">
          <div className="cst-mobile-menu-content">
            <Link
              to="/"
              className="cst-mobile-link"
              onClick={() => setMenuIsClosed(true)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="cst-mobile-link"
              onClick={() => setMenuIsClosed(true)}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="cst-mobile-link"
              onClick={() => setMenuIsClosed(true)}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="cst-mobile-link"
              onClick={() => setMenuIsClosed(true)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="cst-mobile-link"
              onClick={() => setMenuIsClosed(true)}
            >
              Contact
            </Link>

            <hr className="cst-mobile-divider" />

            <div className="cst-mobile-social">
              <a
                href="https://www.linkedin.com/in/daniel-sánchez-rodríguez-629626255/"
                target="_blank"
                rel="noopener noreferrer"
                className="cst-mobile-social-link"
                onClick={() => setMenuIsClosed(true)}
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://github.com/DaniSanchez01"
                target="_blank"
                rel="noopener noreferrer"
                className="cst-mobile-social-link"
                onClick={() => setMenuIsClosed(true)}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
