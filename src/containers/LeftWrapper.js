import React from "react";
import styled from "styled-components";

const StyledLeftWrapper = styled.div`
  color: ${({ theme: { colors } }) => colors.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 65%;
  @media (max-width: 500px) {
    width: 100%;
    height: 70vh;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const LeftWrapper = ({ children }) => {
  return <StyledLeftWrapper>{children}</StyledLeftWrapper>;
};

export default LeftWrapper;
