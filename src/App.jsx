import React from 'react'

const App = () => {
 
  const toDo = ["Coding", "Music", "Chess", "Gym"];

  return (
    <div style={{
      border: "2px solid gray",
      padding: "10px",
      borderRadius: "10px",
    }} >
      <h2>ToDo List</h2>
      {toDo.map((list) => {
         return <p>{list}</p>
      })}
    </div>
  )
}

export default App