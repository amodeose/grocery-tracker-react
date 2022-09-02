import classes from "./List.module.css";
import ListItem from "./ListItem";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

const List = (props) => {
  return (
    <TransitionGroup className={classes.list}>
      {props.list.map((item, index) => (
        <CSSTransition key={index} classNames="fade" timeout={500}>
          <ListItem  id={index} delete={props.delete}>
            {item}
          </ListItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
