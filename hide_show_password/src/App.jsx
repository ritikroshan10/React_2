import { useState } from 'react'

function App() {
  const [status, setstatus] = useState(false)

  return (
    <>
      <input type={status?'text':'password'} className='border-2 border-solid border-indigo-500'/>  

      <button onClick={()=>{setstatus(!status)}}>
        {status?'hide':'show'} 
      </button>
    </>
  )
}

export default App
