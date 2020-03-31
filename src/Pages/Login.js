import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import app from "../firebase.js";
import { AuthContext } from "../Auth.js";
import styled from "styled-components";
import StyledButton from "../components/StyledButton.js";
import StyledInput from "../components/StyledInput.js";
import StyledLink from "../components/StyledLink.js";
import StyledH1 from "../components/StyledH1.js";
import StyledH2 from "../components/StyledH2.js";
import StyledAuthorizationWrapper from "../components/StyledAuthorizationWrapper.js";
import StyledLeftWrapper from "../components/StyledLeftWrapper.js";
import StyledRightWrapper from "../components/StyledRightWrapper.js";

const Form = styled.form`
  color: ${({ theme: { colors } }) => colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH3 = styled.h3`
  margin-top: 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: normal;
`;

const Login = ({ history }) => {
  const navItem = { name: "Sign Up", path: "/signup" };

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <StyledAuthorizationWrapper>
      <StyledLeftWrapper>
        <StyledH1>Log in to your account</StyledH1>
        <Form onSubmit={handleLogin}>
            <StyledInput name="email" type="email" placeholder="Email" />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
            />
          <StyledButton>Log in</StyledButton>
        </Form>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledH2>Don't have an account yet?</StyledH2>
        <StyledH3>Create an account and start taking notes today!</StyledH3>
        <StyledLink>
          <NavLink to={navItem.path}>{navItem.name}</NavLink>
        </StyledLink>
      </StyledRightWrapper>
    </StyledAuthorizationWrapper>
  );
};

export default withRouter(Login);
