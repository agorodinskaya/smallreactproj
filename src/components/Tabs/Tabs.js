import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import classes from "./Tabs.module.css";

const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  //   console.log(jobs);
  if (loading) {
    return (
      <section className={classes.Section}>
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className={classes.Section}>
      <div className={classes.Title}>
        <div className={classes.Underline}>
          <h2>experience</h2>
        </div>
      </div>
      <div className={classes.JobCenter}>
        <div className={classes.BtnContainer}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${classes.JobBtn} ${
                  index === value && classes.ActiveBtn
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <article className={classes.JobInfo}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={classes.JobDate}>{dates}</p>
          {duties.map((dy, idx) => {
            return (
              <div key={idx} className={classes.JobDesc}>
                <FaAngleDoubleRight className={classes.JobIcon} />
                <p>{dy}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className={classes.Btn}>
        more info
      </button>
    </section>
  );
};

export default Tabs;
