import classes from "./NewEntry.module.css";
import { useState } from "react";

const NewEntry = (props) => {

    const [input, setInput] = useState("");
    
    const handleChange = event => {
        const { value } = event.target;
        setInput(value);
    }

    const handleAdd = () => {
        setInput('');
    }
  return (
    <div className={classes['new-entry']}>
      <input onChange={handleChange} value={input}/>
      <button onClick={handleAdd}>Add</button>
      {input}
    </div>
  );
};

export default NewEntry;
