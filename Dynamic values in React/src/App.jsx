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

  const name = "Ritik Roshan";
  const rating = 8.2;
  const summary = "Iste doloremque minus eligendi lorem voluptas exercitationem voluptates dignissimos saepe amet commodi aut!";

  const fun = () => {
    const funny = "RomCom";
    return funny;
  }

  return (
    <div>
      <div>
        <img src="ritikroshan.jpg" alt="not found" width="200px" height="200px" />
      </div>
      <h2>{name}</h2>
      <h3>{rating}</h3>
      <h3>Rating2 : {4 + 6}</h3>
      <p>{summary} </p>
      <p>{fun()}</p>
    </div>
  )
}

// note ---
//  1) variables;
// 2) function
// 3)expressions