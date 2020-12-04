import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
  background-image: url("${background}");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;