import { useState } from 'react'
import './App.css'
import {LC, NC, SC, UC} from "../src/Data/char"

function App() {
  // -------step 2 create a state for all checkbox --------
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)

  //--- step 4 create a state for password length
  let [passlength, setPasslength] = useState(6)
  let [finalpass, setFinalpass] = useState('')

  // -------step 3 function for generate password---------
  let createpassword = ()=>{
   
    let finalpassword =""

    let charSet = ''
     if(uppercase || lowercase || number || symbols){
        if (uppercase) charSet+=UC;
        if (lowercase) charSet+=LC;
        if (number) charSet+=NC;
        if (symbols) charSet+=SC;

        for(let i=0;i<passlength;i++){
          finalpassword += charSet.charAt(Math.floor(Math.random()*charSet.length) )
        }
        setFinalpass(finalpassword);

     }
     else{
      alert("Please select atleast one checkbox...")
     }
  }

  // copy password
  let copypass =()=>{
    navigator.clipboard.writeText(finalpass)
    alert("Password copy Successfully")
  }

  return (
    // -----------step 1 create a password box----------------
    <>
      <div className="password-box">
        <h2>Password Generator</h2>

        <div className='password-input'>
          <input type="text" readOnly value={finalpass}/> <button onClick={copypass} style={{cursor:"pointer"}}>copy</button>
        </div>

        <div className="passlength">
          <label>Password length</label>
          <input type="number" max={20} min={6} value={passlength} onChange={(e)=>{setPasslength(e.target.value)}}/>
        </div>

        <div className="passlength">
          <label>Include Uppercase</label>
          <input type="checkbox" checked={uppercase} onChange={()=>{setUppercase(!uppercase)}}/>
        </div>

        <div className="passlength">
          <label>Include Lowercase</label>
          <input type="checkbox" checked={lowercase} onChange={()=>{setLowercase(!lowercase)}}/>
        </div>

        <div className="passlength">
          <label>Include Numbers</label>
          <input type="checkbox"checked={number} onChange={()=>{setNumber(!number)}}/>
        </div>

        <div className="passlength">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>{setSymbols(!symbols)}}/>
        </div>
         
         <button className='btn' onClick={createpassword}>Generate Password</button>
      </div>
    </>
  )
}

export default App
