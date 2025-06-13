"use client";
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  features: string[];
}

const Card: React.FC<CardProps> = ({ title, description, features }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg  border border-black p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="flex flex-col gap-3">
        {features.map((feature, idx) => (
          <li key={idx} style={{ opacity: 1, transform: 'none' }} className={styles.feature}>
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
