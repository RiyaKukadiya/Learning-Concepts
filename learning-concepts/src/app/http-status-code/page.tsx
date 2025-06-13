"use client";
import React from "react";
import { motion } from "framer-motion";
import statusCodesData from "../content/statuscode.json";

interface StatusCode {
  code: number;
  label: string;
  description: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  visible: {
    x: 0, opacity: 1, transition: {
      duration: 0.6, // smooth duration
      ease: "easeOut", // smooth easing
    },
  },
  hidden: { x: -50, opacity: 0 }, // less harsh slide
};

const HttpStatusCodePage: React.FC = () => {
  const statusCodes = statusCodesData as StatusCode[];

  return (
    <div className="mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">HTTP Status Codes</h1>
      <motion.ul
        className="flex flex-col justify-center items-start gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statusCodes.map((item) => (
          <motion.li
            key={item.code}
            className="p-2 border border-black bg-white/20 w-full"
            variants={itemVariants}
          >
            <span className="font-semibold">
              {item.code} {item.label}:
            </span>{" "}
            {item.description}
          </motion.li>
        ))}
      </motion.ul>

    </div>
  );
};

export default HttpStatusCodePage;
