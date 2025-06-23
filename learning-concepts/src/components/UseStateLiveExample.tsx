"use client";
import React, { useState } from "react";

const UseStateLiveExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useState Live Example</span>
      <div className="flex items-center gap-4 mb-2">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
      </div>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Click + or - to update the count using <code>useState</code>.</p>
    </div>
  );
};

export default UseStateLiveExample;
