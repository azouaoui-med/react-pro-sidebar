import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height:100vh; 
    
     > div:first-child, > #root {
        min-height:100%;
    }
  }
`;

export default GlobalStyle;
