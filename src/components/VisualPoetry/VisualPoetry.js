import React from "react";
import styled from "styled-components";

const VisualBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function VisualPoetry() {
  return <VisualBody>Visual Poetry</VisualBody>;
}
