import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  INTERNAL_LINKS,
  InternalLink,
} from './navbar.config.ts';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavbar = () => {
  const [menuIsClosed, setMenuIsClosed] = useState(true);

  const closeMenu = () => setMenuIsClosed(true);
  const toggleMenu = () => setMenuIsClosed(!menuIsClosed);

  return (
    <>
      <button
        className="btn cst-hamburger-btn"
        type="button"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuIsClosed ? faBars : faTimes} size="lg" />
      </button>

      {!menuIsClosed && (
        <div className="cst-mobile-menu">
          <div className="cst-mobile-menu-content">
            {INTERNAL_LINKS.map((link: InternalLink) => (
              <Link
                key={link.id}
                to={link.to}
                className="cst-mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
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
