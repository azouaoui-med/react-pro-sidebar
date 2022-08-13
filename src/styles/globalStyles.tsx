import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height:100vh; 
    
     > div:first-child, > #root {
        min-height:100%;
    }
  }
`;
