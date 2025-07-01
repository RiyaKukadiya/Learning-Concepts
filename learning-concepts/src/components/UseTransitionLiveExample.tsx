import React, { useState, useTransition } from "react";

const UseTransitionLiveExample = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 2000; i++) {
        l.push(e.target.value + i);
      }
      setList(l);
    });
  };

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useTransition Example</h3>
      <input className="border p-2 rounded" value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <div className="h-24 overflow-auto mt-2">
        {list.slice(0, 20).map((item, i) => <div key={i}>{item}</div>)}
      </div>
    </div>
  );
};

export default UseTransitionLiveExample;
