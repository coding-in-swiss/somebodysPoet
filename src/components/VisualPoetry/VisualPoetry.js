import React from "react";
import styled from "styled-components";
import visualPoetryBackground from "../../static/images/visualPoetryBackground.jpeg";
const VisualBody = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${visualPoetryBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;
export default function VisualPoetry() {
  return <VisualBody></VisualBody>;
}
