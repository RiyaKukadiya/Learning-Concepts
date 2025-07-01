"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import Card from "./Card";

const cardsData = [
	{   
        heading:{
		title: "How to make SVG image clickable?",
		description: "",
        },
		featureList: [
			"Go to the SVG code file",
		 	"In the <svg> tag, add this line: xmlns:xlink=\"http://www.w3.org/1999/xlink\"  ",
			"Find the path for make it clikcbale, and wrap it into the <a> tag."
		],
	},
	 {
    heading: {
      title: "Card 2",
      description: "Description for card 2."
    },
    featureList: ["Feature A", "Feature B", "Feature C"]
  },
  {
    heading: {
      title: "Card 3",
      description: "Description for card 3."
    },
    featureList: ["Feature X", "Feature Y", "Feature Z"]
  },
  {
    heading: {
      title: "Card 4",
      description: "Description for card 4."
    },
    featureList: ["Feature X", "Feature Y", "Feature Z"]
  },
  {
    heading: {
      title: "Card 5",
      description: "Description for card 5."
    },
    featureList: ["Feature X", "Feature Y", "Feature Z"]
  },
  {
    heading: {
      title: "Card 6",
      description: "Description for card 6."
    },
    featureList: ["Feature X", "Feature Y", "Feature Z"]
  },
  {
    heading: {
      title: "Card 7",
      description: "Description for card 7."
    },
    featureList: ["Feature X", "Feature Y", "Feature Z"]
  }
];

const CardList: React.FC = () => {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			cardRefs.current.forEach((el) => {
				if (!el) return;
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight - 100) {
					el.classList.add(styles.slideIn);
				} else {
					el.classList.remove(styles.slideIn);
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="container mx-auto flex flex-col gap-8 w-full overflow-hidden">
			<div className="relative w-full min-h-[3.5rem] flex items-center">
				{/* horizontal infinite scroll */}
				<motion.h1
					className="text-3xl font-bold mb-6 whitespace-nowrap absolute w-full"
					animate={{ x: ["100%", "-100%"] }}
					transition={{
						repeat: Infinity,
						duration: 15,
						ease: "linear",
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua
				</motion.h1>
        {/* <h1 className="text-3xl font-bold mb-6 whitespace-nowrap absolute w-full">
          	Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua
        </h1> */}
			</div>

			{cardsData.map((card, idx) => (
				<div
					key={idx}
					ref={(el) => {
						cardRefs.current[idx] = el;
					}}
					className={styles.card}
				>
					<Card {...card} />
				</div>
			))}
		</div>
	);
};

export default CardList;
