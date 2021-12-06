import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {   
    font-family: "SourceSansPro", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666;
    background-color: #f2f2f2;
    -webkit-text-size-adjust: 100%; // 3
    -webkit-tap-highlight-color: rgba($black, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;  
  }

  a.active,.nav-link.active {
    color: #2081CE;
  }

  a:focus {
    outline: none;
  }

  a:hover {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle;
