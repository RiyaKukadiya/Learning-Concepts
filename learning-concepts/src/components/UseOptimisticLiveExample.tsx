import React, { useOptimistic, useState } from "react";

const UseOptimisticLiveExample = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMsg: string) => [...state, newMsg]);
  const [input, setInput] = useState("");

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useOptimistic Example (React 19)</h3>
      <input className="border p-2 rounded" value={input} onChange={e => setInput(e.target.value)} />
      <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => {
        addOptimisticMessage(input);
        setTimeout(() => setMessages(msgs => [...msgs, input]), 1000);
        setInput("");
      }}>Send</button>
      <ul className="mt-2">
        {optimisticMessages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div>
  );
};

export default UseOptimisticLiveExample;
