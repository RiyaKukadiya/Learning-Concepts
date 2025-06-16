"use client";
import React from "react";
import reacthook from "../content/reacthook.json";

type ReactHookData = {
  title: string;
  description: string;
  hooks: {
    name: string;
    description: string;
    example: string;
  }[];
};

const data = reacthook as ReactHookData;

export default function ReactHookPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {data.description}
      </p>
      <div className="grid gap-6 w-full max-w-2xl">
        {data.hooks.map((hook, idx) => (
          <div
            key={hook.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up"
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
    </div>
  );
}

// Add some simple fade-in and slide-up animations via Tailwind CSS
// Add the following to your globals.css if not present:
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// .animate-slide-up { animation: slideUp 0.7s cubic-bezier(.39,.575,.565,1) both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
