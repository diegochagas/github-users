import { createGlobalStyle } from 'styled-components'

import { COLORS } from '.'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.GRAY_900};
    color: ${COLORS.GRAY_300};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }

  .App {
    margin-top: 3rem;
  }
`