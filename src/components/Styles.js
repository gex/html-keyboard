import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const Styles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font: 1.6rem / 1.5 system-ui;
    margin: 0;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 1.4;
  }

  ul {
    margin: 0;
    padding-left: 2rem;
  }
`

export default Styles
