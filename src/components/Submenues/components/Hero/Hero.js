import React from "react";
import classes from "./Hero.module.css";
import "../../index.css";
// import { FaBars } from "react-icons/fa";
const Hero = () => {
  return (
    <header className={classes.Hero}>
      <span className={classes.HeroCenter}></span>
      <h1>Header Content</h1>
    </header>
  );
};

export default Hero;
