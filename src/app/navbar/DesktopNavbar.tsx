import {
  EXTERNAL_LINKS,
  ExternalLink,
  INTERNAL_LINKS,
  InternalLink,
} from './navbar.config.ts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesktopNavbar = () => {
  return (
    <>
      <div className="cst-internal-links">
        {INTERNAL_LINKS.map((link: InternalLink) => (
          <Link
            key={link.id}
            to={link.to}
            className="nav-link cst-nav-link cst-underline-link cst-color-change-link"
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="cst-external-links">
        {EXTERNAL_LINKS.map((link: ExternalLink) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cst-nav-link cst-color-change-link"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} size="lg" />
          </a>
        ))}
      </div>
    </>
  );
};

export default DesktopNavbar;
