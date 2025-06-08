import { useState } from 'react'
import './App.css'

function App() {
  const [modal, showModal] = useState(false)

  return (
    <>
      
      <button className='en' onClick={()=>{showModal(true)}}>Enquiry Now</button>

      <div className={`modaloverlay ${modal ? 'modalopen' : ''}`}  onClick={()=>{showModal(false)}}> </div>
      <div className={`modaldiv ${modal ? 'openmodaldiv' : ''}`}>
        <h3>Enquiry Now <span onClick={()=>{showModal(false)}}>&times;</span></h3>
      </div>
    </>
  )
}

export default App
