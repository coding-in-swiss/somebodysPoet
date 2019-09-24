import React from "react";
import styled from "styled-components";
import homeBackground from "../../static/images/homeBackground.jpeg";

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

export default function Home() {
  return <HomeBody className="header"></HomeBody>;
}
