import classes from "./ListItem.module.css";

const ListItem = props => {

    const handleClick = () => {
        props.delete(props.id);
    }

    return <div className={classes['list-item']}>
        <p>{props.children}</p>
        <button onClick={handleClick}>✓</button>
    </div>
};

export default ListItem;