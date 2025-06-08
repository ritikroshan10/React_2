import { useState } from 'react'
import './App.css'

function App() {
  const [menuStatus,showMenuStatus] = useState(false)

  return (
    <>
    <button className='icon' onClick={()=>{showMenuStatus(!menuStatus)}}>
       
       {
        menuStatus
         ?
         <span>&times;</span>
         :
         <span> &#9776;</span>
       }
     
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        {/* this is conditional styling */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  )
}

export default App
