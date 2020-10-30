import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import ContactMe from './components/ContactMe/ContactMe';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
