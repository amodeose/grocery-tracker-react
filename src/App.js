import { Fragment } from "react";
import Header from "./components/Header";
import NewEntry from "./components/NewEntry";
import List from "./components/List";

function App() {
  return (
    <Fragment>
      <Header />
      <NewEntry />
      <List />
    </Fragment>
  );
}

export default App;
