
//----------------------default import----------------------
// import NetFlix from "./components/netflix";

// export const App = () => {
//   return (
//     <>
//       <NetFlix />
//       <NetFlix />
//       <NetFlix />
//     </>
//   );
// }


// --------------name import------------------------

// import {NetFlix,Footer} from "./components/netflix";
// export const App = () => {
//   return (
//     <>
//       <NetFlix />
//       <NetFlix />
//       <Footer />
//     </>
//   );
// }


// ---------------combined import---------------
import NetFlix, { Header, Footer } from "./components/netflix";
export const App = () => {
  return (
    <>
      <Header />
      <NetFlix />
      <NetFlix />
      <Footer />
    </>
  );
}
