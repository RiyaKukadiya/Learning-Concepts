import React, { useRef, useImperativeHandle, forwardRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));
  return <input ref={inputRef} className="border p-2 rounded" placeholder="Imperative handle input" />;
});

const UseImperativeHandleLiveExample = () => {
  const ref = useRef<{ focus: () => void }>(null);
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useImperativeHandle Example</h3>
      <FancyInput ref={ref} />
      <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => ref.current?.focus()}>
        Focus Input
      </button>
    </div>
  );
};

export default UseImperativeHandleLiveExample;
