import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  
    overflow: hidden;
    
    scroll-behavior: smooth;
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    margin: 0;
    min-width: 1550px;
    overflow-x: auto;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
