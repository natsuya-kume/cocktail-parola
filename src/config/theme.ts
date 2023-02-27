import { createTheme } from '@mui/material/styles'

export type ThemeColorType = 'light' | 'dark'

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

export const colorConfigs = {
  sidebar: {
    activeBg: '#ff79c6',
  },
  text: {
    primary: '#f8f8f2',
    secondary: '#bd93f9',
    tertiary: '#a1a2a7',
    quaternary: '#48bd67',
    quinary: '#ff79c6',
  },
}

export const getColorTheme = (mode: ThemeColorType) => {
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
