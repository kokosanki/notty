import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 2px solid ${({ theme: { colors } }) => colors.main};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 20px 0;
  resize: none;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const Textarea = ({ children, value, placeholder, onChange }) => {
  return (
    <StyledTextarea
      required
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    >
      {children}
    </StyledTextarea>
  );
};

export default Textarea;
