import React from "react";
import classes from "./Menu.module.css";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={classes.BtnContainer}>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className={classes.FilterBtn}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
