import { Link } from 'react-router-dom';
import { BLOG_CATEGORIES } from '../../pages/blog/blog.config';
import { BlogCategory } from '../../pages/blog/blog.types';
import './blogFilters.css';

interface BlogFiltersProps {
  active: BlogCategory | null;
  getHref: (category: BlogCategory | null) => string;
}

const FILTERS = Object.entries(BLOG_CATEGORIES) as [
  BlogCategory,
  (typeof BLOG_CATEGORIES)[BlogCategory],
][];

function BlogFilters({ active, getHref }: BlogFiltersProps) {
  return (
    <nav className="cst-blog-filters" aria-label="Filter posts by category">
      <Link
        to={getHref(null)}
        className="cst-blog-chip"
        aria-current={active === null ? 'true' : undefined}
      >
        All
      </Link>
      {FILTERS.map(([category, { filter }]) => (
        <Link
          key={category}
          to={getHref(category)}
          className="cst-blog-chip"
          aria-current={active === category ? 'true' : undefined}
        >
          {filter}
        </Link>
      ))}
    </nav>
  );
}

export default BlogFilters;
