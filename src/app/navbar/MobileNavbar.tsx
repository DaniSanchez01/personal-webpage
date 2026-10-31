import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  INTERNAL_LINKS,
  InternalLink,
} from './navbar.config.ts';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const MENU_ICON_PATH = 'M4 8h16M4 16h16';
const CLOSE_ICON_PATH = 'M6 6l12 12M18 6L6 18';

const MobileNavbar = () => {
  const [menuIsClosed, setMenuIsClosed] = useState(true);

  const closeMenu = () => setMenuIsClosed(true);
  const toggleMenu = () => setMenuIsClosed(!menuIsClosed);

  return (
    <>
      <button
        className="cst-hamburger-btn"
        type="button"
        aria-label="Menu"
        aria-expanded={!menuIsClosed}
        onClick={toggleMenu}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d={menuIsClosed ? MENU_ICON_PATH : CLOSE_ICON_PATH} />
        </svg>
      </button>

      {!menuIsClosed && (
        <div className="cst-mobile-menu">
          <div className="cst-mobile-menu-content">
            {INTERNAL_LINKS.map((link: InternalLink) => (
              <NavLink
                key={link.id}
                to={link.to}
                end={link.to === '/'}
                className="cst-mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}

            <hr className="cst-mobile-divider" />

            <div className="cst-mobile-social">
              {EXTERNAL_LINKS.map((link: ExternalLink) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cst-mobile-social-link"
                  aria-label={link.label}
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
