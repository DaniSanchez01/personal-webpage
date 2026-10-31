import { BLOG_AUTHOR } from '../../pages/blog/blog.config';
import './blogAuthor.css';

interface BlogAuthorProps {
  /** Compact (mobile) variant: small photo with a line of details instead of the role. */
  details?: string;
}

function BlogAuthor({ details }: BlogAuthorProps) {
  const compact = details !== undefined;

  return (
    <div
      className={`cst-blog-author${compact ? ' cst-blog-author-compact' : ''}`}
    >
      <img
        src={BLOG_AUTHOR.photo}
        alt={BLOG_AUTHOR.name}
        className="cst-blog-author-photo"
      />
      <div>
        <p className="cst-blog-author-name">{BLOG_AUTHOR.name}</p>
        <p className="cst-blog-author-details">
          {compact ? details : BLOG_AUTHOR.role}
        </p>
      </div>
    </div>
  );
}

export default BlogAuthor;
