import React, { useState } from "react";
import Questions from "./Question";
import questions from "./data";
import classes from "./Questions.module.css";
const DisplayQuestion = () => {
  // const [question, setQuestion] = useState(questions);
  return (
    <main>
      <div className={classes.Container}>
        <h3>FAQ about login:</h3>
        <section className={classes.Info}>
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default DisplayQuestion;
