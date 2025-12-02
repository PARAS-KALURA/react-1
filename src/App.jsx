import React, { useState } from 'react'


const App = () => {

const [active, setActive] = useState(false);
const [startTime, setStartTime] = useState(null);
const [result, setResult] = useState(null);

const startGame = () => {
  setActive(false);
  setResult(null)
  setStartTime(Date.now());

   const delay = Math.floor(Math.random() * 2000) + 1000; 
    // random time between 1000ms - 3000ms

    setTimeout(() => {
      setActive(true);
      setStartTime(Date.now());
    }, delay);


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

            {result !==null && (<h3  
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