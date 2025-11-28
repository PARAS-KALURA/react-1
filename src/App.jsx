import React, { useState } from 'react'

const App = () => {
 
  const [toDo, setToDo ] = useState([]);
  const [input, setInput] = useState("");

  function add() {
    if(input.trim() === "") {
      alert("Link to bsdk kuch");
      return;
    }


    setToDo([...toDo, input]);
    setInput("");
  }


  return (
    <div
    style={{
      border: "2px solid gray",
      padding: "10px",
      borderRadius: "10px",
      textAlign: "center",
    }}
    >
      <h2>To-Do List</h2>
      <input
      style={{
        padding: "3px",
        borderRadius: "5px",
        outline: "none",
        
      }}
      type="text" placeholder='Add item...'
      value={input}
      onChange={(e) => {
        setInput(e.target.value)
      }}
      />

      <button
      style={{
        backgroundColor: "red",
        color: "white",
        marginLeft: "10px",
        borderRadius: "4px",
        padding: "2.5px 5px",
        border: "none"

      }}
      onClick={add}
      >Add
      </button>


      {toDo.map((item,index) => {
       return <p key={index}>{item}</p>
      })}

    </div>
  )
}

export default App
 


