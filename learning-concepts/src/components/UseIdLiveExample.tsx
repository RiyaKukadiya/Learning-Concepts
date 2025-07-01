import React, { useId } from "react";

const UseIdLiveExample = () => {
  const id = useId();
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useId Example</h3>
      <label htmlFor={id}>Label with useId:</label>
      <input id={id} className="border p-2 rounded ml-2" />
    </div>
  );
};

export default UseIdLiveExample;
