import React from "react";
import styled from "styled-components";
import homeBackground from "../../static/images/homeBackground.jpeg";
import { BACKGROUND_ZINDEX } from "../../consts";

const HomeBody = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${homeBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;
const HomeImage = styled("img")`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${BACKGROUND_ZINDEX};
`;
export default function Home() {
  return (
    <HomeBody className="header">
      {/* <HomeImage src={homeBackground} /> */}
      Home
    </HomeBody>
  );
}
