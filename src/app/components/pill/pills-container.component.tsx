import Pill, { PillProps } from './pill.component';

interface PillsContainerProps {
  items: PillProps[];
}

function PillsContainer({ items }: PillsContainerProps) {
  return (
    <div className="cst-pills-container">
      {items.map((item, index) => (
        <Pill
          key={item.path}
          index={index}
          title={item.title}
          description={item.description}
          path={item.path}
        />
      ))}
    </div>
  );
}

export default PillsContainer;
