import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  color: ${({ theme: { colors } }) => colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Form = ({ children, handleSubmit }) => {
  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
