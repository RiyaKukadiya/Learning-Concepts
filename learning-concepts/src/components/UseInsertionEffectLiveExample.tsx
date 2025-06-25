import React, { useState, useInsertionEffect } from "react";

const UseInsertionEffectLiveExample = () => {
  const [color, setColor] = useState("#f87171");

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `.insertion-effect-demo { background: ${color}; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800 insertion-effect-demo">
      <h3 className="font-bold mb-2">useInsertionEffect Example</h3>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <span className="ml-2">Pick a background color</span>
    </div>
  );
};

export default UseInsertionEffectLiveExample;
