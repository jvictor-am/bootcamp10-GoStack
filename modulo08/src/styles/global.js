import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  .Toastify__toast-container {
    /* width: 500px; */
  }

  .Toastify__toast--error {
    border: 1px solid #fff;
    border-radius:4px;
    color: #fff;
    background-color: #3F51B5;
  }

  .Toastify__close-button {
    color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background: #f1f1f1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, strong {
    color:#222;
    font-size:16px;
    font-family:Roboto;
    display: flex;
    /* justify-content: center; */
    /* margin-bottom: 20px; */
    /* font-family:Arial, Helvetica, sans-serif */
  }

  button {
    cursor: pointer;
  }

`;
