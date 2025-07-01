import React, { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerWidth;
}

const UseSyncExternalStoreLiveExample = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useSyncExternalStore Example</h3>
      <p>Window width: {width}px</p>
    </div>
  );
};

export default UseSyncExternalStoreLiveExample;
