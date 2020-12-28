import React, { useState } from "react";
import classes from "./ColorGen.module.css";
import SingleColor from "./SingleColor";
import Values from "values.js";
const ColorGen = () => {
  const [color, setColor] = useState("");
  const [err, setErr] = useState(false);
  const [list, setList] = useState(new Values("#FF69B4").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };
  return (
    <>
      <section className={classes.Container}>
        <h3>Color</h3>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#FF69B4'
            className={err ? classes.Error : null}
          />
          <button type='submit' className={classes.Btn}>
            Submit
          </button>
        </form>
      </section>

      <section className={classes.Colors}>
        {list.map((color, idx) => {
          return (
            <SingleColor key={idx} {...color} idx={idx} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
};

export default ColorGen;
