"use client";
import React from "react";

type Hook = {
  name: string;
  description: string;
  example: string;
};

type HookCardsProps = {
  hooks: Hook[];
};

const HookCards: React.FC<HookCardsProps> = ({ hooks }) => (
  <div className="grid grid-cols-2 gap-6 w-full">
    {hooks.map((hook, idx) => (
      <div
        key={hook.name}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up text-center"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          {hook.name}
        </h2>
        <p className="mb-2 text-gray-800 dark:text-gray-200">
          {hook.description}
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 rounded p-2 text-sm overflow-x-auto">
          <code>{hook.example}</code>
        </pre>
      </div>
    ))}
  </div>
);

export default HookCards;
