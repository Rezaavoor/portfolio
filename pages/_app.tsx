import { ThemeProvider } from "@emotion/react";
import type { AppProps /*, AppContext */ } from "next/app";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import theme from "../styles/theme";
import NProgres from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgres.start());
Router.events.on("routeChangeComplete", () => NProgres.done());
Router.events.on("routeChangeError", () => NProgres.done());

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
