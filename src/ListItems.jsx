import React from 'react'

const colors = [
    {title: "red"},
    {title: "yellow"},
    {title: "organge"}, 
];

const ListItems = () => {
  return (
    <>
    <h1>Fruit List</h1>
   
   <ul>
    {colors.map(color => <li>{color.title}</li>)}
   </ul>

    </>
  )
}

export default ListItems