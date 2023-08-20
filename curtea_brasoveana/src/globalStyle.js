import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
  }
  html, body {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  text {
    font-family: 'Times New Roman', Times, serif;
  }

`;

export default GlobalStyle;
