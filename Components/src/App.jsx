export const App = () => {
  return (
    <div>
      <h1>In React, a component is a reusable piece of UI that can be independently managed. React components can be defined in two main ways:</h1>
      <h3>1. Functional Components</h3>
      <h3>2. Class Components</h3>
      <hr />

      <MyIntro />
      <MyIntro />
      <MyIntro />
    </div>
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