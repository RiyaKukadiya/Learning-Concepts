"use client";
import React, { useMemo, useState } from "react";

const UseMemoLiveExample = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += a * b;
    }
    return sum;
  }, [a, b]);
  return (
    <div className="flex flex-col items-center p-4 bg-pink-50 dark:bg-pink-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useMemo Live Example</span>
      <div className="flex gap-2 mb-2">
        <input type="number" value={a} onChange={e => setA(Number(e.target.value))} className="border px-2 py-1 rounded w-16" />
        <input type="number" value={b} onChange={e => setB(Number(e.target.value))} className="border px-2 py-1 rounded w-16" />
      </div>
      <span className="text-xl mb-2">Result: {result}</span>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Heavy calculation is memoized with <code>useMemo</code>.</p>
    </div>
  );
};

export default UseMemoLiveExample;
