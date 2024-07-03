
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';
import theme from './styles/theme'
import Rotas from './routes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Rotas />
    </ThemeProvider>
  )
}
