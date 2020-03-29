import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import { NavLink } from "react-router-dom";

const SignUp = ({ history }) => {
  const navItem = {name: 'Log in', path: '/login'}

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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>

      <NavLink to={navItem.path}>
        {navItem.name}
      </NavLink>
    </div>
  );
};

export default withRouter(SignUp);
