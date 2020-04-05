import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 40px;
  color: ${({ theme: { colors } }) => colors.main};
  text-align: center;
  width: 100%;
  margin: 10px 0;
  font-weight: normal;
  user-select: none;
`;

const Logo = () => {
  return <StyledLogo>Notty</StyledLogo>;
};

export default Logo;
