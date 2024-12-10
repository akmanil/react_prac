import React from "react";
import "./App.css";
import Arrow from "./Arrow";
import Class from "./Class";
import Array from "./Array";
import Destructure from "./Destructure";

function App() {
// terninary operator
//condition ? true : false
// where the condition means a condition which will will we giving its true or false
//where true means what will render if its true other wise render false function
  return (
    <>
      <h1>Hey Its the REACT + vite APP</h1>

      <Arrow />
      <Class />
      <Array />
      <Destructure a={6} b={3}/>
    </>
  )
}

export default App;
