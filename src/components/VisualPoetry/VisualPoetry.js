import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
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

const VideoHolder = styled("div")`
  height: 350px;
  width: 450px;
  border: 1px solid black;
  position: absolute;
  top: 23%;
  left: 15%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  @media (max-width: 1500px) {
    top: 100px;
    left: 150px;
  }
`;
export default function VisualPoetry() {
  const opts = {
    height: "350",
    width: "450",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <VisualBody>
      <VideoHolder>
        <YouTube videoId="SMbhdRvZWhs" opts={opts} />
      </VideoHolder>
    </VisualBody>
  );
}
