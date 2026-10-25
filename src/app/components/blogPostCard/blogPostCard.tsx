import { Link } from 'react-router-dom';
import { BLOG_CATEGORIES } from '../../pages/blog/blog.config';
import { BlogPost } from '../../pages/blog/blog.types';
import { formatPostDate } from '../../pages/blog/blog.utils';
import './blogPostCard.css';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const { slug, title, excerpt, publishedAt, readTimeMinutes, categories } =
    post;

  return (
    <Link
      to={`/blog/${slug}`}
      className={`cst-blog-card${featured ? ' cst-blog-card-featured' : ''}`}
    >
      {post.cover ? (
        <img
          src={post.cover.src}
          alt={post.cover.alt}
          className="cst-blog-card-cover"
        />
      ) : (
        <div
          className="cst-blog-card-cover cst-blog-card-cover-default"
          role="img"
          aria-label="Default cover"
        >
          {title.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="cst-blog-card-body">
        <div>
          {categories.map((category) => (
            <span key={category} className="cst-blog-tag">
              {BLOG_CATEGORIES[category].tag}
            </span>
          ))}
        </div>
        <p className="cst-blog-card-meta">
          {formatPostDate(publishedAt)} · {readTimeMinutes} min read
        </p>
        <h3 className="cst-blog-card-title">{title}</h3>
        <p className="cst-blog-card-excerpt">{excerpt}</p>
        <span className="cst-blog-card-read">
          Read <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default BlogPostCard;
