import classes from "./NewEntry.module.css";
import { useState } from "react";

const NewEntry = (props) => {
  const [input, setInput] = useState("");

  const inputIsValid = input.trim() !== "";

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleAdd = () => {
      props.addToList(input);
      setInput("");
  };
  return (
    <div className={classes["new-entry"]}>
      <input onChange={handleChange} placeholder="Enter a new item" value={input} />
      <button onClick={handleAdd} disabled={!inputIsValid}>Add</button>
    </div>
  );
};

export default NewEntry;
