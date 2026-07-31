"use client";

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-gutter: stable;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }
`;