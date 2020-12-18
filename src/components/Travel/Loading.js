import React from "react";
import classes from "./Travel.module.css";
const Loading = () => {
  return (
    <>
      <div className={classes.Loader}>
        <h1>Loading</h1>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
export default Loading;
