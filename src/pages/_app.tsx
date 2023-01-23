import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from 'src/lib/theme'
import createEmotionCache from 'src/lib/createEmotionCache'
import { MainLayout } from 'src/components/layouts/MainLayout/MainLayout'
import { Provider } from 'react-redux'
import { store } from 'src/stores/store'
import { Provider as JotaiProvider } from 'jotai'

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <JotaiProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </Provider>
      </JotaiProvider>
    </CacheProvider>
  )
}

export default MyApp
