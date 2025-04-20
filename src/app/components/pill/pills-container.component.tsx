import Pill, { PillProps } from './pill.component';

interface PillsContainerProps {
  items: PillProps[];
}

function PillsContainer({ items }: PillsContainerProps) {
  return (
    <>
      {items.map((item, index) => (
        <div className="col-auto col-md-4 mb-3" key={index}>
          <Pill
            title={item.title}
            description={item.description}
            path={item.path}
          />
        </div>
      ))}
    </>
  );
}

export default PillsContainer;
