import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Cormorant', 'serif'].join(','),
  },
  palette: {
    background: {
      default: '#282a36',
      paper: '#383a59',
    },
    text: {
      primary: '#f8f8f2',
      secondary: '#bd93f9',
    },
  },
})
