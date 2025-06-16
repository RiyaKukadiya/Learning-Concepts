"use client";
import React from "react";
import dnsData from "../content/dns.json";

// New types for optimized structure
interface DNSSection {
  heading: string;
  content?: string;
  items?: { name: string; description: string; example?: string }[];
  steps?: string[];
}

interface DNSData {
  title: string;
  sections: DNSSection[];
}

const data = dnsData as DNSData;

export default function DNSPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-center">{data.title}</h1>
      <div className="w-full max-w-3xl space-y-10">
        {data.sections.map((section) => (
          <section key={section.heading} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">{section.heading}</h2>
            {section.content && <p className="mb-4 text-gray-700 dark:text-gray-300">{section.content}</p>}
            {section.steps && (
              <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-800 dark:text-gray-200">
                {section.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            )}
            {section.items && (
              <div className="grid gap-4">
                {section.items.map((item, i) => (
                  <div key={item.name + i} className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50 dark:bg-gray-900 rounded">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">{item.name}</h3>
                    <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                    {item.example && (
                      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm mt-1 overflow-x-auto">
                        <code>{item.example}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

// for globals.css
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
