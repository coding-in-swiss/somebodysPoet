import React from "react";
import styled from "styled-components";

const ContactBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Contact() {
  return <ContactBody>Contact</ContactBody>;
}
