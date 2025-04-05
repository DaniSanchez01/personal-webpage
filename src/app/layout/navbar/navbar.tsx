import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

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
      </div>
    </nav>
  );
}

export default Navbar;
