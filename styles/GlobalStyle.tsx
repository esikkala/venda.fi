import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

  body {
    margin: 0;
    min-width: 1680px;
    overflow-x: auto;
    font-family: 'Roboto', sans-serif;
  }

 
`;

export default GlobalStyle;
