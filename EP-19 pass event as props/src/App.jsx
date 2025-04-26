import NetFlix from "./components/netflix";
// import "./components/Netflix.css"
import "./components/NetFlix.module.css";
import EventHandling from "./components/EventHandling";

import { EventProps } from "./components/EventProps";

export const App = () => {
  return (
    // <section className="container">
    //   <h1 className="card-heading">List of best web series</h1>
    //   <NetFlix />
    // </section>
    // <EventHandling />

    <EventProps />
  );
}
