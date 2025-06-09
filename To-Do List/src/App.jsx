import { useState, useEffect } from 'react'
import './App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todolist, setToDoList] = useState([])

  // -----------7 step for get the data from local storage----------
  useEffect(() => {
    const storedList = localStorage.getItem("todolist");
    if (storedList) {
      setToDoList(JSON.parse(storedList));
    }
  }, []);


  //----------------------------------2 step function call when submit form------------------------------
  let saveToDoList = (event) => {
    event.preventDefault();

    // input ke andr ke value ko uthaya
    let todoname = event.target.todoname.value;

    toast.dismiss(); // Dismiss any current toast

    // agr input box empty hai ho
    if (!todoname) {
      toast.warn('ToDo name cannot be empty.', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });
      return;
    }

    // agr kio task phle se exit hai to error show karna nhi to task add kr dena
    if (!todolist.includes(todoname)) {
      // if task not exit then add previous task (using spread operator) and new task combine 
      let finalToDoList = [...todolist, todoname]
      // then pass in settodolist
      setToDoList(finalToDoList)
      // now store in local storage
      localStorage.setItem("todolist", JSON.stringify(finalToDoList));

      // success message
      toast.success('ToDo add Successfully...', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }

    else {
      // if task already exit then show error message
      toast.error('ToDo already exit...', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }

  //----------------- 5 step   todo list show on screen----------

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value} key={value} indexNumber={index} todolist={todolist} setToDoList={setToDoList} />
    )
  })



  return (
    <>
      {/* ------------1 step-------------- */}
      <h1>To Do List</h1>

      <form action="#" onSubmit={saveToDoList}>
        <input type="text" name='todoname' /> <button>Save</button>
      </form>

      {/* -------------3 step------------- */}
      <div className="outerdiv">
        <ul>
          {list}
        </ul>
      </div>

    </>
  )
}

export default App


//*---------------------------------------------------------4 step second component--------------------------------------------------

function ToDoListItems({ value, indexNumber, todolist, setToDoList }) {

  let [status, setStatus] = useState(false)
  
  // -----------------6 step for delete task---------------
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber)
    setToDoList(finalData)
    localStorage.setItem("todolist", JSON.stringify(finalData));

    toast.dismiss();

    toast.error(`"${value}" removed from ToDo list.`, {
      position: "top-center",
      autoClose: 3000,
      theme: "colored"
    });
  }


  let checkStatus = () => {
    setStatus(!status)
  }

  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}> {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
