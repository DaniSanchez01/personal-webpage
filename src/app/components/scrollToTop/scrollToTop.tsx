import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets the scroll on route changes. Query changes (filters, pages) keep it. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // `body` is the scroll container (see App.css), not the window
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
