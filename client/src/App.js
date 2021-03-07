import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Books from "./components/Books/Books";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import notFound from "./pages/notFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooks} />
          <Route component={notFound} />
        </Switch>
        <Books />
      </div>
    </Router>
  );
}

export default App;
