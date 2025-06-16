"use client";
import React from "react";
import dnsData from "../content/dns.json";

type DNSRecord = {
  name: string;
  description: string;
  example: string;
};

type DNSData = {
  title: string;
  description: string;
  records: DNSRecord[];
};

const data = dnsData as DNSData;

export default function DNSPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">{data.description}</p>
      <div className="grid gap-6 w-full max-w-2xl">
        {data.records.map((record, idx) => (
          <div
            key={record.name}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-${idx % 2 === 0 ? "left" : "right"}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-600">{record.name}</h2>
            <p className="mb-2 text-gray-800 dark:text-gray-200">{record.description}</p>
            <pre className="bg-gray-100 dark:bg-gray-900 rounded p-2 text-sm overflow-x-auto">
              <code>{record.example}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

// for globals.css
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// .animate-slide-left { animation: slideLeft 0.7s cubic-bezier(.39,.575,.565,1) both; }
// .animate-slide-right { animation: slideRight 0.7s cubic-bezier(.39,.575,.565,1) both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideLeft { from { transform: translateX(-40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes slideRight { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
