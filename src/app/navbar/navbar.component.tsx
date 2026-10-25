import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import expandedLogo from '../../assets/images/expandedLogo.png';

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
    <nav className="cst-navbar">
      <div className="cst-container cst-navbar-content">
        <Link className="cst-navbar-brand" to="/">
          <img
            src={expandedLogo}
            alt="Logo Personal"
            className="cst-fit-height"
          />
        </Link>

        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </nav>
  );
}

export default Navbar;
