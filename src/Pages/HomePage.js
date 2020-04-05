import React from "react";
import config from "../firebase";
import Notes from "../components/notesPanel/Notes";
import styled from "styled-components";
import Wrapper from "../containers/Wrapper";
import Logo from "../components/texts/Logo";
import Button from "../components/buttons/Button";

const StyledButton = styled(Button)`
  display: block;
  position: absolute;
  right: 25px;
  top: 10px;
  @media (max-width: 500px) {
    width: 70px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.basic};
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Logo />
      <StyledButton onClick={() => config.auth().signOut()}>
        Sign out
      </StyledButton>
      <Notes />
    </Wrapper>
  );
};

export default HomePage;
