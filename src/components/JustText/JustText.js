import React from "react";
import styled from "styled-components";

const JustTextBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function JustText() {
  return <JustTextBody> Just Text </JustTextBody>;
}
