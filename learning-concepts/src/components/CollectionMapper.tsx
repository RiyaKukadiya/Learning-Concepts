import CardList from "./CardList";

const componentMap: Record<string, React.ComponentType<any>> = {
  "section-cards.card-list": CardList,
};

export function getComponentForKey(key: string): React.ComponentType<any> | undefined {
  return componentMap[key];
}

export function getComponentProps(item: any): any {
  // Add custom prop logic per component key if needed
  // Example:
  // if (item.__component === "section-cards.card-list") {
  //   return { ...item, customProp: value };
  // }
  return item;
}

interface CollectionMapperProps {
  data: any[];
}

const CollectionMapper: React.FC<CollectionMapperProps> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        const Comp = getComponentForKey(item.__component);
        if (!Comp) return null;
        return <Comp key={idx} {...getComponentProps(item)} />;
      })}
    </>
  );
};

export default CollectionMapper;
