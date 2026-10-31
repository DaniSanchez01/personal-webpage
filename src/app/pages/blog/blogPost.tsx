import { Link, useParams } from 'react-router-dom';
import BlogContent from '../../components/blogContent/blogContent';
import { BLOG_POSTS } from './blog-posts.fixture';
import { BLOG_CATEGORIES } from './blog.config';
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

  return (
    <article className="cst-blog-post">
      <header className="cst-blog-post-hero">
        <div className="cst-container cst-blog-post-hero-content">
          <Link to="/blog" className="cst-blog-post-back">
            <span aria-hidden="true">←</span> All posts
          </Link>
          <div className="cst-blog-post-tags">
            {post.categories.map((category) => (
              <span key={category} className="cst-blog-tag">
                {BLOG_CATEGORIES[category].tag}
              </span>
            ))}
          </div>
          <h1 className="cst-blog-post-title">{post.title}</h1>
        </div>
      </header>

      <div className="cst-container cst-blog-post-body">
        <div className="cst-blog-post-main">
          <BlogContent blocks={post.content} />
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
