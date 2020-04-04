import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.main};
  text-align: center;
  width: 100%;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const H1 = ({children}) => {
  return <StyledH1>{children}</StyledH1>;
};

export default H1;
