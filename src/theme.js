import { createMuiTheme } from '@material-ui/core/styles'
import { red, lightGreen, yellow } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#578e44',
    },
    secondary: {
      main: '#e9ffb9',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: yellow.A400,
    },
    background: {
      default: '#fff',
    },
    lightGreen: {
      main: lightGreen[100]
    }
  },
  textSizes: {
    mobile: {
      h1: '20px',
      h2: '18px',
      h3: '16px',
      h4: '14px',
      p: '12px',
    },
  },
})

export default theme