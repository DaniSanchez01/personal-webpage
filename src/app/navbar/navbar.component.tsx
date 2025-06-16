import { Link } from 'react-router-dom';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import './navbar.css';

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

      <div className="d-none d-md-flex">
        <DesktopNavbar />
      </div>
      <div className="d-md-none">
        <MobileNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
