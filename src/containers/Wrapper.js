import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-family: "Baloo Thambi 2", cursive;
  position: relative;
  background-image: ${({ theme: { backgroundImages } }) =>
    backgroundImages.basic};
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
