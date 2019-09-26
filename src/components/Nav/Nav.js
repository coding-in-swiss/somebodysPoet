import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_ZINDEX } from "../../consts";
import homeIcon from "../../static/icons/typewriter.svg";
import visualPoetryIcon from "../../static/icons/eye.svg";
import visualPiecesIcon from "../../static/icons/paint-spray.svg";
import justTextIcon from "../../static/icons/fountain-pen-close-up.svg";
import contactIcon from "../../static/icons/contact.svg";
import bioIcon from "../../static/icons/anonymous.svg";

const NavBody = styled("div")`
  height: 300px;
  width: 300px;
  padding: 15px;
  ${props =>
    props.pathname === "/visual-poetry"
      ? "filter:invert(1);"
      : "filter:invert(0);"}
  background-color: transparent;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: ${MENU_ZINDEX};

  text-align: end;
`;
const ListIcon = styled("img")`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  margin-right: 10px;
  top: 5px;
  position: relative;
`;

export default function Nav() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <NavBody className="header" pathname={path}>
      <Link to="/">
        Home <ListIcon src={homeIcon} />
      </Link>
      <Link to="/visual-poetry">
        Visual Poetry <ListIcon src={visualPoetryIcon} />
      </Link>
      <Link to="/visual-pieces">
        Visual Pieces <ListIcon src={visualPiecesIcon} />
      </Link>
      <Link to="/just-text">
        Just Text <ListIcon src={justTextIcon} />
      </Link>
      <Link to="/contact">
        Contact <ListIcon src={contactIcon} />
      </Link>
      <Link to="/bio">
        Bio <ListIcon src={bioIcon} />
      </Link>
    </NavBody>
  );
}
