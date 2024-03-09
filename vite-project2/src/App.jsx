import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = () =>
  {
    // counter += 1
    // console.log(counter)
    // setCounter(counter+1)
    // setCounter(counter+1)     // by this process it canot update
    //value with 4 increments so we have to use call back for the update in state
    // setCounter(counter+1)
    // setCounter(counter+1)

    // setCounter((prevCounter)=> prevCounter+1) // now i can jump 4 values
    // setCounter((prevCounter)=> prevCounter+1)
    // setCounter((prevCounter)=> prevCounter+1)
    // setCounter((prevCounter)=> prevCounter+1)
    
  }
  const removeValue = () =>
  {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>This is my first react page with vite </h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add</button> {" "}
      <button
        onClick={removeValue}
      >Remove</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
