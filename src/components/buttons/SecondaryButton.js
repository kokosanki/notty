import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 1.5px solid #fff;
  color: #fff;
  border-radius: 15px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.basic};
  padding: 3px 10px;
  font-weight: bold;
  margin-left: 5px;
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #fff;
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

const SecondaryButton = ({ children, onClick, id }) => {
  return (
    <StyledButton onClick={onClick} id={id} type="submit">
      {children}
    </StyledButton>
  );
};

export default SecondaryButton;
