export const App = () => {
  return (
    [
      <h1>In React, fragments let you group multiple elements without adding an extra DOM node.
         They are useful when you need to return multiple elements from a component 
        but don’t want to wrap them in a div or another parent container.</h1>,

      <h3>Two methods to eliminate </h3>,

      <h5>1. Using an array of elements with keys</h5>,

      <h5>2. using fragments</h5>,

      // import{fragment} from "react";
      // return <fragment> // </fragment>

      // Alternative method of using fragments is..
      // <> // </>

      <hr />,

      <MyIntro  key="5" />,
      <MyIntro  key="6"/>
    ]
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