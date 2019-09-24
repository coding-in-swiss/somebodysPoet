import React from "react";
import styled from "styled-components";
import homeBackground from "../../static/images/homeBackground.jpeg";
const HomeBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeImage = styled("img")`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export default function Home() {
  return (
    <HomeBody>
      <HomeImage src={homeBackground} />
      Home
    </HomeBody>
  );
}
