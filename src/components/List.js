import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className={classes.list}>
      {props.list.map((item, index) => (
        <ListItem key={index} id={index} delete={props.delete}>
          {item}
        </ListItem>
      ))}
    </div>
  );
};

export default List;
