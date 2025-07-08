'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function ScrollDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, []);

  // Handlers
  const handleScrollBy = () => {
    window.scrollBy({ top: 200, left: 0, behavior: 'smooth' });
  };

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleScrollIntoView = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 p-6 w-full text-center">
      {/* Buttons */}
      <div className="flex gap-4 sticky top-0 bg-white p-4 shadow-md z-10">
        <button onClick={handleScrollBy} className="px-4 py-2 bg-blue-500 text-white rounded">
          scrollBy
        </button>
        <button onClick={handleScrollTo} className="px-4 py-2 bg-green-500 text-white rounded">
          scrollTo
        </button>
        <button onClick={handleScrollIntoView} className="px-4 py-2 bg-purple-600 text-white rounded">
          scrollIntoView
        </button>
      </div>

      {/* Spacer */}
      <div className="h-[800px] bg-gray-100 flex items-center justify-center text-gray-500">
        Scroll Down ↓
      </div>

      {/* scrollIntoView Target */}
      <div
        ref={sectionRef}
        className="p-10 bg-yellow-300 rounded-lg text-center text-xl font-semibold"
      >
        🎯 I’m the scrollIntoView target!
      </div>

      {/* Spacer */}
      <div className="h-[500px]" />

      {/* IntersectionObserver Target */}
      <div
        ref={observerRef}
        className={`p-10 text-center text-xl font-semibold rounded-lg transition-colors duration-300 ${
          isInView ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        👀 {isInView ? 'Visible in viewport!' : 'Scroll me into view'}
      </div>

      {/* Spacer */}
      <div className="h-[500px]" />
    </div>
  );
}
