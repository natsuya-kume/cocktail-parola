import { ThemeProvider } from '@mui/material'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as nextImage from 'next/image'
import { getColorTheme } from '../src/config/theme'
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

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

const theme = getColorTheme('dark')

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
