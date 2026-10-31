import {
  EXTERNAL_LINKS,
  ExternalLink,
  INTERNAL_LINKS,
  InternalLink,
} from './navbar.config.ts';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesktopNavbar = () => {
  return (
    <div className="cst-desktop-links">
      {INTERNAL_LINKS.map((link: InternalLink) => (
        <NavLink
          key={link.id}
          to={link.to}
          end={link.to === '/'}
          className="cst-nav-link cst-underline-link"
        >
          {link.label}
        </NavLink>
      ))}
      {EXTERNAL_LINKS.map((link: ExternalLink) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cst-nav-link cst-color-change-link"
          aria-label={link.label}
        >
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </a>
      ))}
    </div>
  );
};

export default DesktopNavbar;
