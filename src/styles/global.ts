import { createGlobalStyle, ExecutionProps } from 'styled-components'

export const GlobalStyle = createGlobalStyle<ExecutionProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color:  ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: "Lexend", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
