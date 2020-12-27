import React, { useState, useEffect } from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import classes from "./Slider.module.css";

import data from "./data";
const Slider = () => {
  const [people] = useState(data);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const lastIdx = people.length - 1;
    if (idx < 0) {
      setIdx(lastIdx);
    }
    if (idx > people.length - 1) {
      setIdx(0);
    }
  }, [idx, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIdx(idx + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [idx]);
  return (
    <section className={classes.section}>
      <div className={classes.Title}>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className={classes.SectionCenter}>
        {people.map((pers, persIndex) => {
          const { id, image, name, title, quote } = pers;
          let position = "NextSlide";
          if (persIndex === idx) {
            position = "ActiveSlide";
          }
          if (
            persIndex === idx - 1 ||
            (idx === 0 && persIndex === people.length - 1)
          ) {
            position = "LastSlide";
          }
          return (
            <article className={classes[position]} key={id}>
              <img src={image} alt={name} className={classes.PersonImg} />
              <h4 className={classes.Title}>{name}</h4>
              <p>{title}</p>
              <p className={classes.Text}>{quote}</p>
              <FaQuoteRight className={classes.Icon} />
            </article>
          );
        })}
      </div>
      <div>
        <button className={classes.Prev} onClick={() => setIdx(idx - 1)}>
          <FiChevronLeft />
        </button>
        <button className={classes.Next} onClick={() => setIdx(idx + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
export default Slider;
