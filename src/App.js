import React from "react";
import { Normalize, normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import CurrentPage from "./pages/CurrentPage";
import Theme from "./Theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: #fff;
    display: flex;
    width: 100%;
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
  // }
}

export default App;
