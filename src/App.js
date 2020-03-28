import React from "react";
import "./App.css";
import Notes from "./components/Notes";
import { Normalize, normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

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
      <Notes />
      <GlobalStyle />
    </div>
  );
}

export default App;
