import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from './blog-posts.fixture';
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
      <div className="cst-container">
        <h1>{post.title}</h1>
      </div>
    </article>
  );
}

export default BlogPost;
