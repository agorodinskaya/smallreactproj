import classes from "./BookList.module.css";
import { books } from "./bookdata";

function BookList() {
  return (
    <div className={classes.BookList}>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </div>
  );
}

const clickHandler = (e) => {
  console.log(e.target);
};
function Book({ image, title, author }) {
  return (
    <article className={classes.Book} onMouseOver={clickHandler}>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <img src={image} alt={title} />
      <button type='button'>hello</button>
    </article>
  );
}

export default BookList;
