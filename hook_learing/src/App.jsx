import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addNumber() {
    console.log(count)
    setCount(count + 1)
  }
  function remobeNumber(){
    console.log(count)
    if(count==0){
      return
    }
    setCount(count-1)
  }
  return (
    <>
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={addNumber}>Add</button> <br />
        <button onClick={remobeNumber}>remove</button>
      </div>
    </>
  )
}

export default App
