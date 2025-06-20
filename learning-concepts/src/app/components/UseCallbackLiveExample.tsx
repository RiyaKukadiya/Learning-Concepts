"use client";
import React, { useCallback, useState } from "react";

const UseCallbackLiveExample = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(c => c + 1), []);
  return (
    <div className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useCallback Live Example</span>
      <button
        className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 transition mb-2"
        onClick={increment}
      >
        Increment
      </button>
      <span className="text-xl mb-2">Count: {count}</span>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Increment is memoized with <code>useCallback</code>.</p>
    </div>
  );
};

export default UseCallbackLiveExample;
