import { Link, useParams } from 'react-router-dom';
import BlogAuthor from '../../components/blogAuthor/blogAuthor';
import BlogContent from '../../components/blogContent/blogContent';
import BlogShare from '../../components/blogShare/blogShare';
import { BLOG_POSTS } from './blog-posts.fixture';
import { BLOG_CATEGORIES } from './blog.config';
import { formatPostDate } from './blog.utils';
import './blogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <div className="cst-container cst-blog-post-missing">
        <h1 className="cst-blog-post-missing-title">Post not found</h1>
        <p className="cst-blog-post-missing-text">
          This post does not exist or has been moved.
        </p>
        <Link to="/blog" className="cst-blog-post-back">
          <span aria-hidden="true">←</span> All posts
        </Link>
      </div>
    );
  }

  const publishedAt = formatPostDate(post.publishedAt);
  const categoryTags = post.categories.map(
    (category) => BLOG_CATEGORIES[category].tag,
  );

  return (
    <article className="cst-blog-post">
      <header className="cst-blog-post-hero">
        <div className="cst-container cst-blog-post-hero-content">
          <Link to="/blog" className="cst-blog-post-back">
            <span aria-hidden="true">←</span> All posts
          </Link>
          <div className="cst-blog-post-tags">
            {categoryTags.map((tag) => (
              <span key={tag} className="cst-blog-tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="cst-blog-post-title">{post.title}</h1>
        </div>
      </header>

      <div className="cst-container cst-blog-post-body">
        {/* Desktop only: below 1024px the same info lives inside the main column */}
        <aside className="cst-blog-post-aside">
          <BlogAuthor />
          <dl className="cst-blog-post-meta">
            <dt>Published</dt>
            <dd>{publishedAt}</dd>
            <dt>Read time</dt>
            <dd>{post.readTimeMinutes} min</dd>
            <dt>Categories</dt>
            <dd>{categoryTags.join(' · ')}</dd>
          </dl>
          <BlogShare title={post.title} />
        </aside>

        <div className="cst-blog-post-main">
          <div className="cst-blog-post-cover-frame">
            {post.cover ? (
              <img
                src={post.cover.src}
                alt={post.cover.alt}
                className="cst-blog-post-cover"
              />
            ) : (
              <div
                className="cst-blog-post-cover cst-blog-post-cover-default"
                role="img"
                aria-label="Default cover"
              >
                {post.title.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="cst-blog-post-compact-only cst-blog-post-author">
            <BlogAuthor
              details={`${publishedAt} · ${post.readTimeMinutes} min read`}
            />
          </div>
          <p className="cst-blog-post-lead">{post.excerpt}</p>
          <BlogContent blocks={post.content} />
          <div className="cst-blog-post-compact-only cst-blog-post-share">
            <BlogShare title={post.title} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
