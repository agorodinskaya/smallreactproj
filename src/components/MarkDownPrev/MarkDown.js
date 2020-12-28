import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import classes from "./MarkDown.module.css";
const MarkDown = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
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
