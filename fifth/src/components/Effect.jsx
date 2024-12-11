import React, { useState } from 'react'
import { useEffect } from 'react';
// if we use useEffect then our code used inside the use effect that will rerender with out page will or ther are not render 
//if we not use dependency
const Effect = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1>Timer Start : {count}</h1>
    </div>
  )
}

export default Effect
