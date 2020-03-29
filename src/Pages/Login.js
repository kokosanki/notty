import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import app from "../firebase.js";
import { AuthContext } from "../Auth.js";
import styled from "styled-components";

const Form = styled.form`
  color: ${({ theme: { colors } }) => colors.persianGreen};
`

const Login = ({ history }) => {
  const navItem = {name: 'Sign Up', path: '/signup'}

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
    <div>
      <h1>Log in</h1>
      <Form onSubmit={handleLogin}>
        <label>
          Email
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            className="email"
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log in</button>
      </Form>

      <div>
      <NavLink to={navItem.path}>
        {navItem.name}
      </NavLink>
    </div>
    </div>
  );
};

export default withRouter(Login);
