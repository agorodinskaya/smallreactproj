import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import classes from "./MarkDown.module.css";

const getLocalStorageTheme = () => {
  let theme = `${classes.LightTheme}`;
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const MarkDown = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = () => {
    if (theme === `${classes.LightTheme}`) {
      setTheme(`${classes.DarkTheme}`);
    } else {
      setTheme(`${classes.LightTheme}`);
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main className={classes.Main}>
      <button className={classes.Btn} onClick={toggleTheme}>
        toggle
      </button>
      <section className={classes.Markdown}>
        <textarea
          className={classes.Input}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className={classes.Result}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};
export default MarkDown;
