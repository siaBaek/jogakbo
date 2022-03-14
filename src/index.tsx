import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap');
    body {
      font-family: 'Sunflower', sans-serif;
      font-size:15px;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: 'Nanum Gothic Coding', monospace;
    }
    * {
      box-sizing: border-box;
    }
    button {
      all: unset;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
