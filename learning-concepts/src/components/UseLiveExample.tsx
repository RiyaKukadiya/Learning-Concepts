import React, { use } from "react";

function fetchData() {
  return new Promise<string>(resolve => setTimeout(() => resolve("Data loaded!"), 1000));
}

const UseLiveExample = () => {
  // This will suspend until the promise resolves (React 19)
  const data = use(fetchData());
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">use Example (React 19)</h3>
      <p>{data}</p>
    </div>
  );
};

export default UseLiveExample;
