import React, { useState, useRef, useEffect } from "react";
import classes from "./Reminders.module.css";
import { data } from "./data";

import List from "./List";

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
};

const Reminders = () => {
  const [items, setItems] = useState(data);
  const prevState = usePrevious(items);
  // console.log("prevstate :", prevState);
  // console.log(data);

  return (
    <main>
      <section className={classes.Container}>
        <h3>{items.length} things to do today</h3>
        <List items={items} />
        <button
          onClick={() => {
            items === data ? setItems([]) : setItems(prevState);
          }}
        >
          Clear All/ Undo
        </button>
      </section>
    </main>
  );
};

export default Reminders;
