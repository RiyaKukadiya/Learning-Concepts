import React, { useState, useDeferredValue } from "react";

const UseDeferredValueLiveExample = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useDeferredValue Example</h3>
      <input className="border p-2 rounded" value={input} onChange={e => setInput(e.target.value)} />
      <p className="mt-2">Deferred value: {deferredInput}</p>
    </div>
  );
};

export default UseDeferredValueLiveExample;
