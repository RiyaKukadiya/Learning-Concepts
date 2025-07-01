import React from "react";
import CardList from "./CardList";

interface SectionData {
  __component: string;
  [key: string]: any;
}

interface CollectionMapperProps {
  data: SectionData[];
}

const componentsMap: Record<string, React.ElementType> = {
  "wrapper-component.card-wrapper": CardList,
  // You can add more component mappings here
};

const getComponentProps = (
  item: SectionData,
  props?: Record<string, unknown>
): Record<string, unknown> => {
  return {
    ...item,
    ...props,
  };
};

const CollectionMapper: React.FC<CollectionMapperProps> = ({
  data,
  ...props
}) => {
  return (
    <div>
      {data?.map((item, index) => {
        const Component = componentsMap[item.__component];
        if (!Component) return null;

        // You can handle conditional props injection here
        const extraProps =
          item.__component === "wrapper-component.card-wrapper"
            ? { items: item.items || [] }
            : {};

        return (
          <Component
            key={index}
            {...getComponentProps(item, props)}
            {...extraProps}
          />
        );
      })}
    </div>
  );
};

export default CollectionMapper;
