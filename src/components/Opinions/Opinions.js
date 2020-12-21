import React, { useState } from "react";
import classes from "./Opinions.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Opinion = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkLen = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviews.length - 1;
    }
    return num;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkLen(newIndex);
    });
  };
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkLen(newIndex);
    });
  };

  const randReview = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkLen(randomNum));
  };
  return (
    <article className={classes.Review}>
      <div className={classes.ImgContainer}>
        <img src={image} alt={name} className={classes.PersonImg} />
        <span className={classes.QuoteBrackets}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={classes.Author}>{name}</h4>
      <p className={classes.Job}>{job}</p>
      <p className={classes.Info}>{text}</p>
      <div>
        <button className={classes.PrevBtn} onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className={classes.NextBtn} onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className={classes.RandomBtn} onClick={randReview}>
        Try it!
      </button>
    </article>
  );
};

export default Opinion;
