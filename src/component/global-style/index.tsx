import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  * {
    font-family: 'Nanum Gothic', sans-serif;
    font-display:'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size : 10px;
  }
  
  body {
    margin: 0;
    user-select : none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
