import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import routes from "./routes";
import Home from "./components/Home/Home";
import { VisualPoetry } from "./components/VisualPoetry/VisualPoetry";
import "./App.css";

const Nav = styled("div")`
  height: 300px;
  width: 250px;
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <Link to="/"> Home</Link>
          <Link to="/visual-poetry">Visual Poetry</Link>
        </Nav>
        {routes}
      </div>
    </Router>
  );
}

export default App;
