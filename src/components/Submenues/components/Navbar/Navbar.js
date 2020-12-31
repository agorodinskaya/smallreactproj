import React from "react";
import classes from "./Navbar.module.css";
import "../../index.css";
import { FaBars, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.NavCenter}>
        <div className={classes.NavHeader}>
          <img
            src='../../assets/Stripe wordmark - blurple'
            className={classes.NavLogo}
            alt=''
          />
          <button className={classes.ToggleBtn}>
            <FaBars />
          </button>
        </div>
        <ul className={classes.NavLinks}>
          <li>
            <button className={classes.LinkBtn}>products</button>
          </li>
          <li>
            <button className={classes.LinkBtn}>developers</button>
          </li>
          <li>
            <button className={classes.LinkBtn}>company</button>
          </li>
        </ul>

        <button className={`${classes.Btn} ${classes.SigninBtn}`}>
          <span>Sign in</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
