import React from "react";
import classes from "./Menu.module.css";

const Menu = ({ items }) => {
  return (
    <div className={classes.SectionCenter}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className={classes.MenuItem}>
            <img src={img} alt={title} className={classes.Photo} />
            <div className={classes.ItemInfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={classes.Price}>{price}</h4>
              </header>
              <p className={classes.ItemText}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
