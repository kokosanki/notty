import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  padding: 10px;
  list-style: none;
  font-size: 15px;
  border: 1.5px solid ${({ theme: { colors } }) => colors.main};
  border-top: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
`;

const Li = ({ children }) => {
  return <StyledLi>{children}</StyledLi>;
};

export default Li;
