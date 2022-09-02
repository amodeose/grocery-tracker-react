import classes from "./List.module.css";
<<<<<<< HEAD
import ListItem from "./ListItem";
=======
>>>>>>> 1d54813479a314517c38bc83bc6c158717d6f386
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

const List = (props) => {

  const handleClick = (id) => {
    props.delete(id);
  };

  return (
    <TransitionGroup className={classes.list}>
      {props.list.map((item, index) => (
<<<<<<< HEAD
        <CSSTransition key={index} classNames="fade" timeout={500}>
          <ListItem  id={index} delete={props.delete}>
            {item}
          </ListItem>
=======
        <CSSTransition key={index} classNames="fade" timeout={1000}>
          <div className={classes["list-item"]}>
            <p>{item}</p>
            <button onClick={() => {handleClick(index)}}>✓</button>
          </div>
>>>>>>> 1d54813479a314517c38bc83bc6c158717d6f386
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
