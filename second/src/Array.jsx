import React from 'react'

const Array = () => {
    const myArray = ["Apple ", "Orange" ,"Banana" , "Graphes"]
    const items = myArray.map((value)=>{
         return <p>{value}</p>
      })
  return (
    <div>
     {items}
    </div>
  )
}

export default Array
