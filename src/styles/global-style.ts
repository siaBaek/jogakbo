import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap');
body {
  font-family: 'Sunflower', sans-serif;
  font-size:15px;
  background:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Nanum Gothic Coding', monospace;
}
* {
  box-sizing: border-box;
}
button {
  all: unset;
  box-sizing: border-box;
}
a {
  color:inherit;
  text-decoration:none;
}
a:hover {
  color:inherit;
}
`;
