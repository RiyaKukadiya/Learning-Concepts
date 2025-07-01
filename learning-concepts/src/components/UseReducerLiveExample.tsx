import React, { useReducer } from "react";

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const UseReducerLiveExample = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useReducer Example</h3>
      <p className="mb-2">Count: {count}</p>
      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => dispatch({ type: "increment" })}>+
      </button>
      <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => dispatch({ type: "decrement" })}>-
      </button>
    </div>
  );
};

export default UseReducerLiveExample;
