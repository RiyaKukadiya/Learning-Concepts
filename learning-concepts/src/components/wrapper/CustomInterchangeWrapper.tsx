import React from "react";
import CustomInterChange from "@/components/CustomInterchange";

interface InterchangeWrapperProps {
  heading: {
    title: string;
    description: string;
  };
  items: {
    title: string;
    image: {
      url: string;
      alt?: string;
      [key: string]: any;
    };
    items: {
      title: string;
      description: string;
    }[];
  }[];
}

const InterchangeWrapper: React.FC<InterchangeWrapperProps> = ({
  heading,
  items,
}) => {
  return (
    <div className="container mx-auto p-6 mt-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">{heading.title}</h1>
        <p className="text-lg text-center mb-8">{heading.description}</p>
      </div>
      {items.map((item, index) => (
        <div className="mb-8 md:mb-0" key={index}>
          <CustomInterChange
            items={item.items}
            title={item.title}
            image={item.image}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        </div>
      ))}
    </div>
  );
};

export default InterchangeWrapper;
