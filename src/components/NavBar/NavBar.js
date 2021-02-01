import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
function Navbar() {
  return (
    <nav className={classes.Nav}>
      <Link to='/colors' className={classes.Item}>
        Colors{" "}
      </Link>
      <Link to='/markdown' className={classes.Item}>
        Markdown{" "}
      </Link>
    </nav>
  );
}

export default Navbar;
