// import { Fragment } from "react";

export const App = () => {
  return (
    // <Fragment>
    //   <MyIntro />,
    //   <MyIntro />,
    //   <MyIntro />
    // </Fragment>

    // *---------------------third method--------------------
    <>
      <MyIntro />,
      <MyIntro />,
      <MyIntro />,
      <MyIntro />
    </>
  );
}

// *---------------------------create a component and use multiple times-----------------------
const MyIntro = () => {
  return (
    <div>
      <div>
        <img src="ritikroshan.jpg" alt="not found" width="200px" height="200px" />
      </div>
      <h2>Ritik Roshan</h2>
      <h3> Hello , how are you friends..!</h3>
      <p>summary : Iste doloremque minus eligendi voluptas exercitationem voluptates dignissimos saepe amet commodi aut!</p>
    </div>
  )
}