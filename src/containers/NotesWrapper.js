import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 70vw;
  @media (max-width: 500px) {
    width: 85vw;
  }
`;
const NotesWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default NotesWrapper;
