import { useState } from 'react'

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  let handelForm = (e) => {
    e.preventDefault();
    console.log(userName,password)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <form action="#" onSubmit={handelForm}>
              <div className='text-start my-3'>
                <label htmlFor="">UserName</label>
                <input type="text" className='form-control' onChange={(e) => setUserName(e.target.value)} value={userName} />
              </div>
              <div className='text-start my-3'>
                <label htmlFor="">Password</label>
                <input type="text" className='form-control' onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
              <div className='text-start my-3'>
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
