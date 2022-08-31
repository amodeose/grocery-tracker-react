import { Fragment } from "react";
import Header from "./components/Header";
import NewEntry from "./components/NewEntry";
import List from "./components/List";
import { useState } from "react";

function App() {

  const [list, setList] = useState([])

  const addToList = item => {
    setList(prev => [item, ...prev]);
  }

  return (
    <Fragment>
      <Header />
      <NewEntry addToList={addToList}/>
      <List list={list}/>
    </Fragment>
  );
}

export default App;
