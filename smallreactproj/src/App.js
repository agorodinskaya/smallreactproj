import logo from "./logo.svg";
import "./App.css";
import GithubProfiles from "./components/GithubProfiles/GithubProfiles";
import BookList from "./components/Books/BookList";
function App() {
  return (
    <div className='App'>
      {/* <GithubProfiles /> */}
      <BookList />
    </div>
  );
}

export default App;
