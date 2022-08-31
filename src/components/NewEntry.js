import classes from "./NewEntry.module.css";
import { useState } from "react";

const NewEntry = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleAdd = () => {
    if (input.length > 0) {
      props.addToList(input);
      setInput("");
    }
  };
  return (
    <div className={classes["new-entry"]}>
      <input onChange={handleChange} value={input} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NewEntry;
