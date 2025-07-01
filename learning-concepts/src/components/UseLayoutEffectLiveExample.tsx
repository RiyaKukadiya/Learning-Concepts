import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffectLiveExample = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div ref={divRef} className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useLayoutEffect Example</h3>
      <p>Div width: {width}px</p>
    </div>
  );
};

export default UseLayoutEffectLiveExample;
