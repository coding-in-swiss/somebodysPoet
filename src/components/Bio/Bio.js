import React from "react";
import styled from "styled-components";
import bioBackground from "../../static/images/bioBackground.jpeg";

const BioBody = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bioBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Bio() {
  return <BioBody>Bio</BioBody>;
}
