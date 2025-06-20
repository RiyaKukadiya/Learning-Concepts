"use client";
import React, { useRef } from "react";

const UseRefLiveExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useRef Live Example</span>
      <input
        ref={inputRef}
        className="border px-2 py-1 rounded mb-2"
        placeholder="Type something..."
      />
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition mb-2"
        onClick={() => inputRef.current?.focus()}
      >
        Focus Input
      </button>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Click the button to focus the input using <code>useRef</code>.</p>
    </div>
  );
};

export default UseRefLiveExample;
