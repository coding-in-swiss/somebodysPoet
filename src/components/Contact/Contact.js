import React from "react";
import styled from "styled-components";
import contactBackground from "../../static/images/contactBackground.jpeg";

const ContactBody = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${contactBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Contact() {
  return <ContactBody>Contact</ContactBody>;
}
