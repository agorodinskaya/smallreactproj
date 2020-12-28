import React, { useState, useEffect } from "react";
import classes from "./ColorGen.module.css";
const SingleColor = ({ rgb, weight, idx, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`${classes.Color} ${idx > 10 && classes.ColorLight}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className={classes.PercentValue}>{weight}%</p>
      <p className={classes.ColorValue}>{hexValue}</p>
      {alert && <p className={classes.Alert}>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
