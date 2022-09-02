import { Fragment } from "react";
import Header from "./components/Header";
import NewEntry from "./components/NewEntry";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {

  const getLocalStorage = () => {
    const list =localStorage.getItem('list');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [list, setList] = useState(getLocalStorage());

  const addToList = item => {
    setList(prev => [item, ...prev]);
  };

  const deleteItem = id => {
    setList(prev => prev.filter((item, index) => index != id))
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <Fragment>
      <Header />
      <NewEntry addToList={addToList}/>
      <List list={list} delete={deleteItem}/>
    </Fragment>
  );
};

export default App;
