import React from "react";
import styled from "styled-components";

const BioBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Bio() {
  return <BioBody>Bio</BioBody>;
}
