import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 1680px;
    overflow-x: auto;
    background-color: ${(props) => props.theme.colors.background}; ;
  }
`;

export default GlobalStyle;
