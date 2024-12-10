import { useState } from 'react'
import './App.css'
import Props from './components/Props'
// import EventsButton from './components/EventsButton'

import Condition from './components/Condition'

import Datas from "./components/Datas"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <Props color = "black"/>
      {/* <EventsButton /> */}
      <Condition res = "true" />
      <Datas />
    </>
  )
}

export default App
