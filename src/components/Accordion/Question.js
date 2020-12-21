import React, { useState } from "react";
import classes from "./Questions.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className={classes.Question}>
      <header>
        <h4>{title}</h4>
        <button
          className={classes.Btn}
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
