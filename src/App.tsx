import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from './modules/Post';
import About from './modules/About';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Post} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;