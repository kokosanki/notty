import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

const H2 = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default H2;
