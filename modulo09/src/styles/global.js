import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"); */

  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box
  }

  *:focus {
    outline:0
  }

  html, body, #root {
    min-height: 100vh;
    /* height: 100%; */
  }

  body {
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    /* background: #f1f1f1; */
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color:#222;
    font-size:14px;
    font-family:'Roboto', sans-serif
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style:none;
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px #232129 inset;
    transition: 'color 9999s ease-out, background-color 9999s ease-out';
    transition-delay: 9999s;
  }

  .Toastify__toast--error {
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  /* font-weight: bold; */
  background-color: #ff3434;
}

.Toastify__toast--success {
  border: 2px solid #fff;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}

.Toastify__close-button {
  color: #fff;
  opacity:1
}
.Toastify__progress-bar {
  height: 4px;
  /* background-color: #000; */
}

.ps .ps__rail-x:hover, .ps .ps__rail-y:hover,
.ps .ps__rail-x:focus, .ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking, .ps .ps__rail-y.ps--clicking{
  background-color: transparent;
  /* background-color: #7159c1; */
  opacity: 1;
  border-radius: 8px;
}

.ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y {
    /* background-color: #ff892e; */
    background-color: #7159c1;
    width: 6px;
}

`;
