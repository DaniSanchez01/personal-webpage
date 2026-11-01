import { ReactNode } from 'react';
import './offsetFrame.css';

interface OffsetFrameProps {
  children: ReactNode;
  color?: 'accent' | 'ink';
  /** For page-specific spacing or layout. */
  className?: string;
}

/** A solid block peeks out from behind the content, bottom-right. */
function OffsetFrame({
  children,
  color = 'accent',
  className,
}: OffsetFrameProps) {
  return (
    <div
      className={`cst-offset-frame cst-offset-frame-${color}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}

export default OffsetFrame;
