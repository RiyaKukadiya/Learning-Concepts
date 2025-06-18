"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import styles from "./Card.module.css";

const cardsData = [
	{
		title: "Card 1",
		description: "Description for card 1.",
		features: ["Feature 1", "Feature 2", "Feature 3"],
	},
	{
		title: "Card 2",
		description: "Description for card 2.",
		features: ["Feature A", "Feature B", "Feature C"],
	},
	{
		title: "Card 3",
		description: "Description for card 3.",
		features: ["Feature X", "Feature Y", "Feature Z"],
	},
	{
		title: "Card 4",
		description: "Description for card 4.",
		features: ["Feature X", "Feature Y", "Feature Z"],
	},
	{
		title: "Card 5",
		description: "Description for card 5.",
		features: ["Feature X", "Feature Y", "Feature Z"],
	},
	{
		title: "Card 6",
		description: "Description for card 6.",
		features: ["Feature X", "Feature Y", "Feature Z"],
	},
	{
		title: "Card 7",
		description: "Description for card 7.",
		features: ["Feature X", "Feature Y", "Feature Z"],
	},
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
