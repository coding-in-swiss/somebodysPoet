import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import VisualPoetry from "./components/VisualPoetry/VisualPoetry";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/visual-poetry" exact component={VisualPoetry} />
  </Switch>
);
