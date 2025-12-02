import React, { useState } from "react";

const App = () => {
  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [result, setResult] = useState(null);

  const startGame = () => {
    setActive(true);
    setResult(null);
    setStartTime(Date.now());
  };

  const handleClick = () => {
    const endTime = Date.now();
    setResult(endTime - startTime);
    setActive(false);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
      
      <h2>⚡ Reaction Game</h2>

      <button onClick={startGame}>Start</button>

      {active && (
        <div 
          onClick={handleClick}
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            cursor: "pointer"
          }}
        ></div>
      )}

      {result && <h3>Reaction Time: {result} ms</h3>}
    </div>
  );
};

export default App;
