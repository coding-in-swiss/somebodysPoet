import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import "./App.css";

const MainBody = styled("div")``;
function App() {
  return (
    <Router>
      <MainBody className="App">
        <Nav />
        {routes}
      </MainBody>
    </Router>
  );
}

export default App;
