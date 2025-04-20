import Pill, { PillProps } from './pill.component';

interface PillsContainerProps {
  items: PillProps[];
}

function PillsContainer({ items }: PillsContainerProps) {
  return (
    <>
      {items.map((item, index) => (
        <div className="col-4" key={index}>
          <Pill
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}
    </>
  );
}

export default PillsContainer;
