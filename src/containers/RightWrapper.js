import React from "react";
import styled from "styled-components";

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 35%;
  background-image: ${({ theme: { backgroundImages } }) =>
    backgroundImages.main};
  border-radius: 0px 10px 10px 0;
  padding: 10px;
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 0 10px 0;
    border-radius: 0;
  }
`;

const RightWrapper = ({ children }) => {
  return <StyledRightWrapper>{children}</StyledRightWrapper>;
};

export default RightWrapper;
