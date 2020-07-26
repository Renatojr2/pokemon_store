import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  }

  body {
    background:#eaeaea;

  }

  body, input, button {
    font: 16px Ubuntu, sans-serif;
  }

`
