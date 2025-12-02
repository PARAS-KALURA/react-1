import React, { useState } from 'react'


const App = () => {

const [active, setActive] = useState(false);
const [startTime, setStartTime] = useState(null);
const [result, setResult] = useState(null);

const startGame = () => {
  setActive(true);
  setResult(null)
  setStartTime(Date.now());
}

const handleClick = () => {
  const endTime = Date.now();
  setResult(endTime - startTime);
  setActive(false);
}

  return (
    <div
    style={{
      textAlign: "center",
      marginTop: '40px',
    }}
    >
            <h2>⚡ Reaction Game</h2>

            <button
            onClick={startGame}
            style={{
              marginTop: "20px",
              padding: "5px",
            }}
            >Start Time</button>

            {result && (<h3  
          style={{
            marginTop: "20px",
          }}
          >Your reaction: {result}ms</h3>)}

           { active && (<div
           onClick={handleClick}
            style={{
              margin: "10px auto",
              height: "100px",
              width: "100px",
              backgroundColor: "red",
            }}
            ></div>)}

    </div>
  )
}

export default App