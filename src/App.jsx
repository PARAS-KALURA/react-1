import React from 'react'

const App = () => {
 
  const fruits = ["apple", "banana", "cherry", "momos"]



  return (
    <div style={{padding: "20px", fontSize: "20px", border: "2px solid gray", borderRadius: "10px", boxShadow: "0 4px 10px 2px" }} >
      
      <h2>Fruit List</h2>

      {fruits.map((item) => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default App