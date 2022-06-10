import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import theme from '../styles/Theme'
function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
