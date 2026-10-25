import { ReactNode } from 'react';
import './sectionSeparator.css';

interface Props {
  children: ReactNode;
}

const SectionSeparator = ({ children }: Props) => {
  return (
    <div className="cst-section-separator">
      <h2 className="cst-section-title">{children}</h2>
    </div>
  );
};

export default SectionSeparator;
