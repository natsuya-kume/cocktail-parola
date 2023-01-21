import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from 'src/stores/store'
import { theme } from '../src/config/theme'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
]
