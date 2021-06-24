import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html,
  body {
    height: 100vh;
  }

  body,
  input,
  button {
    color: #000000;
  }

  body {
    background: #bfbfbf;
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased !important;
    padding: 40px;

    li {
      list-style-type: none;
    }

    p {
      padding: 10px 0;
    } 
    li {
      margin:10px 0;
    }
  }

  button {
    border: none;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
    cursor: pointer;
  }

  #root{
    a {
      text-decoration: none
    `} 
    
  }

  
`

export default GlobalStyle
