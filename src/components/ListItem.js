import classes from "./ListItem.module.css";

const ListItem = props => {
    return <div className={classes['list-item']}>
        <p>{props.children}</p>
        <button>✓</button>
    </div>
};

export default ListItem;