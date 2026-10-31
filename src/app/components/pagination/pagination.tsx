import { Link } from 'react-router-dom';
import './pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getHref: (page: number) => string;
}

function Pagination({ currentPage, totalPages, getHref }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav className="cst-pagination" aria-label="Pagination">
      {hasPrevious ? (
        <Link
          to={getHref(currentPage - 1)}
          className="cst-pagination-item"
          aria-label="Previous page"
        >
          ←
        </Link>
      ) : (
        <span
          className="cst-pagination-item cst-pagination-item-disabled"
          aria-hidden="true"
        >
          ←
        </span>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          to={getHref(page)}
          className="cst-pagination-item"
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Link>
      ))}
      {hasNext ? (
        <Link
          to={getHref(currentPage + 1)}
          className="cst-pagination-item"
          aria-label="Next page"
        >
          →
        </Link>
      ) : (
        <span
          className="cst-pagination-item cst-pagination-item-disabled"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </nav>
  );
}

export default Pagination;
