import React, { useState } from 'react'




const App = () => {

const [isDark, setIsDark] = useState(false);

function toggleTheme() {
  setIsDark(!isDark);
}


  return (
  <div 
  style={{
    margin: 0,
    backgroundColor: isDark? "black": "white",
    color: isDark? "white": "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }}
   >

    <h1>{isDark ? "Dark Mode": "Light Mode"}</h1>

    <button onClick={toggleTheme} style={{
      borderRadius: "10px", padding: "10px"
    }} >
      {isDark ? "Switch to Light Mode ☀️": "Switch to Dark Mode ✨"}
    </button>

  </div>
  )
}

export default App