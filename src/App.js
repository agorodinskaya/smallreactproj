import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import GithubProfiles from "./components/GithubProfiles/GithubProfiles";
import BookList from "./components/Books/BookList";
import Reminders from "./components/Reminders";
const ReactRouterSetup = () => {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Route path='/'></Route>
        <Route path='/booklist'>
          <BookList />
        </Route>
        <Route path='/githubprof'>
          <GithubProfiles />
        </Route>
        <Route path='/reminders'>
          <Reminders />
        </Route>
      </Router>
    </>
  );
};
export default ReactRouterSetup;
