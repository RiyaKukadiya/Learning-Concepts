"use client";
import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import canonicalDataJson from './canonicalData.json';
// @ts-expect-error: PartialPrerender is experimental
import { PartialPrerender } from 'next/ppr';

const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 80 } }
};

export default function CanonicalPage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };
  const handleSectionClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8"
    >
      <PartialPrerender>
        <motion.h1
          className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-300"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          {canonicalDataJson.title}
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-gray-700 dark:text-gray-200 text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {canonicalDataJson.description}
        </motion.p>
      </PartialPrerender>
      <Suspense fallback={<div>Loading canonical sections...</div>}>
        <PartialPrerender>
          <motion.ul
            className="w-full  space-y-4 mb-8"
            initial="hidden"
            animate="visible"
          >
            {canonicalDataJson.sections.map((section, i) => (
              <motion.li
                key={section.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-lg text-gray-800 dark:text-gray-100 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-800 transition"
                variants={featureVariants}
                ref={setSectionRef(section.id)}
                onClick={() => handleSectionClick(section.id)}
              >
                <span className="font-semibold">{section.title}</span>
                <p>{section.content}</p>
              </motion.li>
            ))}
          </motion.ul>
        </PartialPrerender>
      </Suspense>
    </motion.div>
  );
}
