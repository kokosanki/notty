import React from "react";
import "./App.css";
import { Normalize, normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import CurrentPage from "./Pages/CurrentPage";
import Theme from "./Theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: #fff;
    display: flex;
    width: 100vw;
    flex-direction: column;
  }
`;

function App() {
  return (
    <Theme>
      <div className="App">
        <Normalize />
        <CurrentPage />
        <GlobalStyle />
      </div>
    </Theme>
  );
}

export default App;
