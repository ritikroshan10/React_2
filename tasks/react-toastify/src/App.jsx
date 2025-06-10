// import { ToastContainer, toast } from 'react-toastify';

// function App() {
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Important to include CSS

function App() {
  const notifyError = () => {
    toast.error("Something went wrong!"); // Error styled toast
  };

  return (
    <div>
      <button onClick={notifyError}>Show Error</button>
    </div>
  );
}

export default App;
