import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Ul = ({ children }) => {
  return <StyledUl>{children}</StyledUl>;
};

export default Ul;
