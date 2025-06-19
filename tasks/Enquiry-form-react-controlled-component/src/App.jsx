import { useState } from 'react'
import { toast } from 'react-toastify';

function App() {
  //--------- 2 step------------ use controled component 
  const [formData, setFormData] = useState({
    // yh sbhi key hai aur eis key ko hmne value me pass kiya huaa hai
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  })

  //------ 3 step--------function for update data/store data----
  let getvalue = (e) => {
    let oldData = { ...formData }
    let inputName = e.target.name;  // get input name 
    let inputValue = e.target.value; // get input value
    oldData[inputName] = inputValue
    setFormData(oldData)
  }


  // -----------4 step--------------------------------------for data save------------------------
  const [userData, setUserData] = useState([])

  let handleSubmit = (e) => {
    // ---------6 step-----------

    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    }

    // --------step 11  agr hmara idex numder empty hai fir hm insert krenge nhi to update
    if (formData.index === "") {
      // ----------8 step------------
      let filterUser = userData.filter((v, i) => v.uemail == formData.uemail || v.uphone == formData.uphone);

      if (filterUser.length == 1) {
        toast.warn("email or phone alredy exit..")
      }
      else {
        // ----------5 step---------
        let oldUserData = [...userData, currentUserFormdata] //old array + new array
        console.log(oldUserData);
        setUserData(oldUserData);

        toast.success("Data added successfully!");

        // ------------7 step--------jb hm form ko save kr dete hai uske bad form ko khali karne ke liye
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        })
      }
    }
    else {
      // ---------------------last step--------------
      let editIndex = formData.index;
      let checkfilterUser = userData.filter(
        (v, i) => (v.uemail === formData.uemail || v.uphone === formData.uphone) && i != editIndex
      );

      if (checkfilterUser.length === 0) {
        let updatedData = [...userData];
        updatedData[editIndex] = {
          uname: formData.uname,
          uemail: formData.uemail,
          uphone: formData.uphone,
          umessage: formData.umessage,
        };

        setUserData(updatedData);
        toast.success("Data updated successfully!");

        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
      } else {
        toast.warn("email or phone already exists..");
      }
    }

    e.preventDefault();
  }

  // -----------------9 delete logic-----------
  let deleteRow = (index) => {
    let filetrDataAfterDelete = userData.filter((v, i) => i !== index)
    toast.error("Data Delete Successfully.. ")
    setUserData(filetrDataAfterDelete)
  }

  // ---------------10 edit row------------
  // let editRow = (indexNumber)=>{
  //   let editData = userData.filter(((v,i)=>i==indexNumber))[0]
  //   console.log(editData) //yh 4 entry le lr aayega index nhi aayega eis me

  //   editData['index']= indexNumber;
  //   console.log(editData)
  //   setFormData(editData);
  // }

  let editRow = (indexNumber) => {
    let editData = userData[indexNumber];
    console.log(editData);
    setFormData({ ...editData, index: indexNumber });
  };

  return (
    <>
      {/* ---------1 step---------- create a design of form */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center pt-5'>Enquiry</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <form action="#" onSubmit={handleSubmit}>
              <div className='text-start my-3'>
                <label htmlFor="">UserName</label>
                <input type="text" onChange={getvalue} value={formData.uname} className='form-control' name='uname' />
              </div>
              <div className='text-start my-3'>
                <label htmlFor="">Email</label>
                <input type="email" onChange={getvalue} value={formData.uemail} className='form-control' name='uemail' />
              </div>
              <div className='text-start my-3'>
                <label htmlFor="">Phone</label>
                <input type="text" onChange={getvalue} value={formData.uphone} className='form-control' name='uphone' />
              </div>
              <div className='text-start my-3'>
                <label htmlFor="">Message</label>
                <textarea name="umessage" onChange={getvalue} value={formData.umessage} className='form-control' rows={3} />
              </div>
              <div className='text-start my-3'>
                <button>
                  {
                    formData.index !== "" ? 'update' : 'save'
                  }
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-7 mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Message</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ?
                  userData.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <th> {i + 1} </th>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={() => { deleteRow(i) }}>Delete</button>
                          <button onClick={() => { editRow(i) }}>Edit</button>
                        </td>
                      </tr>
                    )
                  })

                  :
                  <tr>
                    <td colSpan={6}>No data found</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div >
      </div >
    </>
  )
}

export default App
