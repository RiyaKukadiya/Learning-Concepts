"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import styles from "./Card.module.css";

interface CardListProps {
  items: {
    heading: {
      title: string;
      description: string;
    };
    featureList: { title: string }[];
    featureImage?: string;
  }[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
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
      </div>

      {items.map((card, idx) => (
        <div key={idx} className={styles.card}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
