import React, { useState } from 'react'

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
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      justifyContent: "center"
    }}>

      <h2>⚡ Reaction Time Game</h2>

      <button
        onClick={startGame}
        style={{
          padding: "5px",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        Start Game
      </button>

      {active && (
        <div
          onClick={handleClick}
          style={{
            backgroundColor: "red",
            height: "200px",
            width: "200px",
            cursor: "pointer"
          }}
        ></div>
      )}

      {/* Show result OUTSIDE the box */}
      {result !== null && <h3>Your reaction time: {result} ms</h3>}

    </div>
  );
};

export default App;
