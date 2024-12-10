import React from 'react'

const Props = (props) => {
  return (
    <div>
      <h2>My favorite color is {props.color}</h2>
      <Compinside />
    </div>
  )
}

const Compinside =() =>{
   return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit nisi quae corporis. Enim laudantium ex perferendis nam. Explicabo tempore facilis ipsa optio!</p>;
}
//componets used in same file

export default Props
