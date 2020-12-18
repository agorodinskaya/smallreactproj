import React, { useState } from "react";
import classes from "./Reminders.module.css";
const List = ({ items }) => {
  return (
    <>
      {items.map((oneItem) => {
        const { id, task, due, image } = oneItem;

        return (
          <article key={id} className={classes.Items}>
            <img src={image} alt={task} />
            <div>
              <h4>{task}</h4>
              <p className={classes.Due}>{due}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
