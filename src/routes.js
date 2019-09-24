import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import VisualPoetry from "./components/VisualPoetry/VisualPoetry";
import VisualPieces from "./components/VisualPieces/VisualPieces";
import Bio from "./components/Bio/Bio";
import JustText from "./components/JustText/JustText";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/visual-poetry" exact component={VisualPoetry} />
    <Route path="/visual-pieces" exact component={VisualPieces} />
    <Route path="/just-text" exact component={JustText} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/bio" exact component={Bio} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
