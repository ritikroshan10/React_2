import { useState } from 'react'
import './App.css'

function App() {
 
 const [Counter,setCounter] = useState(0)

 const addValue =()=>{
  setCounter(Counter+1);
 }
 const removeValue =()=>{
  if (Counter > 0) {
    setCounter(Counter - 1)
  }
 }

  return (
    <>
      <h1>counter</h1>
      <h2>count value : {Counter}</h2>

      <button 
       onClick={addValue}
      >
        add</button>

      <br/> <br/>
      <button 
      onClick={removeValue}
      >
        Remove</button>
    </>
  )
}

export default App
