"use client";
import React from "react";
import dnsData from "../content/dns.json";
// @ts-expect-error: PartialPrerender is experimental
import { PartialPrerender } from 'next/ppr';

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
      <PartialPrerender>
        <h1 className="text-3xl font-bold mb-6 text-center">{dnsData.title}</h1>
      </PartialPrerender>
      <div className="w-full max-w-3xl space-y-10">
        {dnsData.sections.map((section) => (
          <PartialPrerender key={section.heading}>
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
                {section.heading}
              </h2>
              {section.content && (
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {section.content}
                </p>
              )}
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
                    <div
                      key={item.name + i}
                      className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50 dark:bg-gray-900 rounded"
                    >
                      <strong>{item.name}</strong>: {item.description}
                      {item.example && (
                        <div className="text-xs text-gray-500 mt-1">{item.example}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </PartialPrerender>
        ))}
      </div>
    </div>
  );
}

// for globals.css
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
