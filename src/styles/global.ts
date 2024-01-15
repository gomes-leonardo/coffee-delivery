import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-normal']};
}

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.white}; 
    font-family: ${(props) => props.theme.fonts.roboto};
    
  }
`
