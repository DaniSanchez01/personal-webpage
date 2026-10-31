import { BlogContentBlock } from '../../pages/blog/blog.types';
import './blogContent.css';

interface BlogContentProps {
  blocks: BlogContentBlock[];
}

const renderBlock = (block: BlogContentBlock, key: number) => {
  switch (block.type) {
    case 'paragraph':
      return <p key={key}>{block.text}</p>;
    case 'heading':
      return <h2 key={key}>{block.text}</h2>;
    case 'list':
      return (
        <ul key={key}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote key={key} className="cst-blog-content-quote">
          {block.text}
        </blockquote>
      );
    case 'code':
      return (
        <pre key={key}>
          <code
            className={
              block.language ? `language-${block.language}` : undefined
            }
          >
            {block.code}
          </code>
        </pre>
      );
    case 'image':
      return (
        <figure key={key} className="cst-blog-content-figure">
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
};

/** Renders the body of a post. The content is static, so indexes are stable keys. */
function BlogContent({ blocks }: BlogContentProps) {
  return <div className="cst-blog-content">{blocks.map(renderBlock)}</div>;
}

export default BlogContent;
