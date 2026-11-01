import { ReactNode } from 'react';
import './tag.css';

interface TagProps {
  children: ReactNode;
  /** Ink is for accent backgrounds, where the accent tag would vanish. */
  variant?: 'accent' | 'ink';
}

function Tag({ children, variant = 'accent' }: TagProps) {
  return <span className={`cst-tag cst-tag-${variant}`}>{children}</span>;
}

export default Tag;
