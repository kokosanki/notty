import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import app from "../firebase.js";
import { AuthContext } from "../Auth.js";
import Button from "../components/buttons/Button.js";
import Input from "../components/formfields/Input.js";
import Link from "../components/buttons/Link.js";
import H1 from "../components/texts/H1.js";
import H2 from "../components/texts/H2.js";
import AuthorizationWrapper from "../containers/AuthorizationWrapper.js";
import LeftWrapper from "../containers/LeftWrapper.js";
import RightWrapper from "../containers/RightWrapper.js";
import Form from "../components/Form.js";
import H3 from "../components/texts/H3.js";

const Login = ({ history }) => {
  const navItem = { name: "Sign Up", path: "/signup" };

  const handleSubmit = useCallback(
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
    <AuthorizationWrapper>
      <LeftWrapper>
        <H1>Log in to your account</H1>
        <Form handleSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button>Log in</Button>
        </Form>
      </LeftWrapper>
      <RightWrapper>
        <H2>Don't have an account yet?</H2>
        <H3>Create an account and start taking notes today!</H3>
        <Link>
          <NavLink to={navItem.path}>{navItem.name}</NavLink>
        </Link>
      </RightWrapper>
    </AuthorizationWrapper>
  );
};

export default withRouter(Login);
