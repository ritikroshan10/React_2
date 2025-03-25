export const App = () => {
  return (
    <>
      <MyIntro />
      <MyIntro />
    </>
  );
}

// *-----------------------------------------create a component----------------------------------------------
const MyIntro = () => {

  const name = "Life Sahi Hai";
  const rating = 8.2;
  const summary = "Iste doloremque minus eligendi lorem voluptas exercitationem voluptates dignissimos saepe amet commodi aut!";
  const age = 17;

  // __________________first method______________________

  // if(age<18){
  //   return (
  //     <>
  //       <div>
  //         <img src="web.webp" alt="not found" width="400px" height="200px" />
  //       </div>
  //       <h2>{name}</h2>
  //       <h3>{rating}</h3>
  //       <h3>Rating2 : {4 + 6}</h3>
  //       <p>{summary} </p>
  //       <button>Not availabele</button>
  //     </>
  //   )
  // }

  // return (
  //   <>
  //     <div>
  //       <img src="web.webp" alt="not found" width="400px" height="200px" />
  //     </div>
  //     <h2>{name}</h2>
  //     <h3>{rating}</h3>
  //     <h3>Rating2 : {4 + 6}</h3>
  //     <p>{summary} </p>
  //     <button>watch now</button>
  //   </>
  // )

  // _______________second method using ternary operator__________________

  // return (
  //   <>
  //     <div>
  //       <img src="web.webp" alt="not found" width="400px" height="200px" />
  //     </div>
  //     <h2>{name}</h2>
  //     <h3>{rating}</h3>
  //     <h3>Rating2 : {4 + 6}</h3>
  //     <p>{summary} </p>
  //     <button>{ age >= 18 ? "watch now" : "not available"}</button>
  //   </>
  // )

  // ________________third method using variable____________

  // let canWatch = "not available";

  // if(age>=18) canWatch = "watch";


  // return (
  //   <>
  //     <div>
  //       <img src="web.webp" alt="not found" width="400px" height="200px" />
  //     </div>
  //     <h2>{name}</h2>
  //     <h3>{rating}</h3>
  //     <h3>Rating2 : {4 + 6}</h3>
  //     <p>{summary} </p>
  //     <button>{canWatch}</button>
  //   </>
  // )

  // __________________________fourth method by using function______________________

  const canWatch = () => {
    if (age >= 18) return "watch";
    return "not available"
  }

  return (
    <>
      <div>
        <img src="web.webp" alt="not found" width="400px" height="200px" />
      </div>
      <h2>{name}</h2>
      <h3>{rating}</h3>
      <h3>Rating2 : {4 + 6}</h3>
      <p>{summary} </p>
      <button>{canWatch()}</button>
    </>
  )

}
