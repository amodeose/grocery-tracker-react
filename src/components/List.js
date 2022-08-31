import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className={classes.list}>
        {props.list.map(item => <ListItem>{item}</ListItem>)}
    </div>
  );
};

export default List;
