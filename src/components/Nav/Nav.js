import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_ZINDEX } from "../../consts";

const NavBody = styled("div")`
  height: 250px;
  width: 250px;
  padding: 15px;
  border: 1px solid black;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: ${MENU_ZINDEX};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export default function Nav() {
  return (
    <NavBody>
      <Link to="/">+ Home</Link>
      <Link to="/visual-poetry">+ Visual Poetry</Link>
      <Link to="/visual-pieces">+ Visual Pieces</Link>
      <Link to="/just-text">+ Just Text</Link>
      <Link to="/contact">+ Contact</Link>
      <Link to="/bio">+ Bio</Link>
    </NavBody>
  );
}
