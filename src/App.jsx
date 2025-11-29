import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
      style={{
        backgroundColor: "#1ef41a",
        color: "white",
        padding: "4px 3px",
      }}
      onClick={ () => setCount(count+10)} >+</button>
      <button
      style={{
        backgroundColor: "#e80d48",
        color: "white",
        padding: "4px 3px",
      }}
      onClick={ () => setCount(count-10)} >-</button>
    </div>
  )
}

export default App