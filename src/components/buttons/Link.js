import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 5px 12px;
  user-select: none;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
  }
  &:hover {
    background-color: #fff;
    a {
      color: ${({ theme: { colors } }) => colors.main};
      font-weight: bold;
    }
    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
`;

const Link = ({ children }) => {
  return <StyledLink>{children}</StyledLink>;
};

export default Link;
