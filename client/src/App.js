import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Books from "./components/Books/Books";
import "./App.css";
import { Navigation } from "react-mdl";
import Controller from "./components/Controller/Controller";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation>
          <Link to="/search">Search for Books</Link>
          <Link to="/saved">View Saved Books</Link>
        </Navigation>
        <Controller />
        <div className="App">
          <Header />
          <Books />
        </div>
      </Router>
    );
  }
}

export default App;
