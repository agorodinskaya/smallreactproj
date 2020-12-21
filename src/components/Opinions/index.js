import React from "react";
import Opinion from "./Opinions";
import classes from "./Opinions.module.css";
const Display = () => {
  return (
    <main>
      <section className={classes.Container}>
        <div className={classes.Title}>
          <h2>review:</h2>
          <div className={classes.Underline}></div>
        </div>
        <Opinion />
      </section>
    </main>
  );
};

export default Display;
