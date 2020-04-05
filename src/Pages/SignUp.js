import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import { NavLink } from "react-router-dom";
import Button from "../components/buttons/Button";
import Input from "../components/formfields/Input";
import Link from "../components/buttons/Link";
import H1 from "../components/texts/H1";
import H2 from "../components/texts/H2";
import AuthorizationWrapper from "../containers/AuthorizationWrapper";
import LeftWrapper from "../containers/LeftWrapper";
import RightWrapper from "../containers/RightWrapper";
import Form from "../components/Form";

const SignUp = ({ history }) => {
  const navItem = { name: "Log in", path: "/login" };

  const handleSubmit = useCallback(
    async (event) => {
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
    <AuthorizationWrapper>
      <LeftWrapper>
        <H1>Create an account</H1>
        <Form handleSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button>Sign up</Button>
        </Form>
      </LeftWrapper>

      <RightWrapper>
        <H2>Already have an account?</H2>
        <Link>
          <NavLink to={navItem.path}>{navItem.name}</NavLink>
        </Link>
      </RightWrapper>
    </AuthorizationWrapper>
  );
};

export default withRouter(SignUp);
