import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className={`navbar navbar-light bg-light ${styles.navbar}`}>
      <Link className={`navbar-brand ${styles.navbarBrand}`} to="/">
        <img
          src="/src/assets/icons/favicon.ico"
          alt="Logo Personal"
          width="50"
          height="45"
        ></img>
      </Link>

      <div className={styles.navbarLinks}>
        <Link to="/" className={`nav-link ${styles.navLink}`}>
          Home
        </Link>
        <Link to="/blog" className={`nav-link ${styles.navLink}`}>
          Blog
        </Link>
        <a
          href="https://www.linkedin.com/in/daniel-sánchez-rodríguez-629626255/"
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link ${styles.navLink}`}
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/DaniSanchez01"
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link ${styles.navLink}`}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
