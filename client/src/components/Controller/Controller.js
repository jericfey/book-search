import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "../../pages/search";
import Saved from "../../pages/saved";

const Controller = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route path="/saved" component={Saved} />
  </Switch>
);

export default Controller;
