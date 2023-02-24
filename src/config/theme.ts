import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    background: {
      default: '#282a36',
    },
    text: {
      primary: '#f8f8f2',
      secondary: '#bd93f9',
    },
  },
})

export const getColorTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    typography: {
      fontFamily: ['Cormorant', 'serif'].join(','),
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#183052',
              light: '#eeeeee',
              contrastText: '#eeeeee',
            },
            background: {
              default: '#ffffff',
              paper: '#eeeeee',
            },
            divider: '#183052',
            text: {},
          }
        : {
            primary: {
              main: '#f8f8f2',
              light: '#383a59',
              contrastText: '#282a36',
            },
            divider: '#282a36',
            background: {
              default: '#282a36',
              paper: '#383a59',
            },
            text: {
              primary: '#fff',
            },
          }),
    },
  })
}
