import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* @media only screen and (min-width: 1200px) {
      overflow: hidden;
    }  */
    scroll-behavior: smooth;
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }  
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
