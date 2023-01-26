import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MainLayout } from 'src/components/layouts/MainLayout/MainLayout'
import createEmotionCache from 'src/lib/createEmotionCache'
import theme from 'src/lib/theme'

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </JotaiProvider>
    </CacheProvider>
  )
}

export default MyApp
