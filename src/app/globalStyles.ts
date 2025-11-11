
'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html {
    overflow-x: hidden; /* Aplica o corte no elemento raiz */
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: transparent;
    color: #1a1a1a;
    
    
    overflow-x: hidden; 
    width: 100vw; 
    
    margin: 0; 
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;