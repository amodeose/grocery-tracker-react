import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.list}>
      <ul>
        {props.list.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
};

export default List;
