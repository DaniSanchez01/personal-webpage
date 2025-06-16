import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import './navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className="navbar navbar-light cst-navbar sticky-top">
      <Link className="navbar-brand cst-fit-height" to="/">
        <img
          src="/src/assets/images/expandedLogo.png"
          alt="Logo Personal"
          className="cst-fit-height"
        />
      </Link>

      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </nav>
  );
}

export default Navbar;
