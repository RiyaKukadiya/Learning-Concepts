import React from "react";

interface FeatureSectionProps {
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
  direction?: "left" | "right";
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  image,
  items,
  direction = "left",
}) => {
  const sectionClasses =
    direction === "right" ? "md:flex-row-reverse" : "";

  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-5 relative ${sectionClasses}`}
    //   id={slugify(title)}
    >
      {/* Left Side: Image */}
      <div className="relative w-full md:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg z-0"
          style={{
            backgroundImage: `url('/img/bg/gradient-bg/featureBG.svg')`,
          }}
        ></div>

        <div className="relative w-full h-auto rounded-lg shadow-md p-3 z-10">
          <CustomImage
            image={image}
            altText={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 z-10 flex flex-col space-y-2">
        <h2 className="text-[#f4f4f5] font-inter font-semibold text-xl md:text-2xl lg:text-4xl">
          {title}
        </h2>
        {items?.length > 0 && (
          <div className="flex flex-col space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <h3 className="font-inter font-semibold text-sm md:text-base lg:text-lg text-white">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
