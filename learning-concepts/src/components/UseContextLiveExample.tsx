"use client";
import React, { useContext, createContext } from "react";

const DemoContext = createContext<string>("Hello Context!");

const UseContextLiveExample = () => {
  return (
    <DemoContext.Provider value="Hello from useContext!">
      <InnerComponent />
    </DemoContext.Provider>
  );
};

const InnerComponent = () => {
  const value = useContext(DemoContext);
  return (
    <div className="flex flex-col items-center p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-md animate-fade-in">
      <span className="text-lg font-semibold mb-2">useContext Live Example</span>
      <span className="text-xl mb-2">{value}</span>
      <p className="text-gray-700 dark:text-gray-200 text-sm">This value is provided by React <code>Context</code>.</p>
    </div>
  );
};

export default UseContextLiveExample;
