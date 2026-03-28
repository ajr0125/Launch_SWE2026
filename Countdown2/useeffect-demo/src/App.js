import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [log, setLog] = useState([]);

  // Run once when component mounts
  useEffect(() => {
    setLog(prev => [...prev, "Component mounted"]);
    return () => setLog(prev => [...prev, "Component unmounting"]);
  }, []);

  // Run whenever count changes
  useEffect(() => {
    setLog(prev => [...prev, `Count changed: ${count}`]);
  }, [count]);

  // Run whenver count or toggle changes
  useEffect(() => {
    setLog(prev => [...prev, `Count or toggle changed: ${count}, ${toggle}`]);
  }, [count, toggle]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Toggle: {toggle ? "ON" : "OFF"}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      <h2>Logs:</h2>
      <div style={{ whiteSpace: "pre-line", border: "1px solid black", padding: "10px", height: "200px", overflowY: "scroll" }}>
        {log.join("\n")}
      </div>
    </div>
  );
}

export default App;