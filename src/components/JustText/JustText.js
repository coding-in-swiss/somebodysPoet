import React from "react";
import styled from "styled-components";
import justTextBackground from "../../static/images/justTextBackground.jpeg";

const JustTextBody = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${justTextBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function JustText() {
  return <JustTextBody> Just Text </JustTextBody>;
}
