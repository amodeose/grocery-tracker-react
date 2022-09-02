import classes from "./List.module.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

const List = (props) => {

  const handleClick = (id) => {
    props.delete(id);
  };

  return (
    <TransitionGroup className={classes.list}>
      {props.list.map((item, index) => (
        <CSSTransition key={index} classNames="fade" timeout={1000}>
          <div className={classes["list-item"]}>
            <p>{item}</p>
            <button onClick={() => {handleClick(index)}}>✓</button>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
