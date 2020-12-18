import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul>
      <Link to='/booklist'>
        <li>Booklist</li>
      </Link>
      <Link to='/reminders'>
        <li>Reminder</li>
      </Link>
      <Link to='/githubprof'>
        <li>Githib</li>
      </Link>
    </ul>
  );
};

export default NavBar;
