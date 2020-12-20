import React from "react";
import Tour from "./Tour";
import classes from "./Travel.module.css";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={classes.Tours}>
        <h2>tours :</h2>
        <div className={classes.Underline}></div>

        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Tours;
