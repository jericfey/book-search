import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Books from "./components/Books/Books";
import savedBooks from "./pages/savedBooks";
import searchBooks from "./pages/SearchBooks";
import notFound from "./pages/notFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={searchBooks} />
          <Route exact path="/saved" component={savedBooks} />
          <Route exact path="/saved/:id" component={savedBooks} />
          <Route component={notFound} />
        </Switch>
        <Books />
      </div>
    </Router>
  );
}

export default App;
