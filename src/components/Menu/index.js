import React, { useState } from "react";
import Menu from "./Menus";
import Categories from "./Categories";
import classes from "./Menu.module.css";
import menu from "./data";

const allCategories = [
  "All",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

console.log(allCategories);
const DisplayMenu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className={(classes.Menu, classes.Section)}>
        <div className={classes.Title}>
          <h2>Menu:</h2>
          {/* <div className={classes.Underline}></div> */}
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default DisplayMenu;
