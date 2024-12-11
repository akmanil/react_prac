import React ,{useState} from 'react'
import ReactDOM from "react-dom"
import StateHold from './StateHold'

const State = () => {
    const [color ,setColor] = useState("Red")
  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick= {() =>setColor("Black")}>Change Color</button>
      <button onClick = {() => {
        setColor("Red")
      }}> Set Red</button>
      <StateHold />
    </div>
  )
}

export default State
