import { Fragment } from "react";
import Header from "./components/Header";
import NewEntry from "./components/NewEntry";
import List from "./components/List";
import { useState, useEffect } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

function App() {
  const getLocalStorage = () => {
    const list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [list, setList] = useState(getLocalStorage());

  const addToList = (item) => {
    setList((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    setList((prev) => prev.filter((item, index) => index != id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Fragment>
      <Header />
      <NewEntry addToList={addToList} />
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={list.length > 0}
        classNames="fade"
        timeout={500}
      >
        <List list={list} delete={deleteItem} />
      </CSSTransition>
    </Fragment>
  );
}

export default App;
