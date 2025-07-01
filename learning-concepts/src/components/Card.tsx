"use client";
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  heading: {
    title: string;
    description: string;
  };
  featureList: { title: string }[];
  featureImage?: string;
}

const Card: React.FC<CardProps> = ({ heading, featureList }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg  border border-black p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-2">{heading?.title}</h2>
      <p className="mb-4 text-gray-700">{heading?.description}</p>
      <ul className="flex flex-col gap-3">
        {featureList?.map((feature, idx) => (
          <li key={idx} style={{ opacity: 1, transform: 'none' }} className={styles.feature}>
            • {feature.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
