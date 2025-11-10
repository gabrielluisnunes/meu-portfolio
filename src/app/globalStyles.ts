'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // Reseta margens e paddings padrão de todos os elementos
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // Garante que padding e border não aumentem o tamanho do elemento
  }

  body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: transparent;
    color: #1a1a1a;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;