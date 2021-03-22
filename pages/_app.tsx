import { ThemeProvider } from '@emotion/react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useState } from 'react';
import '../styles/globals.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps } : AppProps) {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
      <Component {...pageProps} darkState={[isDark, setIsDark]}/>
    </ThemeProvider>
    )
}

export default MyApp
