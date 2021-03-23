import { ThemeProvider } from "@emotion/react";
import type { AppProps /*, AppContext */ } from "next/app";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
      <Layout darkState={[isDark, setIsDark]}>
        <Component {...pageProps} darkState={[isDark, setIsDark]} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
