import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogFilters from '../../components/blogFilters/blogFilters';
import BlogPostCard from '../../components/blogPostCard/blogPostCard';
import Pagination from '../../components/pagination/pagination';
import { BLOG_POSTS } from './blog-posts.fixture';
import {
  BLOG_CATEGORIES,
  CATEGORY_PARAM,
  PAGE_PARAM,
  POSTS_PER_PAGE,
} from './blog.config';
import { BlogCategory } from './blog.types';
import { sortByNewest } from './blog.utils';
import './blog.css';

const isBlogCategory = (value: string | null): value is BlogCategory =>
  value !== null && value in BLOG_CATEGORIES;

function Blog() {
  const [searchParams] = useSearchParams();
  const listRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const categoryParam = searchParams.get(CATEGORY_PARAM);
  const category = isBlogCategory(categoryParam) ? categoryParam : null;

  const posts = sortByNewest(BLOG_POSTS).filter(
    (post) => category === null || post.categories.includes(category),
  );
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const requestedPage = Number(searchParams.get(PAGE_PARAM)) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const pagePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const getHref = (nextCategory: BlogCategory | null, page = 1) => {
    const params = new URLSearchParams();
    if (nextCategory) params.set(CATEGORY_PARAM, nextCategory);
    if (page > 1) params.set(PAGE_PARAM, String(page));
    const query = params.toString();
    return query ? `?${query}` : '/blog';
  };

  // Bring the list into view when the filter or the page changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({ block: 'start' });
  }, [category, currentPage]);

  return (
    <div className="cst-container cst-blog">
      <section className="cst-blog-hero">
        <h1 className="cst-blog-title">
          Blog<em className="cst-accent-word">.</em>
        </h1>
        <p className="cst-blog-intro">
          Things that happened to me, thoughts on the tech world and new
          projects I am working on.
        </p>
      </section>

      <BlogFilters active={category} getHref={(next) => getHref(next)} />

      <div ref={listRef} className="cst-blog-list">
        {pagePosts.length === 0 ? (
          <p className="cst-blog-empty">No posts in this category yet.</p>
        ) : (
          pagePosts.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              featured={currentPage === 1 && index === 0}
            />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          getHref={(page) => getHref(category, page)}
        />
      )}
    </div>
  );
}

export default Blog;
