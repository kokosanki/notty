import React from "react";
import "./App.css";
import { Normalize, normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import CurrentPage from "./Pages/CurrentPage";

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
    <div className="App">
      <Normalize />
      <CurrentPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
