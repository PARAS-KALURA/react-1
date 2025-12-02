import React, { useState } from 'react'


const App = () => {

const [active, setActive] = useState(false);

const startGame = () => {
  setActive(true);
}

const handleClick = () => {
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