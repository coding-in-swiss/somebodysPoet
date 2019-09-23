import React from "react";
import styled from "styled-components";

const Poems = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return <Poems>Home</Poems>;
}
