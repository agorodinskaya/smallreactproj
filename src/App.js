import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
