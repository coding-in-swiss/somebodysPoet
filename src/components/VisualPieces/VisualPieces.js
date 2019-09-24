import React from "react";
import styled from "styled-components";

const VisualPiecesBody = styled("div")`
  height: 100vh;
  width: 100vw;
  border: 3px solid brown;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function VisualPieces() {
  return <VisualPiecesBody>Visual Pieces</VisualPiecesBody>;
}
