import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import URLAnimation from 'src/assets/js/classUrlAnimation'
import { MainLayout } from 'src/components/layouts/MainLayout/MainLayout'
import { getColorTheme, ThemeColorType } from 'src/config/theme'
import createEmotionCache from 'src/lib/createEmotionCache'
new URLAnimation()
const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [mode, setMode] = useState<ThemeColorType>('light')

  const theme = getColorTheme(mode)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout handleChangeThemeColor={setMode} themeColor={mode}>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </JotaiProvider>
    </CacheProvider>
  )
}

export default MyApp
