"use client";
import React from "react";
import reacthook from "../content/reacthook.json";
import UseStateLiveExample from "../../components/UseStateLiveExample";
import UseEffectLiveExample from "../../components/UseEffectLiveExample";
import UseContextLiveExample from "../../components/UseContextLiveExample";
import UseRefLiveExample from "../../components/UseRefLiveExample";
import UseMemoLiveExample from "../../components/UseMemoLiveExample";
import UseCallbackLiveExample from "../../components/UseCallbackLiveExample";
import HookCards from "../../components/HookCards";

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
    <div className="container mx-auto min-h-screen p-8 flex flex-col items-center animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {data.description}
      </p>
      <HookCards hooks={data.hooks} />
      {/* Live Example Section */}
      <section className="w-full mt-12 animate-slide-up">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Hooks Examples
        </h2>
         <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
      Here are the examples of the usage of react-hooks
      </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <UseStateLiveExample />
          <UseEffectLiveExample />
          <UseContextLiveExample />
          <UseRefLiveExample />
          <UseMemoLiveExample />
          <UseCallbackLiveExample /> 
        </div>
      </section>
    </div>
  );
}

// Add some simple fade-in and slide-up animations via Tailwind CSS
// Add the following to your globals.css if not present:
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// .animate-slide-up { animation: slideUp 0.7s cubic-bezier(.39,.575,.565,1) both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
