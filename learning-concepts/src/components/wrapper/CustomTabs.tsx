"use client";

import { useEffect, useRef, useState } from "react";
import CustomInterChange from "@/components/CustomInterchange";
import { slugify } from "@/utils/slugify";

interface ItemType {
  title: string;
  image: string;
  items: any[];
}

interface TabSectionProps {
  items: ItemType[];
}

const TabSection: React.FC<TabSectionProps> = ({ items }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabsContainer = useRef<HTMLDivElement | null>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const checkScrollShadows = () => {
    const container = tabsContainer.current;
    if (container) {
      setShowLeftShadow(container.scrollLeft > 0);
      setShowRightShadow(
        container.scrollWidth > container.clientWidth &&
          container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  const handleTabClick = (index: number, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    if (index === activeTabIndex) return;

    setActiveTabIndex(index);
    requestAnimationFrame(() => {
      const tabElement = tabsContainer.current?.children[index] as HTMLElement;
      const container = tabsContainer.current;
      if (container && tabElement) {
        container.scrollIntoView({
          left:
            tabElement.offsetLeft -
            container.offsetWidth / 2 +
            tabElement.offsetWidth / 2,
          behavior: "smooth",
        });
      }
      // Scroll content into view with offset for sticky header/tabs
      const contentEl = contentRefs.current[index];
      if (contentEl) {
        const yOffset = -80; // Adjust this offset to match your sticky header/tabs height
        const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      checkScrollShadows();
    });
  };

  const setupIntersectionObserver = () => {
    const root = document.getElementById("tabScrolling");

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleItems = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleItems.length) {
          const firstVisibleIndex = contentRefs.current.findIndex(
            (el) => el === visibleItems[0].target
          );
          if (
            firstVisibleIndex !== -1 &&
            firstVisibleIndex !== activeTabIndex
          ) {
            requestAnimationFrame(() => {
              setActiveTabIndex(firstVisibleIndex);
            });
          }
        }
      },
      {
        root: root,
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0.4],
      }
    );

    contentRefs.current.forEach((el) => {
      if (el) observer.current?.observe(el);
    });
  };

  useEffect(() => {
    checkScrollShadows();
    setupIntersectionObserver();
    return () => observer.current?.disconnect();
  }, []);

  return (
    <section id="tabScrolling">
      <div className="sticky-tabs flex justify-center backdrop-blur-3xl">
        <div className="relative mx-auto flex flex-row bg-black/10">
          {showLeftShadow && <div className="left-shadow" />}
          <div
            ref={tabsContainer}
            onScroll={checkScrollShadows}
            className="flex overflow-x-auto gap-5 lg:gap-6 scroll-smooth hide-scrollbar"
          >
            {items.map((tab, index) => {
              const slug = slugify(tab.title);
              const isActive = activeTabIndex === index;
              return (
                <div
                  key={slug}
                  onClick={(e) => handleTabClick(index, e)}
                  className={`relative cursor-pointer text-sm md:text-base lg:text-xl font-medium whitespace-nowrap py-2 ${
                    isActive
                      ? "text-black"
                      : "text-gray-800 hover:text-gray-600"
                  }`}
                >
                  <a href={`#${slug}`}>{tab.title}</a>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-text transition-all" />
                  )}
                </div>
              );
            })}
          </div>
          {showRightShadow && <div className="right-shadow" />}
        </div>
      </div>

      <div>
        {items.map((tab, index) => (
          <div
            key={slugify(tab.title)}
            ref={(el) => (contentRefs.current[index] = el)}
            className="mb-8 md:mb-0"
            id={slugify(tab.title)}
          >
            <CustomInterChange
              key={slugify(tab.title)}
              items={tab.items}
              title={tab.title}
              image={tab.image?.[0]}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .left-shadow {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 30px;
          background: linear-gradient(to right, rgb(12, 12, 12) 25%, transparent);
          pointer-events: none;
          z-index: 5;
        }

        .right-shadow {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 30px;
          background: linear-gradient(to left, rgb(12, 12, 12) 25%, transparent);
          pointer-events: none;
          z-index: 5;
        }

        .sticky-tabs {
          position: sticky;
          top: 60px;
          z-index: 30;
          width: 100%;
        }

        @media (max-width: 768px) {
          .sticky-tabs {
            top: 58px;
          }
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .bg-gradient-text {
          background: linear-gradient(to left, var(--blue-light), var(--blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default TabSection;
