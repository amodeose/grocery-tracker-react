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

  const deleteItem = id => {
    setList(prev => prev.filter((item, index) => index != id))
  }

  return (
    <Fragment>
      <Header />
      <NewEntry addToList={addToList}/>
      {list.length > 0 && <List list={list} delete={deleteItem}/>}
    </Fragment>
  );
}

export default App;
