import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-image: ${({ theme: { backgroundImages } }) =>
    backgroundImages.main};
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  width: 100px;
  padding: 5px 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, className, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick} type="submit">
      {children}
    </StyledButton>
  );
};

export default Button;
