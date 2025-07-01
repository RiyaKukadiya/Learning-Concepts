import React, { useState, useDebugValue } from "react";

function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(false);
  useDebugValue(isOnline ? "Online" : "Offline");
  // Simulate status change
  React.useEffect(() => {
    const timeout = setTimeout(() => setIsOnline(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return isOnline;
}

const UseDebugValueLiveExample = () => {
  const isOnline = useFriendStatus();
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h3 className="font-bold mb-2">useDebugValue Example</h3>
      <p>Friend is: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UseDebugValueLiveExample;
