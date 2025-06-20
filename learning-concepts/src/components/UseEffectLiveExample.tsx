"use client";
import React, { useEffect, useState } from "react";

const UseEffectLiveExample = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useEffect Live Example</span>
      <span className="text-2xl font-mono mb-2">{time.toLocaleTimeString()}</span>
      <p className="text-gray-700 dark:text-gray-200 text-sm">This clock updates every second using <code>useEffect</code>.</p>
    </div>
  );
};

export default UseEffectLiveExample;
