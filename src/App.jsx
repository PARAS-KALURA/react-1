import React, { useState } from 'react'

const App = () => {

  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [result, setResult] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const startGame = () => {
    setActive(true);
    setResult(null);
    setStartTime(Date.now());

    // GENERATE RANDOM POSITION
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 120));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 120));

    setPosition({ top: randomTop, left: randomLeft });
  };

  const handleClick = () => {
    const endTime = Date.now();
    setResult(endTime - startTime);
    setActive(false);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      
      <h2 style={{ textAlign: "center" }}>⚡ Reaction Game</h2>

      <button 
        onClick={startGame} 
        style={{ display: "block", margin: "20px auto", padding: "8px" }}
      >
        Start
      </button>

      {active && (
        <div
          onClick={handleClick}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            height: "101px",
            width: "100px",
            backgroundColor: "red",
            cursor: "pointer",
          }}
        ></div>
      )}

      {result !== null && (
        <h3 style={{ textAlign: "center" }}>
          Your reaction time: {result} ms
        </h3>
      )}
    </div>
  );
};

export default App;
