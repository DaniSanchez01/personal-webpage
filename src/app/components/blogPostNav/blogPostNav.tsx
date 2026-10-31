import { Link } from 'react-router-dom';
import { BlogPost } from '../../pages/blog/blog.types';
import './blogPostNav.css';

interface BlogPostNavProps {
  previous?: BlogPost;
  next?: BlogPost;
}

function BlogPostNav({ previous, next }: BlogPostNavProps) {
  if (!previous && !next) return null;

  return (
    <nav className="cst-blog-post-nav" aria-label="More posts">
      {previous && (
        <Link
          to={`/blog/${previous.slug}`}
          className="cst-blog-post-nav-link cst-blog-post-nav-previous"
        >
          <span className="cst-blog-post-nav-label">
            <span aria-hidden="true">←</span> Previous
          </span>
          <span className="cst-blog-post-nav-title">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link
          to={`/blog/${next.slug}`}
          className="cst-blog-post-nav-link cst-blog-post-nav-next"
        >
          <span className="cst-blog-post-nav-label">
            Next <span aria-hidden="true">→</span>
          </span>
          <span className="cst-blog-post-nav-title">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}

export default BlogPostNav;
