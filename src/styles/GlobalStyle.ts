import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 72.5%;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style-type: none;
  }

  a,
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #252525;
  }

  a {
    text-decoration: none;
  }
`;
