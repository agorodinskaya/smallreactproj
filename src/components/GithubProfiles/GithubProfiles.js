import React, { useState, useEffect } from "react";
import classes from "./GithubProfiles.module.css";
const url = "https://api.github.com/users";

const GithubProfiles = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3 className={classes.Header}>github users</h3>
      <ul className={classes.ProfilesList}>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GithubProfiles;
