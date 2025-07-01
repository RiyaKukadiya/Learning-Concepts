import React, { useActionState } from "react";

function reducer(state: number, action: number) {
  return state + action;
}

const UseActionStateLiveExample = () => {
  const [state, dispatch] = useActionState(reducer, 0);
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useActionState Example (React 19)</h3>
      <p>Value: {state}</p>
      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => dispatch(1)}>+1</button>
      <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => dispatch(-1)}>-1</button>
    </div>
  );
};

export default UseActionStateLiveExample;
