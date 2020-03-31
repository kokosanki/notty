import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import StyledLink from "../components/StyledLink";
import StyledH1 from "../components/StyledH1";
import StyledH2 from "../components/StyledH2";
import StyledAuthorizationWrapper from "../components/StyledAuthorizationWrapper";
import StyledLeftWrapper from "../components/StyledLeftWrapper";
import StyledRightWrapper from "../components/StyledRightWrapper";

const Form = styled.form`
  color: ${({ theme: { colors } }) => colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUp = ({ history }) => {
  const navItem = { name: "Log in", path: "/login" };

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <StyledAuthorizationWrapper>
      <StyledLeftWrapper>
        <StyledH1>Create an account</StyledH1>
        <Form onSubmit={handleSignUp}>
            <StyledInput name="email" type="email" placeholder="Email" />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
            />
          <StyledButton>Sign up</StyledButton>
        </Form>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <StyledH2>Already have an account?</StyledH2>
        <StyledLink>
          <NavLink to={navItem.path}>{navItem.name}</NavLink>
        </StyledLink>
      </StyledRightWrapper>
    </StyledAuthorizationWrapper>
  );
};

export default withRouter(SignUp);
