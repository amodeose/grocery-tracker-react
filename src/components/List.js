import classes from "./List.module.css";
import ListItem from "./ListItem";
import TransitionGroup from "react-transition-group/TransitionGroup";

const List = (props) => {
  return (
    <TransitionGroup className={classes.list}>
      {props.list.map((item, index) => (
        <ListItem key={index} id={index} delete={props.delete}>
          {item}
        </ListItem>
      ))}
    </TransitionGroup>
  );
};

export default List;
