import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import CartProvider from './context/CartContext'
import { FormProvider } from './context/FormContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <FormProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </FormProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
