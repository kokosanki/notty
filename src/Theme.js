import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#09e37a",
  },
  fontSizes: {
    basic: "15px",
    small: "20px",
    medium: "25px",
    large: "35px"
  },
  backgroundImages: {
    basic: "linear-gradient(to right top, #bcbcbc, #c4c4c4, #cccccc, #d4d4d4, #dcdcdc, #e1e1e1, #e6e6e6, #ebebeb, #eeeeee, #f0f0f0, #f3f3f3, #f6f6f6)",
    main: "linear-gradient(to right top, #4ae34a, #3fdf53, #34da5b, #29d662, #1dd168, #15cf6d, #0dcc71, #04ca75, #02c979, #03c87d, #05c781, #09c684)",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;