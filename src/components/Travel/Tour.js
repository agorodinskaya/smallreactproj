import React, { useState } from "react";
import classes from "./Travel.module.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={classes.SingleTour}>
      <img src={image} alt={name} />
      <footer>
        <div className={classes.TourInfo}>
          <h4>{name}</h4>
          <h6 className={classes.TourPrice}>{price}$</h6>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more..."}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className={classes.DeleteBtn}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
