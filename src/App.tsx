import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Main } from './pages/Main/index'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />

      <GlobalStyle />
    </ThemeProvider>
  )
}
